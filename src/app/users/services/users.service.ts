import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
// Customs
import { IResUsers } from './../interfaces/users.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersURL = environment.usersAPI;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IResUsers>(this.usersURL).pipe(
      map((user) => {
        return user.users;
      })
    );
  }
}
