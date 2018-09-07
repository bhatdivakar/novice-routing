import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  routes = [
    { linkName: 'Home', url: 'Home'},
    { linkName: 'Settings', url: 'Settings'}
  ];
}
