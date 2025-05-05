import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={'/performance'}>Go To Performance</Link>
          </li>
          <li>
            <Link href={'/reliability'}>Go To Reliability</Link>
          </li>
          <li>
            <Link href={'/scale'}>Go To Scale</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
