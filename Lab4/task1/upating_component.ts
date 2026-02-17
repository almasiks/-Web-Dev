import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello {{city}} `,
})
export class App {
   city = 'San Francisco';
}

