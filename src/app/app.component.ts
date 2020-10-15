import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularNestedComponents';

  posts: string[] = ['Primer post', 'Segundo Post', 'Tercer post'];
}
