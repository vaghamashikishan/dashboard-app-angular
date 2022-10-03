import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard-app';
  curDate: any = new Date();

  ngOnInit() {
    setInterval(() => {
      this.curDate = new Date();
    }, 1000)
  }
}
