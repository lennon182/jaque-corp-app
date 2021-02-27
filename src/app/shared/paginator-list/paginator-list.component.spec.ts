import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorListComponent } from './paginator-list.component';

describe('PaginatorListComponent', () => {
  let component: PaginatorListComponent;
  let fixture: ComponentFixture<PaginatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
