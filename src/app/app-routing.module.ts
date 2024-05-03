import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
//ESTE ROUTE ES PARA ROUTEAR HEROES A DETAILS 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', },
  { path: 'detail/:id', component: HeroDetailComponent ,},
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'heroes', component: HeroesComponent, }
];
//ESTE ROUTE ES PARA ROUTEAR DASHBOARD A DETAILS
const routes2: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'details/:id',
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes2),RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
