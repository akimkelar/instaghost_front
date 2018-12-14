import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from '../api/api.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styleUrls: ['./auth-redirect.component.scss']
})
export class AuthRedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private api: ApiService, private auth: AuthService) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      const access_token = fragment.split('=')[1];
      this.auth.setToken(access_token);
    });
  }

}
