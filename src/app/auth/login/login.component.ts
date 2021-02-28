import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IAuthResp } from '../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoad: boolean = true;
  authError: boolean = false;
  hide = true;
  email: string = '';
  password: string = '';
  //
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  //
  constructor(private router: Router, private authSVC: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoad = false;
    }, 300);
  }

  login() {
    this.isLoad = true;
    this.email = this.emailFormControl.value;
    this.password = this.passwordFormControl.value;
    this.authSVC
      .login(this.email, this.password)
      .subscribe(async (resp: IAuthResp) => {
        console.log('AUTH=>', resp);
        !resp.ok
          ? ((this.authError = true), (this.isLoad = false))
          : ((this.authError = false),
            this.saveLocalStorage(`${resp.token}`),
            await this.router.navigateByUrl('/dashboard'),
            (this.isLoad = false));
      });
  }

  // === [ RedirectPAginations ] ===
  async toUsers() {
    await this.router.navigateByUrl('/users');
  }
  async toCars() {
    await this.router.navigateByUrl('/cars');
  }

  saveLocalStorage(token: string): void {
    console.log(token);
    localStorage.setItem('jaque-token', token);
  }
}
