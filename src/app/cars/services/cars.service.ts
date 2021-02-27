import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
// Customs
import { Chart, ICar, Sale } from './../interfaces/cars.interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  carsURL = environment.carsAPI;
  chartData: Chart[] = [];
  constructor(private http: HttpClient) {}

  getCars(): Observable<Chart[]> {
    return this.http.get<ICar>(this.carsURL).pipe(
      map(({ sales }) => {
        return this.getDataFiltered(sales);
      })
    );
  }

  getDataFiltered(sales: Sale[]): Chart[] {
    // FILTER FOR CHART ARRAY
    // FORMAT FOR NGX-CHARTS
    let founddata = null;
    let reduce = null;
    // 1. We walk te Array data to filter duplicated Data
    sales.forEach((sale) => {
      // 2. "SOME" help us to filter duplicated data
      this.chartData.some(
        (chart) => chart.name.toLowerCase() === sale.car_make.toLowerCase()
      )
        ? // 3. If data is duplicated we add a new object to array for chart
          ((founddata = this.chartData.filter(
            (d) => d.name.toLowerCase() === sale.car_make.toLowerCase()
          )),
          // 3.a push into Array Chart
          // TODO: Separar la funcion Reduce en una función separada
          (reduce = founddata[0].series.reduce(
            (acc, val) => acc + val.value,
            0
          )),
          founddata[0].series.push({
            value: sale.quantity,
            name: `${sale.date}!`,
          }),
          (founddata[0].total = reduce + sale.quantity))
        : // 4. If data doesn't duplicated we save it the Chart Array for first time
          (this.chartData = [
            ...this.chartData,
            {
              name: sale.car_make,
              total: sale.quantity,
              series: [{ value: sale.quantity, name: sale.date }],
            },
          ]);
    });

    return this.chartData;
  }
}
