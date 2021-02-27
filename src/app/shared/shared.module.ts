import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { PaginatorCardsComponent } from './paginator-cards/paginator-cards.component';
import { PaginatorListComponent } from './paginator-list/paginator-list.component';
import { ToolbarNavComponent } from './toolbar-nav/toolbar-nav.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    PaginatorComponent,
    PaginatorCardsComponent,
    PaginatorListComponent,
    ToolbarNavComponent,
  ],
  imports: [CommonModule, NgMaterialModule, PipesModule],
  exports: [
    PaginatorComponent,
    ToolbarNavComponent,
    PaginatorCardsComponent,
    PaginatorListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
