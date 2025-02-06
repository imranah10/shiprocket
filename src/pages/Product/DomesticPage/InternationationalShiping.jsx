import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Internatishipbg from "../../../assets/Domestic/Internatishipbg.webp";

export const InternationalShipping = () => {
  return (
    <div className="max-w-full mx-8 pt-6 ">
      <div className=" grid grid-cols-2 items-center mt-6 mb-8 bg-[#FFFBE8] rounded-xl px-14 pt-12 pb-8">
        <div>
          <img className=" w-[530px] h-[400px] " src={Internatishipbg} alt="" />
        </div>
        <div className=" ml-8">
          <h1 className="text-5xl">International shipping</h1>
          <p className="text-gray-600 text-lg tracking-tight py-2 font-TWKLausanne">
            Ship across the border to 220+ countries and territories with <br />{" "}
            end-to-end support
          </p>
          <div className="text-purple-600 text-lg mt-6">
            <Link className=" inline-flex items-center gap-x-1">
              Know more
              <GoArrowUpRight className="text-x" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="w-50 text-white px-4 py-3 rounded-xl bg-purple-500">
          Start shipping
        </button>
      </div>
    </div>
  );
};
