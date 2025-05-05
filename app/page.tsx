import homeImg from '@/public/home.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div>
      <Hero imgData={homeImg} imgAlt="home page" title="Professional Cloud Hosting" />
    </div>
  );
}
