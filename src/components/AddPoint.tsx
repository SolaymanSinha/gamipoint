'use client';
import React, { useState } from 'react';
import { Field } from '@ark-ui/react/field';
import { addPoint } from '@/modules/point/addPoint';

const AddPoint = ({
  setTotalPoints,
}: {
  setTotalPoints: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [minutes, setMinutes] = useState(0);
  const handleAddPoints = async () => {
    const totalPoints = await addPoint(minutes);
    setTotalPoints(totalPoints);
  };
  return (
    <div>
      <Field.Root className="w-full mt-5">
        <Field.Input
          type="number"
          onChange={(e) => setMinutes(parseInt(e.target.value))}
          className="border rounded-md w-80 px-2 py-2"
          placeholder="Input minutes"
        />
      </Field.Root>

      <div className="flex justify-center">
        <button
          onClick={handleAddPoints}
          className="border rounded mt-2 px-3 py-1 bg-green-300 text-black cursor-pointer"
        >
          Add Points
        </button>
      </div>
    </div>
  );
};

export default AddPoint;
