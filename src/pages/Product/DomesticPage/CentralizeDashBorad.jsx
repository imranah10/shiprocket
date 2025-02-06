import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import centradashbg from "../../../assets/Domestic/centraDashbg.webp";

export const CentralizeDashBorad = () => {
  return (
    <div className="max-w-full mx-8 pt-6 ">
      <div className=" grid grid-cols-2 items-center mt-6 mb-8 bg-[#FCF3ED] rounded-xl  px-14 pt-12 pb-8">
        <div>
          <img className=" w-[450px] h-[300px] " src={centradashbg} alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-5xl">Centralised dashboard</h1>
          <p className="text-gray-600 text-lg tracking-tight py-2 font-TWKLausanne">
            Analyse performance for your orders, shipments, NDR,
            <br /> and RTO on the go
          </p>
          <div className="text-purple-600 text-lg mt-6">
            <Link className=" inline-flex items-center gap-x-1">
              Know more
              <GoArrowUpRight className="text-x" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
