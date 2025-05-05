import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between">
      <Link href={'/'}>Go To Home</Link>
      <Link href={'/performance'}>Go To Performance</Link>
      <Link href={'/reliability'}>Go To Reliability</Link>
      <Link href={'/scale'}>Go To Scale</Link>
    </div>
  );
}
