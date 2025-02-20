import React from 'react';

export default function Contact() {
  return (
    <section className="mt-5 w-full flex flex-col justify-center w-full justify-center items-center">
      <h2 className="text-2xl h-10 text-center">Contact Us!</h2>
      <div className="p-2 m-1 w-full md:w-1/2 border border-[#4A4E69] rounded-md flex justify-center flex-col center">
        <form className="w-100 p-2 inline-block">
          <label className="block mt-2" htmlFor="fname">
            First Name
          </label>
          <input
            className="border w-full rounded-md text-black p-1 shadow"
            type="text"
            id="fname"
            name="firstname"
            required
          />
          <label className="block mt-2" htmlFor="lname">
            Last Name
          </label>
          <input
            className="border w-full rounded-md text-black p-1 shadow"
            type="text"
            id="lname"
            name="lastname"
            required
          />
          <label className="block mt-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="border w-full rounded-md text-black p-1 shadow"
            type="email"
            id="email"
            name="email"
            required
          />
          <label className="block mt-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="border w-full rounded-md text-black p-1 shadow"
            type="tel"
            id="phone"
            name="phone"
            required
          />
          <label className="block mt-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="border w-full h-40 rounded-md text-black p-1 shadow"
            id="message"
            name="message"
            defaultValue="Type your message here"
            required
          />
          <input
            className="bg-ultraViolet text-white p-3 rounded-xl text-center"
            type="submit"
            defaultValue="Submit"
            required
          />
        </form>
      </div>
    </section>
  );
}
