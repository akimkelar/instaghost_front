import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_INITIALIZER } from '@angular/core';
import {AppConfigService} from './app-config.service';
import {AuthGuardService} from './auth/auth-guard.service';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './_layout/dashboard/dashboard.component';
import { FormComponent } from './_layout/form/form.component';
import { FollowersComponent } from './followers/followers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export function initializeApp(appConfig: AppConfigService) {
  return () => appConfig.load();
}
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    FormComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
