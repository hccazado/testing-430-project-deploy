'use client';

import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { createUser } from '@/app/lib/actions';

export default function Register() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [errorMessage, formAction, isPending] = useActionState(
    createUser,
    undefined
  );

  const p = document.createElement('p');

  p.id = 'formValidation';

  const formHandler = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const pwd1 = (document.getElementById('password1') as HTMLInputElement)
      .value;
    const pwd2 = (document.getElementById('password2') as HTMLInputElement)
      .value;

    p.innerHTML =
      'All fields are required, and password must have 6 characters';
    p.className = 'text-red-500';
    document.getElementsByTagName('form')[0].appendChild(p);

    if (
      pwd1 == pwd2 &&
      pwd1.length > 5 &&
      name.length >= 3 &&
      email.includes('@')
    ) {
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
      <h2 className="text-2xl h-10 text-center block">Create your account</h2>
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
          <label className="block mt-2" htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow border w-full rounded-md text-black p-1"
            id="name"
            name="name"
            type="text"
            required
            onChange={formHandler}
          ></input>
          <label className="block mt-2" htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow border w-full rounded-md text-black p-1"
            id="email"
            name="email"
            type="email"
            required
            onChange={formHandler}
          ></input>

          <label className="block mt-2" htmlFor="password1">
            password<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow border w-full rounded-md text-black p-1"
            id="password1"
            name="password1"
            type="password"
            required
            onChange={formHandler}
          ></input>
          <label className="block mt-2" htmlFor="password2">
            confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow border w-full rounded-md text-black p-1"
            id="password2"
            name="password2"
            type="password"
            required
            onChange={formHandler}
          ></input>
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          <button
            className="md:w-full w-80 block border bg-[#F2E9E4] text-[#4A4E69] p-1 rounded-md mt-6 mb-2 w-full enabled:hover:bg-[#4A4E69] enabled:hover:text-[#F2E9E4]"
            disabled
            id="submitBtn"
            aria-disabled={isPending}
          >
            Create Your Account
          </button>
        </form>
      </div>
    </section>
  );
}
