import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from '../api/api.service';
import {AppConfigService} from '../app-config.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    remember: new FormControl(null),
  });
  submited = false;
  wait = false;

  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submited = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': AppConfigService.settings.api.authKey,
      })
    };
    if (this.form.valid) {
      this.wait = true;
      this.form.disable();
      this.http.post(
        this.api.path.authToken,
        {
            username: this.form.get('username').value,
            password: this.form.get('password').value,
          },
        httpOptions
      ).toPromise().then((response) => {
        console.log(response);
      }).finally(() => {
        this.wait = false;
        this.form.enable();
      });
    }
  }

}
