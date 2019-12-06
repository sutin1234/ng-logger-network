import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-logger-network';
  constructor(private http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/todos').subscribe(resp => {
      console.log(resp);
    });
  }
}
