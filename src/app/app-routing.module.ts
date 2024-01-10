import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { combineLatest } from 'rxjs';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/dashboard/users/users.component';
import { AddUserComponent } from './admin/dashboard/add-user/add-user.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'new', component: AddUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
