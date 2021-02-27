import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  async toUsers() {
    await this.router.navigateByUrl('/users');
  }
  async toCars() {
    await this.router.navigateByUrl('/cars');
  }
  async toLogin() {
    await this.router.navigateByUrl('/auth');
  }
}
