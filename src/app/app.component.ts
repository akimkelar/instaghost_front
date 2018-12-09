import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'instaghost';

  ngOnInit(): void {
    const _g = window as any;
    _g.feather.replace();
  }
}
