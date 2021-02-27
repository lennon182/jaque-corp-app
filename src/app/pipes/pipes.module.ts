import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tob64Pipe } from './tob64/tob64.pipe';
import { PaginationPipe } from './pagination/pagination.pipe';

@NgModule({
  declarations: [Tob64Pipe, PaginationPipe],
  imports: [CommonModule],
  exports: [Tob64Pipe, PaginationPipe],
})
export class PipesModule {}
