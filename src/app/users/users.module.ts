import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgMaterialModule,
    PipesModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
