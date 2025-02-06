import React from "react";
import { GrowData } from "./GrowData";

export const ShippingGrowth = () => {
  return (
    <>
      <div className="mx-8">
        <div className="pl-4 space-y-3">
          <h1 className="text-purple-600 text-xl">All-in-one interface</h1>
          <h1 className="text-5xl font-semibold   ">
            <span className="text-[#0B0757]">Ship </span>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300  to-[#6849EC]">
              Growth
            </span>
            <span className="text-[#0B0757]"> in more ways than one </span>
          </h1>
          <p className="text-gray-600 text-lg tracking-tight py-2 font-TWKLausanne">
            Whether it’s your website or a marketplace, process all your orders
            in one place <br />
            and ship them efficiently with multiple courier partners
          </p>
        </div>
        <GrowData />
      </div>
    </>
  );
};
