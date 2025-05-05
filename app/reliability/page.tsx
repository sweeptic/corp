import Hero from '@/components/hero';
import homeImg from '@/public/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <div>
      Reliability Page
      <Hero imgData={homeImg} imgAlt="reliability page" title="Reliability is our number one priority" />
    </div>
  );
}
