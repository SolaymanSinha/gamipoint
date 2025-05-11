'use server';
import { PointManager } from '.';

// Add points to the db
export const addPoint = async (minutes: number): Promise<number> => {
  'use server';
  const pointManager = PointManager.getInstance();
  const totalPoint = pointManager.addPoints(minutes);
  return totalPoint;
};
