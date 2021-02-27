import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.scss'],
})
export class ToolbarNavComponent implements OnInit {
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
