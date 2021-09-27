import { pool } from '../models/pool';
import {
    seedVehicles,
    dropVehiclesTable,
  createVehicleTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropVehiclesTable ]);
export const createTables = () => executeQueryArray([ createVehicleTable ]);
export const insertIntoTables = () => executeQueryArray([ seedVehicles ]);