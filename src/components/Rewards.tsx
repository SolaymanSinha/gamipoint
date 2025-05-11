'use client';
import { getPointsFromDB } from '@/modules/point/getPoint';
import { removePoint } from '@/modules/point/removePoint';
import React from 'react';

const rewards = [
  { no: 1, name: 'Youtube 20 Minutes', points: 60 },
  { no: 2, name: 'Facebook 20 Minutes', points: 60 },
  { no: 3, name: 'Game 20 Minutes', points: 50 },
  { no: 4, name: 'Anime 1 Episode', points: 45 },
  { no: 5, name: 'Forbidden', points: 250 },
  { no: 6, name: '1 Day Off', points: 1000 },
];

const Rewards = ({
  setTotalPoints,
}: {
  setTotalPoints: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleReward = async (point: number) => {
    removePoint(point);

    const totalPoints = await getPointsFromDB();

    setTotalPoints(totalPoints);
  };
  return (
    <div className="mt-10">
      <h2 className="text-4xl">Rewards</h2>
      {rewards.map((reward) => {
        return (
          <div key={reward.no} className="flex justify-between items-baseline">
            <div>
              {reward.no}. {reward.name}
            </div>
            <div>
              🪙 {reward.points}
              <button
                onClick={() => handleReward(reward.points)}
                className="ml-3 border rounded mt-2 px-3 py-1 bg-red-300 text-black cursor-pointer"
              >
                Claim
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rewards;
