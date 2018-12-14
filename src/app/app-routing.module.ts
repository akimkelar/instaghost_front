import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './auth/auth-guard.service';
import {FormComponent} from './_layout/form/form.component';
import {DashboardComponent} from './_layout/dashboard/dashboard.component';
import {FollowersComponent} from './followers/followers.component';
import {AuthComponent} from './auth/auth.component';
import {AuthRedirectComponent} from './auth-redirect/auth-redirect.component';

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
      {path: 'auth', children: [
        {path: '', pathMatch: 'full', component: AuthComponent},
        {path: 'redirect', component: AuthRedirectComponent},
      ]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
