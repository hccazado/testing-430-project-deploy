import React from 'react';

export default function Admin() {
  return (
    <section>
      <h2 className="text-2xl h-10 text-center mt-5">Admin Dashboard</h2>
      <br />
      <div className="flex flex-wrap md:justify-around sm:flex-column justify-center gap-2">
        <div className=" bg-red-300 p-4 rounded-xl w-80">
          <h2 className="text-2xl">Sales</h2>
          <br />
          <p>0 Today</p>
          <p>0 Within the Month</p>
        </div>
        <br />
        <div className=" bg-green-300 p-4 rounded-xl w-80">
          <h2 className="text-2xl">Revenue</h2>
          <br />
          <p>$0 Today</p>
          <p>$0 This Month</p>
        </div>
        <br />
        <div className="bg-slate-300 p-4 rounded-xl w-80">
          <h2 className="text-2xl">Customers</h2>
          <br />
          <p>0 Total</p>
        </div>
      </div>
    </section>
  );
}
