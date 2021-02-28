import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/users.interface';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  subscriptors: Subscription = new Subscription();
  users: IUser[] = [];
  isLoad: boolean = true;

  constructor(private usersSVC: UsersService) {}

  // === [ Inits ] ===
  ngOnInit(): void {
    this.getUsers();
  }

  // === [ Get Users From Service ] ===
  getUsers(): void {
    this.usersSVC.getUsers().subscribe((users) => {
      this.users = users;
      this.isLoad = false;
    });
  }

  // === [ Unsubscribe ] ===
  ngOnDestroy(): void {
    this.subscriptors.unsubscribe();
  }
}
