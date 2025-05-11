'use server';

import { db } from '.';
import { getPoints } from './calculate';

// Add points to the db
export const addPoint = async (minutes: number) => {
  'use server';
  const totalPoint = await db.getData('/total_point');
  await db.push('/total_point', parseInt(totalPoint) + getPoints(minutes));
};
