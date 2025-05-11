'use server';

import { PointManager } from '.';

// Minus point is possible
export const removePoint = async (point: number): Promise<number> => {
  const pointManager = PointManager.getInstance();
  const totalPoint = pointManager.getReward(point);
  return totalPoint;
};
