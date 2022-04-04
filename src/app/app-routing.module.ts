import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"dashboard", loadChildren: ()=> import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:"**", redirectTo: "home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
