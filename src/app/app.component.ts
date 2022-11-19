import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attendanceapp';
  count: number = 0;

  incrementCounter() {
    this.count++;
  }
}
