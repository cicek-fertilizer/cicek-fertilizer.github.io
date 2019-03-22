import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  // Update the user on the server (email, pass, etc)
  update(user: User): Observable<User> {
    /*
    return this.apiService
    .put('/user', { user })
    .map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    });
    */
    return null;
  }

  postUser() {
    //    this.http.post()
  }
}
