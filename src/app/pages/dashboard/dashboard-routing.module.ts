import { jsDocComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"home", component:HomeComponent},
  {path:"**", redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
