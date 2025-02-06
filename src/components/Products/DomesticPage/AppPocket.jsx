import React from "react";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { GrApple } from "react-icons/gr";
import { BiLogoPlayStore } from "react-icons/bi";
import pocketappbg from "../../../assets/Domestic/pocketappbg.webp";

export const AppPocket = () => {
  return (
    <>
      <div className="max-w-full mx-8 pt-6 ">
        <div className=" grid grid-cols-2 items-center mt-6 mb-8 bg-gradient-to-tl from-pink-100 via-purple-100 to-yellow-100 rounded-xl px-14 pt-12 pb-4">
          <div className="space-y-2">
            <h1 className="mb-8 text-7xl font-semibold">
              <span className="text-[##0B0757]">It's all in your</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300  to-[#6849EC]">
                pocket
              </span>
            </h1>
            <div className="grid grid-row mt-3">
              <p className="inline-flex items-center gap-x-1 text-[#0B0757] text-lg tracking-tight py-2 font-TWKLausanne">
                <IoMdCheckmark />
                Process shipments in a flash
              </p>
              <p className="inline-flex items-center gap-x-1 text-[#0B0757] text-lg tracking-tight py-2 font-TWKLausanne">
                <IoMdCheckmark />
                Download documents in a tap
              </p>
              <p className="inline-flex items-center gap-x-1 text-[#0B0757] text-lg tracking-tight py-2 font-TWKLausanne">
                <IoMdCheckmark />
                View shipping analytics on the go
              </p>
            </div>
            <div className="flex items-center gap-x-4 font-bold">
              <div className=" text-lg mt-6">
                <Link className=" inline-flex items-center gap-x-1 px-9 py-3 rounded-lg bg-white shadow-lg ">
                  <GrApple />
                  App store
                </Link>
              </div>
              <div className=" text-lg mt-6">
                <Link className=" inline-flex items-center gap-x-1 items-center gap-x-1 px-9 py-3 rounded-lg bg-white shadow-lg">
                  <BiLogoPlayStore />
                  Google play
                </Link>
              </div>
            </div>
          </div>

          <div>
            <img className=" w-[560px] h-[420px] " src={pocketappbg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
