import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator-cards',
  templateUrl: './paginator-cards.component.html',
  styleUrls: ['./paginator-cards.component.scss'],
})
export class PaginatorCardsComponent implements OnInit {
  @Input() dataCard: any[] = [];
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
