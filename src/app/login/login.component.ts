import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { AdminLoginRequest } from '../shared/models/admin-login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: FormControl;
  password: FormControl;
  waiting: boolean = false;
  errorMessage: String;
  
  constructor(private authService: AuthService, private router: Router) { }

  async onSubmit() {
    let loginRequest = new AdminLoginRequest(this.userName.value, this.password.value);
    this.waiting = true;
    const success = await this.authService.attemptAuth(loginRequest);

    if (success) {
      // this.router.navigate();
    } else {
      this.errorMessage = 'Incorrect username or password.';
    }

    this.waiting = false;
  }

  ngOnInit() {
    this.userName = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  }

  getErrorMessageUserName(): string {
    if (this.userName.hasError('required')) return 'You must enter an username';
    if (this.userName.hasError('minlength')) return 'Your username must have at least 4 characters';
    return '';
  }

  getErrorMessagePassword(): string {
    if (this.password.hasError('required')) return 'You must enter a password';
    if (this.password.hasError('minlength')) return 'Your password should have at least 8 characters';
    return '';
  }

}
