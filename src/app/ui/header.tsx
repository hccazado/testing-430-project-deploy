import HavenLogo from "@/app/ui/havenLogo";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";
import { auth, signOut } from "../../../auth";

function EndSession() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="text-[#F2E9E4] hover:underline">
        Sign out
      </button>
    </form>
  );
}

export default async function Header() {
  const session = await auth();
  return (
    <>
      <header className="p-2 bg-[#4A4E69] items-center flex flex-row flex-justify h-20 justify-between">
        <Link href="/">
          <HavenLogo />
        </Link>
        {session ? (
          <div className="w-40 text-right">
            <span className="text-[#F2E9E4] hover:underline">
              Hello, {JSON.stringify(session.user?.name)}
            </span>
            <EndSession />
          </div>
        ) : (
          <div>
            <a href="/login" className="text-[#F2E9E4] hover:underline">
              <UserIcon className="text-[#F2E9E4] size-3 inline me-1" />
              Login
            </a>
          </div>
        )}
      </header>
    </>
  );
}
