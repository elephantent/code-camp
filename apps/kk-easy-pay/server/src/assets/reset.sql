drop table if exists leistungs_paket;

create table leistungs_paket (
    nr integer primary key,
    description varchar not null,
    price integer not null
);

insert into leistungs_paket (nr, description, price) VALUES (1, 'Große Körperpflege', 3162);
insert into leistungs_paket (nr, description, price) VALUES (2, 'Kleine Körperpflege', 2156);
insert into leistungs_paket (nr, description, price) VALUES (3, 'Hilfe bei Ausscheidungen', 1404);
insert into leistungs_paket (nr, description, price) VALUES (4, 'Lagern', 1099);
insert into leistungs_paket (nr, description, price) VALUES (5, 'Mobilisation', 1099);
insert into leistungs_paket (nr, description, price) VALUES (6, 'Einfache Hilfe bei der Nahrungsaufnahme', 759);
insert into leistungs_paket (nr, description, price) VALUES (7, 'Umfangreiche Hilfe bei der Nahrungsaufnahme', 2654);
insert into leistungs_paket (nr, description, price) VALUES (8, 'Verabreichung von Sondennahrung mittels Spritze, Schwerkraft oder Pumpe', 1284);
insert into leistungs_paket (nr, description, price) VALUES (9, 'Zubereitung einer einfachen Mahlzeit', 1499);
insert into leistungs_paket (nr, description, price) VALUES (10, 'Einkauf/Besorgungen', 1284);
insert into leistungs_paket (nr, description, price) VALUES (11, 'Waschen, Bügeln, Reinigen', 1284);
insert into leistungs_paket (nr, description, price) VALUES (12, 'Vollständiges Ab- und Beziehen eines Bettes', 635);
insert into leistungs_paket (nr, description, price) VALUES (13, 'Beheizen', 958);
insert into leistungs_paket (nr, description, price) VALUES (14, 'Pflegerische Betreuungsmaßnahmen', 1284);
insert into leistungs_paket (nr, description, price) VALUES (15, 'Organisation des Alltags und der Haushaltsführung', 1284);
insert into leistungs_paket (nr, description, price) VALUES (16, 'Essen auf Rädern/stationärer Mittagstisch', 334);
insert into leistungs_paket (nr, description, price) VALUES (17, 'Hilfestellung beim Verlassen und Wiederaufsuchen der Wohnung', 2749);
insert into leistungs_paket (nr, description, price) VALUES (18, 'Organisation des Alltags und der Haushaltsführung', 1578);
insert into leistungs_paket (nr, description, price) VALUES (19, 'Rasieren einschließlich Gesichtspflege', 322);
insert into leistungs_paket (nr, description, price) VALUES (20, 'Haarwäsche', 643);
insert into leistungs_paket (nr, description, price) VALUES (21, 'Hautpflege', 456);
insert into leistungs_paket (nr, description, price) VALUES (22, 'Ganzkörperwäsche', 1608);
insert into leistungs_paket (nr, description, price) VALUES (23, 'Teilkörperwäsche', 579);
insert into leistungs_paket (nr, description, price) VALUES (24, 'Transfer', 279);
insert into leistungs_paket (nr, description, price) VALUES (25, 'Mundgerechtes Herrichten der Nahrung und Getränke', 322);
insert into leistungs_paket (nr, description, price) VALUES (26, 'Hilfe beim Trinken als alleinige Leistung', 193);
insert into leistungs_paket (nr, description, price) VALUES (27, 'Verabreichung von Sondennahrung', 514);
insert into leistungs_paket (nr, description, price) VALUES (28, 'Begleitung bei Aktivitäten', 3859);
insert into leistungs_paket (nr, description, price) VALUES (29, 'Wechseln der Bettwäsche', 514);
insert into leistungs_paket (nr, description, price) VALUES (30, 'Vorratseinkauf', 1218);
insert into leistungs_paket (nr, description, price) VALUES (31, 'Erstbesuch', 6431);

drop table if exists patient;

create table patient (
    versicherungsnummer varchar primary key not null,
    firstname varchar not null,
    lastname varchar not null
);


insert into patient (versicherungsnummer, firstname, lastname) VALUES ('ABC23467PQR', 'Heinz', 'Müller');
insert into patient (versicherungsnummer, firstname, lastname) VALUES ('39405DLKELS', 'Herta', 'Maier');
insert into patient (versicherungsnummer, firstname, lastname) VALUES ('39405LEKELS', 'Monika', 'Musterfrau');
insert into patient (versicherungsnummer, firstname, lastname) VALUES ('DLEK21346OO', 'Max', 'Mustermann');

drop table if exists abrechnung;

create table abrechnung (
    id SERIAL PRIMARY KEY,
    patient varchar REFERENCES patient (versicherungsnummer) not null,
    monat integer not null
);

drop table if exists posten;

create table posten (
    id SERIAL PRIMARY KEY,
    paket integer REFERENCES leistungs_paket (nr) not null,
    anzahl integer not null,
    abrechnung integer REFERENCES abrechnung(id)
);
