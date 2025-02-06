import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import returnbg from "../../../assets/Domestic/Returnbg.webp";

export const EasyReturn = () => {
  return (
    <div className="max-w-full mx-8 pt-6 ">
      <div className=" grid grid-cols-2 items-center mt-6 mb-8 bg-[#F7E9F6] rounded-xl px-14 pt-12 pb-8">
        <div>
          <img className=" w-[530px] h-[400px] " src={returnbg} alt="" />
        </div>
        <div className=" ml-8">
          <h1 className="text-5xl">Easy returns</h1>
          <p className="text-gray-600 text-lg tracking-tight py-2 font-TWKLausanne">
            Simplify returns by accepting them through your tracking page <br />{" "}
            and process refunds instantly
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
