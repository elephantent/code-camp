export interface LeistungsPaket {
  // nr, description und price sind properties
  nr: number;
  description: string;
  /**
   * In cents
   */
  price: number;
}

export interface Patient {
  versicherungsnummer: string;
  firstname: string;
  lastname: string;
}

export interface Abrechnung {
  id: number;
  patient: Patient;
  monat: number;
}

export interface Posten {
  paket: LeistungsPaket;
  anzahl: number;
}

export interface AbrechnungsEingang {
  id: number;
  patient: Patient;
  monat: number;
  posten: Posten[];
}

export interface PostenRow {
  paket: LeistungsPaket;
  anzahl: number;
  abrechnungsID: number;
}
