import { Component, OnInit } from '@angular/core';
import { LeistungsPaket } from '@pct/kk-easy-pay-common';
import { EntryService } from '../entry.service';

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
  pakete: LeistungsPaket[] = [];
  anzahl: number[] = [];
  month = 2;
  versichtertennummer = '';
  constructor(private entry: EntryService) {}

  async ngOnInit() {
    this.pakete = await this.entry.listPakete();
    this.anzahl = this.pakete.map(() => 0);
  }
  async handleClick() {
    console.log(this.month);
    console.log(this.versichtertennummer);
    console.log(this.anzahl);
  }
}
