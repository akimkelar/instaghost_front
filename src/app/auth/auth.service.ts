import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Validate} from '../interface/validate';
import {ApiService} from '../api/api.service';
import {AppConfigService} from '../app-config.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private access_token = 'access_token';
  private memorization = {};

  constructor(private api: ApiService, private http: HttpClient) { }

  isAuthenticated(): Observable<boolean> | boolean {
    const access_token = localStorage.getItem(this.access_token);
    if (typeof this.memorization[access_token] === 'undefined') {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': AppConfigService.settings.api.authKey,
        })
      };
      const result = this.http.post<Validate>(this.api.path.authToken, {access_token: access_token}, httpOptions)
        .pipe(map(res => res.valid))
        .pipe(map(auth => this.memorization[access_token] = auth));
      return result;
    } else {
      return this.memorization[access_token];
    }
  }

  setToken(access_token) {
    localStorage.setItem(this.access_token, access_token);
  }
}
