import { JsonDB, Config } from 'node-json-db';
import { getPoints } from './calculate';

export const db = new JsonDB(new Config('PointDB', true, false, '/'));
