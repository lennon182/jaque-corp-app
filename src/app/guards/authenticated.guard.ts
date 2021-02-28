import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IAuthResp } from '../auth/interfaces/login.interface';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private authSVC: AuthService) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const token = localStorage.getItem('jaque-token');
    // GET TOKEN FROM STORAGE
    if (token === '' || token === null) {
      await this.router.navigateByUrl('/auth');
      return false;
    }
    // Verify Auth From Server
    const resp = await this.authSVC.verifyAuth(token).toPromise();
    if (!resp.ok) {
      return false;
    }
    return true;
  }
}
