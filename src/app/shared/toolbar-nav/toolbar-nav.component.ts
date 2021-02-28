import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.scss'],
})
export class ToolbarNavComponent implements OnInit {
  constructor(private router: Router, private authSVC: AuthService) {}

  ngOnInit(): void {}

  // === [ RedirectPages] ===
  async toDashboard() {
    await this.router.navigateByUrl('/dashboard');
  }
  async toUsers() {
    await this.router.navigateByUrl('/users');
  }
  async toCars() {
    await this.router.navigateByUrl('/cars');
  }
  async toLogin() {
    await this.router.navigateByUrl('/auth');
  }

  //
  async logOut() {
    this.authSVC.logOut();
    await this.router.navigateByUrl('/auth');
  }
}
