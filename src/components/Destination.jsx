import React from "react";
import bora from "../assets/borabora.jpg";
import bora2 from "../assets/borabora2.jpg";
import mald from "../assets/maldives.jpg";
import mald2 from "../assets/maldives2.jpg";
import key from "../assets/keywest.jpg";

const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={bora}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={bora2} alt="/" />
        <img className="w-full h-full object-cover" src={mald} alt="/" />
        <img className="w-full h-full object-cover" src={mald2} alt="/" />
        <img className="w-full h-full object-cover" src={key} alt="/" />
      </div>
    </div>
  );
};

export default Destination;
