import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator-list',
  templateUrl: './paginator-list.component.html',
  styleUrls: ['./paginator-list.component.scss'],
})
export class PaginatorListComponent implements OnInit {
  @Input() dataList: any[] = [];
  //Paginator
  size_per_page: number = 5;
  pag_number: number = 0;
  pageSizeOptions: number[] = [5, 10];
  constructor() {}

  ngOnInit(): void {}

  paginator(e: PageEvent) {
    this.size_per_page = e.pageSize;
    this.pag_number = e.pageIndex;
  }
}
