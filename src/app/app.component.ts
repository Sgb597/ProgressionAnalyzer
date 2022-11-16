import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Progression Analyzer';
  resultKeys: string [] = [];

  bongoAlarm(keys) {
    this.resultKeys = keys;
  }
  constructor() {}
}
