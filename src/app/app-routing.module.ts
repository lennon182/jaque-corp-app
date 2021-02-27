import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http404PageComponent } from './shared/http404-page/http404-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'cars',
    loadChildren: () =>
      import('./../app/cars/cars.module').then((m) => m.CarsModule),
  },
  { path: '404', component: Http404PageComponent },
  { path: '**', component: Http404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
