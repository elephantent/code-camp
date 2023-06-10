export interface LeistungsPaket {
  // nr, description und price sind properties
  nr: number;
  description: string;
  /**
   * In cents
   */
  price: number;
}
