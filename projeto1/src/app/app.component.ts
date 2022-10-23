import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "UB Social";
  userData = {
    email: 'ubsocial@email.com',
    role: 'Admin'
  };

  title = 'projeto1';
}
