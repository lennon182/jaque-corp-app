import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/users/interfaces/users.interface';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  // Paginator: ( TotalData, list_per_page, page_number)
  transform(data: any[], size_per_page: number, pag_number: number): any[] {
    //
    size_per_page = size_per_page;
    pag_number = pag_number;

    const paginator = data.slice(
      pag_number * size_per_page,
      (pag_number + 1) * size_per_page
    );
    return paginator;
  }
}
