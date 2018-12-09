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
  private user = 'username';
  private token = 'token';

  constructor(private api: ApiService, private http: HttpClient) { }

  public isAuthenticated(): Observable<boolean> {
    const user = localStorage.getItem(this.user);
    const token = localStorage.getItem(this.token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': AppConfigService.settings.api.authKey,
      })
    };
    return this.http.post<Validate>(this.api.path.authToken, {user: user, token: token}, httpOptions)
      .pipe(map(res => res.valid));
  }
}
