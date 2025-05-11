'use server';

import { PointManager } from '.';

// Get Points
export const getPointsFromDB = async (): Promise<number> => {
  'use server';
  const pointManager = PointManager.getInstance();
  const totalPoint = pointManager.getTotalPoints();
  return totalPoint;
};
