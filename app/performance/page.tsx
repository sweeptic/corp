import Image from 'next/image';
import performanceImg from '@/public/performance.jpg';

export default function Home() {
  return (
    <div>
      Performance Page
      <Image alt="performance" src={performanceImg} />
    </div>
  );
}
