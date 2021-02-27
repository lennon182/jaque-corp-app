import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() data: any[] = [];
  size_per_page: number = 10;
  pag_number: number = 1;
  pageSizeOptions: number[] = [5, 10];
  constructor() {}

  ngOnInit(): void {}

  paginator(e: PageEvent) {
    this.size_per_page = e.pageSize;
    this.pag_number = e.pageIndex + 1;
  }
}
