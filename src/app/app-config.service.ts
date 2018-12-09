import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {AppConfig} from './interface/app-config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  static settings: AppConfig;

  constructor(private http: HttpClient) { }

  configPath(): string {
    return environment.apiUrl + '/config';
  }

  load() {
    console.log('asd');
    return new Promise<void>((resolve, reject) => {
      const path = this.configPath();
      this.http.get(path).toPromise().then((response: AppConfig) => {
        AppConfigService.settings = <AppConfig>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${path}': ${JSON.stringify(response)}`);
      });
    });
  }
}
