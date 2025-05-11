'use server';

import { db } from '.';

// Get Points
export const getPointsFromDB = async () => {
  'use server';
  const totalPoint = await db.getData('/total_point');
  return totalPoint;
};
