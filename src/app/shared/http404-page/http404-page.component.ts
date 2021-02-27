import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-http404-page',
  templateUrl: './http404-page.component.html',
  styleUrls: ['./http404-page.component.scss'],
})
export class Http404PageComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Jaque Corp 404');
  }
}
