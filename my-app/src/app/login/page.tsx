'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  const p = document.createElement('p');

  p.id = 'formValidation';

  const formHandler = () => {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    p.innerHTML = 'All fields are required';
    p.className = 'text-red-500';
    document.getElementsByTagName('form')[0].appendChild(p);

    if (password.length >= 6 && email.includes('@')) {
      (document.getElementById('submitBtn') as HTMLInputElement).disabled =
        false;
      document.getElementById('formValidation')?.remove();
    } else {
      (document.getElementById('submitBtn') as HTMLInputElement).disabled =
        true;
    }
  };

  return (
    <section className="mt-5 w-full flex flex-col justify-center w-full justify-center items-center">
      <h2 className="text-2xl h-10 text-center block">
        Sign-in to your account
      </h2>
      <div className="p-2 m-1 w-full md:w-1/2 border border-[#4A4E69] rounded-md flex justify-center flex-col center">
        <form
          className="md:w-full w-84 p-2 inline-block max-width-md"
          action={formAction}
        >
          <div aria-live="polite" aria-atomic="true">
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
          <label className="block mt-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow border w-full rounded-md text-black p-1 "
            id="email"
            name="email"
            type="email"
            required
            onChange={() => formHandler()}
          ></input>

          <label className="block mt-2" htmlFor="password">
            password
          </label>
          <input
            className="shadow border w-full rounded-md text-black p-1"
            id="password"
            name="password"
            type="password"
            required
            onChange={() => formHandler()}
          />
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          <button
            className="md:w-full w-80 block border bg-[#F2E9E4] text-[#4A4E69] p-1 rounded-md mt-6 mb-2 w-full enabled:hover:bg-[#4A4E69] enabled:hover:text-[#F2E9E4]"
            disabled
            aria-disabled={isPending}
            id="submitBtn"
          >
            Login
          </button>
          <a href="/register" className="block mt-6 hover:underline">
            Doesn&#39;t Have an account?
          </a>
        </form>
      </div>
    </section>
  );
}
