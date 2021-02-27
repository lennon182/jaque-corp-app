import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorCardsComponent } from './paginator-cards.component';

describe('PaginatorCardsComponent', () => {
  let component: PaginatorCardsComponent;
  let fixture: ComponentFixture<PaginatorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
