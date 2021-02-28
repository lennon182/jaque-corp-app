import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthResp, ILogin } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApi: string = environment.authAPI;
  private credentials: ILogin = { email: '', password: '' };
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<IAuthResp> {
    this.credentials = { email, password };
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    return this.http.post<IAuthResp>(
      `${this.authApi}/admin/login`,
      this.credentials,
      {
        headers,
      }
    );
  }
  // Verify Auth in Authenticated Guard
  verifyAuth(token: string) {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('key-access-token', token);

    return this.http.get<IAuthResp>(`${this.authApi}/users/verify`, {
      headers: {
        'key-access-token': token,
      },
    });
  }

  logOut() {
    localStorage.removeItem('jaque-token');
  }
}
