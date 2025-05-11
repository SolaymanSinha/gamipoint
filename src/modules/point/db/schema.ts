import { integer, pgTable } from 'drizzle-orm/pg-core';

export const pointsTable = pgTable('points', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  points: integer(),
});

// TODO: Implement reward tracker
export const rewardTrack = pgTable('reward_track', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});

// TODO: Implement features to add reward from DB
export const rewards = pgTable('rewards', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});
