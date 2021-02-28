import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { ICar, Sale, Chart } from '../interfaces/cars.interfaces';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  isLoad: boolean = true;
  subscriptors: Subscription = new Subscription();
  cars: ICar[] = [];
  //
  // TODO: Pasar las opciones a un archivo separado
  // ChartOptions
  carsData: Chart[] = [];
  legend: boolean = true;
  autoScale: boolean = true;
  legendPosition: string = 'right';
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'DATE';
  yAxisLabel: string = 'SALES $USD';
  timeline: boolean = false;
  legendTitle: string = 'Cars Sales';
  //
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  // TODO: Pasar esta variable a un archivo separado
  code: string = `
  [
    {
      "name": "car_mark",
      "series": [
        {
          "value": 5511,
          "name": "2016-09-14T00:42:58.630Z"
        },
        {
          "value": 3744,
          "name": "2016-09-13T09:02:26.600Z"
        },
        {
          "value": 3468,
          "name": "2016-09-16T05:29:55.736Z"
        },
        {
          "value": 5956,
          "name": "2016-09-17T14:46:12.493Z"
        },
        {
          "value": 4581,
          "name": "2016-09-16T19:21:37.700Z"
        },
        {
          "name": "2016-09-17T05:48:18.167Z",
          "value": 4028
        },
        {
          "name": "2016-09-20T05:26:58.538Z",
          "value": 4284
        },
        {
          "name": "2016-09-13T01:29:12.855Z",
          "value": 4253
        },
        {
          "name": "2016-09-23T18:02:53.138Z",
          "value": 3774
        },
        {
          "name": "2016-09-17T01:48:05.648Z",
          "value": 2403
        },
        {
          "name": "2016-09-20T22:25:40.934Z",
          "value": 3868
        }
      ]
    },
    {
      "name": "car_mark",
      "series": [
        {
          "value": 4007,
          "name": "2016-09-14T00:42:58.630Z"
        },
        {
          "value": 3930,
          "name": "2016-09-13T09:02:26.600Z"
        },
        {
          "value": 6950,
          "name": "2016-09-16T05:29:55.736Z"
        },
        {
          "value": 2935,
          "name": "2016-09-17T14:46:12.493Z"
        },
        {
          "value": 6881,
          "name": "2016-09-16T19:21:37.700Z"
        },
        {
          "name": "2016-09-17T05:48:18.167Z",
          "value": 4164
        },
        {
          "name": "2016-09-20T05:26:58.538Z",
          "value": 5953
        },
        {
          "name": "2016-09-13T01:29:12.855Z",
          "value": 4712
        },
        {
          "name": "2016-09-23T18:02:53.138Z",
          "value": 4471
        },
        {
          "name": "2016-09-17T01:48:05.648Z",
          "value": 3542
        },
        {
          "name": "2016-09-20T22:25:40.934Z",
          "value": 4372
        }
      ]
    },
  ]
  `;
  constructor(private carsSVC: CarsService) {}

  // === [Inits] ===
  ngOnInit(): void {
    this.getCars();
  }
  // === [ GetCars From Service ] ===
  getCars(): void {
    this.subscriptors.add(
      this.carsSVC.getCars().subscribe((carsData) => {
        this.carsData = carsData;
        this.isLoad = false;
      })
    );
  }
  // === [ Unsubscribe ] ===
  ngOnDestroy(): void {
    this.subscriptors.unsubscribe();
  }
}
