import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { Admin } from '../models/admin.model';
import { AdminLoginRequest } from '../models/admin-login-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Admin> = new BehaviorSubject<Admin>(null);
  public currentUser$: Observable<Admin> = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  private isAuthenticatedSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public isAuthenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private apiService: ApiService) {}

  signOut(): void {
    this.purgeAuth();
  }

  purgeAuth() {
    // Remove JWT from localstorage
    // Set current user to an empty object
    this.currentUserSubject.next(null);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }


  async attemptAuth(loginRequest: AdminLoginRequest): Promise<boolean> {
    console.log(`sending the request from service:  ${new Date().toLocaleTimeString()}`);
    const result = await this.apiService.post('account/login', loginRequest).toPromise();
    console.log(`got the response in service:  ${new Date().toLocaleTimeString()}`);
    if (result.admin) {
      this.currentUserSubject.next(result.admin);
      return true;
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
      return false;
    }
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  hasCurrentUser(): boolean {
    return this.currentUserSubject.value != null;
  }
}
