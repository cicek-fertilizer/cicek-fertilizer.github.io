import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  showSignIn(): void {
    this.router.navigate(['/login']);
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/']);
  }
}
