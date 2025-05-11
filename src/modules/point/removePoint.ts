'use server';

import { db } from '.';

// Minus point is possible
export const removePoint = async (point: number) => {
  'use server';
  const totalPoint = await db.getData('/total_point');
  await db.push('/total_point', parseInt(totalPoint) - point);
};
