export const createVehicleTable = `
DROP TABLE IF EXISTS vehicles;
CREATE TABLE IF NOT EXISTS vehicles (
  id SERIAL PRIMARY KEY,
  model VARCHAR DEFAULT '',
  make VARCHAR NOT NULL
  )
  `;

export const seedVehicles = `
INSERT INTO vehicles(model, make)
VALUES ('Volkswagen', 'golf'),
      ('mercedes', 'benz'),
      ('tesla', 'v S'),

`;

export const dropVehiclesTable = 'DROP TABLE vehicles';