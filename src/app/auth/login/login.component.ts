import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoad: boolean = true;
  hide = true;

  //
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoad = false;
    }, 300);
  }

  login() {
    console.log('Login...');
  }
  async toUsers() {
    await this.router.navigateByUrl('/users');
  }
  async toCars() {
    await this.router.navigateByUrl('/cars');
  }
}
