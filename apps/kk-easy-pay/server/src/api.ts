import { Knex } from 'knex';
import { AppDbService } from './db';
import * as express from 'express';
import { Posten } from '@pct/kk-easy-pay-common';
import { appendFile } from 'fs';
// knex ist die Verbindung zur Datenbank
export class ApiHandlers {
  constructor(private knex: Knex) {}

  // trx = transaction object
  async handleListPakete(_req: express.Request, res: express.Response) {
    const pakete = await this.knex.transaction(async (trx) => {
      return new AppDbService(trx).loadPakete();
    });

    res.json(pakete);
  }
  async handleCreateAbrechnung(_req: express.Request, res: express.Response) {
    await this.knex.transaction(async (trx) => {
      new AppDbService(trx).createAbrechnung(_req);
      res.sendStatus(200);
    });
  }
}
