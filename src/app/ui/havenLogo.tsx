import { playwrite } from '@/app/ui/fonts/fonts';
import Link from 'next/link';

export default function HavenLogo() {
  return (
    <h1 className={`${playwrite.className} hover:underline weight-800 inline`}>
      <Link href="/">HandCrafted Haven</Link>
    </h1>
  );
}
