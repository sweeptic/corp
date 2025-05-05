import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex-wrap items-center flex justify-between mx-auto p-8">
        <Link className="font-bond text-3xl" href={'/'}>
          Home
        </Link>

        <div className="space-x-4 text-xl">
          <Link href={'/performance'}>Performance</Link>
          <Link href={'/reliability'}>Reliability</Link>
          <Link href={'/scale'}>Scale</Link>
        </div>
      </nav>
    </div>
  );
}
