DROP TABLE IF EXISTS "flights";
DROP TABLE IF EXISTS "hotels";

-- Hotels

CREATE TABLE IF NOT EXISTS "hotels" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "city" TEXT,
  "country" TEXT,
  "review" REAL,
  "price" REAL NOT NULL
);

INSERT INTO "hotels" ("id", "name", "city", "country", "review", "price") VALUES
(1,'Pura Vida','San José', 'Costa Rica', 9, 30),
(2,'Good view','Manille', 'Philippines', 8, 40),
(3,'Amigos','Guatemala', 'Guatemala', 6, 15),
(4,'Buenas','Quito', 'Ecuador', 7, 45),
(5,'Same Same','Chiang Mai', 'Thailand', 10, 60),
(6,'Mai Pen Rai','Koh-Lipe', 'Thailand', 5, 54),
(7,'Vida Loca','Tortugueiro', 'Costa Rica', 9, 29),
(8,'Good food','Bali', 'Indonesia', 8, 75);

-- Flights

CREATE TABLE IF NOT EXISTS "flights" (
  "id" SERIAL PRIMARY KEY,
  "destination" TEXT,
  "company" TEXT,
  "duration" INT,
  "price" REAL NOT NULL
);

INSERT INTO "flights" ("id","destination", "company", "duration", "price") VALUES
(1,'Costa Rica', 'Luftansa',11,900),
(2,'Philippines', 'China Airlines',13,1100),
(3,'Thailand', 'Thai Airlines',10,600),
(4,'Guatemala', 'Luftansa',11,900),
(5,'Indonesia', 'Malaysia Airlines',13,1100),
(6,'Ecuador', 'American Airlines',12,850);