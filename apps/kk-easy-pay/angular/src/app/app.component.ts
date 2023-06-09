import { Component } from '@angular/core';
import { EntryService } from './entry.service';

@Component({
  selector: 'pct-root',
  templateUrl: './app.component.html',
  styles: [''],
})
export class AppComponent {
  title = 'kk-easy-pay-angular';

  constructor(private entry: EntryService) {}
}

