import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/users.interface';
import { UsersService } from '../services/users.service';
import { map } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
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
  //
  size_per_page: number = 5;
  pag_number: number = 1;
  pageSizeOptions: number[] = [5, 10];
  constructor(private usersSVC: UsersService) {}

  // Inits
  ngOnInit(): void {
    this.getUsers();
  }

  // Get Users From Service
  getUsers() {
    this.usersSVC.getUsers().subscribe((users) => {
      this.users = users;
      this.isLoad = false;
    });
  }

  // paginator(e: PageEvent) {
  //   this.size_per_page = e.pageSize;
  //   this.pag_number = e.pageIndex + 1;
  // }

  // Unsubscribes
  ngOnDestroy(): void {
    this.subscriptors.unsubscribe();
  }
}
