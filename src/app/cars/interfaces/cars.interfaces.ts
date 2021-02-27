export interface ICar {
  sales: Sale[];
}

export interface Sale {
  id: number;
  date: string;
  quantity: number;
  car_make: string;
}

// CHART INTERFACE
export interface Chart {
  name: string;
  total: number;
  series: Series[];
}

export interface Series {
  value: number;
  name: string;
}
