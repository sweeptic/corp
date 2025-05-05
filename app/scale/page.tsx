import Hero from '@/components/hero';
import homeImg from '@/public/scale.jpg';

export default function ScalePage() {
  return (
    <div>
      Scale Page
      <Hero imgData={homeImg} imgAlt="home page" title="Scale infinity" />
    </div>
  );
}
