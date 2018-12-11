import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './auth/auth-guard.service';
import {SigninComponent} from './signin/signin.component';
import {FormComponent} from './_layout/form/form.component';
import {DashboardComponent} from './_layout/dashboard/dashboard.component';
import {FollowersComponent} from './followers/followers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {path: '', redirectTo: 'followers', pathMatch: 'full'},
      {path: 'followers', component: FollowersComponent}
    ]
  },
  {
    path: '',
    component: FormComponent,
    children: [
      {path: 'login', component: SigninComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
