import AddPoint from '@/components/AddPoint';
import PointBoard from '@/components/PointBoard';
import Rewards from '@/components/Rewards';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <PointBoard />
      </div>
    </div>
  );
}
