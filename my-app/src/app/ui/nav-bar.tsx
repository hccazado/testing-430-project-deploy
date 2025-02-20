import Link from 'next/link';
// import { useState } from "react";
import HavenLogo from '@/app/ui/havenLogo';
import { UserIcon } from '@heroicons/react/24/solid';
import { auth, signOut } from '../../../auth';

// interface NavBarProps {
// }

function EndSession() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" className="hover:underline">
        Sign out
      </button>
    </form>
  );
}

export default async function NavBar() {
  const session = await auth();
  return (
    <div className="shadow border-b-2 border-[#4A4E69]">
      <nav className="p-2  items-center w-full flex h-20 justify-around bb">
        <HavenLogo />
        <div>
          <Link className="hover:underline" href="/">
            Catalog
          </Link>
        </div>
        <div>
          <Link className="hover:underline" href="/admin">
            Admin
          </Link>
        </div>
        <div>
          <Link className="hover:underline" href="/contact">
            Contact Us
          </Link>
        </div>
        {session ? (
          <div className="w-40">
            <span className="hover:underline">
              {session.user?.type === 'creator' ? (
                <Link className="hover:underline" href="/products">
                  Hello, {session.user?.name} |
                </Link>
              ) : (
                <span className="hover:underline">
                  Hello, {JSON.stringify(session.user?.name)} |
                </span>
              )}
            </span>
            <EndSession />
          </div>
        ) : (
          <div>
            <Link href="/login" className="hover:underline">
              <UserIcon className="size-3 inline me-1" />
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
