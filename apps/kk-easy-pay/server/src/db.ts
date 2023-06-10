import { knex, Knex } from 'knex';
import { Abrechnung, AbrechnungsEingang, LeistungsPaket, Posten } from '@pct/kk-easy-pay-common';
import pg from 'pg';

if (pg.types == null) {
  console.log(
    'The import of pg is only a hint for the bundler so it knows we need pg'
  );
}

export async function initKnex() {
  const host = '127.0.0.1';
  const user = 'dev';
  const database = 'dev';
  const password = 'dev';
  const port = 6543;

  const knexConfig = {
    client: 'pg',
    connection: {
      host,
      user,
      database,
      password,
      port,
    },
  };

  const result = knex(knexConfig);

  const testQueryResult = await result.raw('SELECT 1');
  if (testQueryResult.rowCount !== 1 || testQueryResult.rows.length !== 1) {
    throw new Error('Test query on database failed, is your postgres up?');
  } else {
    console.log(
      `knex pool setup completed for postgresql://${
        knexConfig.connection.user
      }@${knexConfig.connection.host}:${knexConfig.connection.port ?? '5432'}/${
        knexConfig.connection.database
      }  !`
    );
  }

  return result;
}

export const APP_TABLES = {
  LEISTUNGS_PAKET: 'leistungs_paket',
  ABRECHNUNG: 'abrechnung',
  POSTEN: 'posten',
};

export class AppDbService {
  constructor(private trx: Knex.Transaction) {}

  async loadPakete() {
    const rows = await this.trx<LeistungsPaket>(APP_TABLES.LEISTUNGS_PAKET);
    return rows;
  }

  async createAbrechnung(body: AbrechnungsEingang) {
    const abrechnungsID = await this.trx<Abrechnung>(APP_TABLES.ABRECHNUNG)
      .insert({id: body.id, monat: body.monat, patient: body.patient})
      .returning('id');
    for (let i = 0; i < body.posten.length; i++) {
      await this.trx<Posten>(APP_TABLES.POSTEN).insert({paket: body.posten[i].paket, anzahl: body.posten[i].anzahl});
    };
    return abrechnungsID;
  }

  async storePosten(_req) {
    await this.trx<Posten>(APP_TABLES.POSTEN).insert(_req);
  }
}
