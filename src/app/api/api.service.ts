import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public basePath = environment.apiUrl;
  public path = {
    authToken:  this.basePath + '/auth/token',
  };

  constructor() { }

  /*public configPath(): string {
    return environment.apiUrl + '/config';
  }*/

  /*public getConfig():<AppConfig> {

  }*/
}
