import { eq, sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/neon-http';
import { pointsTable } from './db/schema';
import { getPoints } from './calculate';

export class PointManager {
  /*
    - This part is handling variables
  */
  private db = drizzle(process.env.DATABASE_URL as string);
  private static instance: PointManager | null = null;

  /*
    - This method is handling fetching points from the database
  */
  public async getTotalPoints(): Promise<number> {
    const data = await this.db.execute(sql`SELECT * FROM points WHERE id = 1;`);
    const totalPoints = data.rows[0];
    console.log(totalPoints.points);
    return totalPoints.points as number;
  }

  /* 
    - This method is handling claming rewards using points
  */
  public async getReward(points: number) {
    const totalPoints = await this.getTotalPoints();
    await this.db
      .update(pointsTable)
      .set({ points: totalPoints - points })
      .where(eq(pointsTable.id, 1));
    return await this.getTotalPoints();
  }

  /* 
    - This method is handling adding points to the database
  */
  public async addPoints(minutes: number) {
    const pointsToAdd = getPoints(minutes);
    const totalPoints = await this.getTotalPoints();

    await this.db
      .update(pointsTable)
      .set({ points: totalPoints + pointsToAdd })
      .where(eq(pointsTable.id, 1));
    return await this.getTotalPoints();
  }

  /* 
    - This method is handling fetching rewards from database
    - TODO: Implement this feature
  */
  public getRewardsList() {}

  // -------------------- Handling single instances --------------
  public static getInstance() {
    if (this.instance == null) {
      this.instance = new PointManager();
    }

    return this.instance;
  }
}
