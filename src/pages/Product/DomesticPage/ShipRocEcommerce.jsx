import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import businessimg from "../../../assets/Domestic/bussinessbg.webp";

export const ShipRocEcommerce = () => {
  return (
    <div className="max-w-full mx-8 pt-6 mt-12   ">
      <h1 className="text-6xl  mb-12  ">
        <span className="font-semibold text-[#0B0757]">
          Skyrocket your eCommerce <br />
          business to{" "}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300 via-green-400 to-purple-900">
          new heights
        </span>
      </h1>

      <div className=" grid grid-cols-2 items-center mt-18 mb-8 bg-orange-100 rounded-xl px-14 pt-12 pb-4">
        <div className="space-y-2">
          <h1 className="text-5xl">Inventory control</h1>
          <p className="text-gray-600 text-lg tracking-tight py-2 font-TWKLausanne">
            Get real-time inventory insights across channels & automatic sync
            post each sale
          </p>
          <div className="text-purple-600 text-lg mt-6">
            <Link className=" inline-flex items-center gap-x-1">
              Know more
              <GoArrowUpRight className="text-x" />
            </Link>
          </div>
        </div>
        <div className=" flex justify-end">
          <img className=" w-[460px] h-[320px] " src={businessimg} alt="" />
        </div>
      </div>
    </div>
  );
};
