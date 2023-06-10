import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { LeistungsPaket } from '@pct/kk-easy-pay-common';

@Component({
  selector: 'pct-abrechnung-form',
  templateUrl: './abrechnung-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AbrechnungFormComponent implements OnInit {
   constructor(private entry: EntryService) {}

  async ngOnInit() {
    console.log('hallo');
  }
}
