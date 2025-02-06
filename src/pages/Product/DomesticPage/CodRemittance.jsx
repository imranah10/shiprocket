import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Codbg from "../../../assets/Domestic/Codbg.webp";

export const CodRemittance = () => {
  return (
    <div className="max-w-full mx-8 pt-6   ">
      <div className=" grid grid-cols-2 items-center mt-8 bg-[#F6FAFE] rounded-xl px-14 pt-12 pb-14">
        <div className="space-y-2">
          <h1 className="text-5xl">Early COD remittance</h1>
          <p className="text-gray-600 text-lg tracking-tight py-2 font-TWKLausanne">
            Get guaranteed COD payments within 2 days* & take better control of
            your cash flow
          </p>
          <div className="text-purple-600 text-lg mt-6">
            <Link className=" inline-flex items-center gap-x-1">
              Know more
              <GoArrowUpRight className="text-x" />
            </Link>
          </div>
        </div>
        <div className=" flex justify-end">
          <img className=" w-[460px] h-[320px] " src={Codbg} alt="" />
        </div>
      </div>
    </div>
  );
};
