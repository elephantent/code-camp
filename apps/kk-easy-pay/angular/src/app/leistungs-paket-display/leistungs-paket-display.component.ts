import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeistungsPaket } from '@pct/kk-easy-pay-common';

@Component({
  selector: 'pct-leistungs-paket-display',
  templateUrl: './leistungs-paket-display.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class LeistungsPaketDisplayComponent {
  @Input() paket: LeistungsPaket = {
    nr: 1,
    description: 'Test Descr',
    price: 123,
  };

  get priceEuro() {
    return (this.paket.price / 100).toFixed(2) + '€';
  }
  @Input() anzahl = 0;
  @Output() anzahlChanged = new EventEmitter();
}
