'use client';
import { getPointsFromDB } from '@/modules/point/getPoint';
import React, { useEffect, useState } from 'react';
import AddPoint from './AddPoint';
import Rewards from './Rewards';

const PointBoard = () => {
  const [totalPoints, setTotalPoints] = useState<number>(0);

  useEffect(() => {
    const getPoints = async () => {
      const totalPoints = await getPointsFromDB();
      setTotalPoints(totalPoints);
    };

    getPoints();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-6xl">🪙 {totalPoints}</h1>

      <div>
        <AddPoint setTotalPoints={setTotalPoints} />
        <Rewards setTotalPoints={setTotalPoints} />
      </div>
    </div>
  );
};

export default PointBoard;
