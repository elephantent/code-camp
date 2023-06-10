import { Knex } from 'knex';
import { AppDbService } from './db';
import * as express from 'express';

// knex ist die Verbindung zur Datenbank
export class ApiHandlers {
  constructor(private knex: Knex) {}

  async handleListPakete(_req: express.Request, res: express.Response) {
    const pakete = await this.knex.transaction(async (trx) => {
      return new AppDbService(trx).loadPakete();
    });

    res.json(pakete);
  }

  async handleStorePosten(_req: express.Request, res: express.Response) {
     res.sendStatus(200);
  }
}
