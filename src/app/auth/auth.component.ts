import { Component, OnInit } from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  clientId = AppConfigService.settings.api.clientId;
  redirectUrl = environment.redirectUrl;

  constructor() { }

  ngOnInit() {
  }

}
