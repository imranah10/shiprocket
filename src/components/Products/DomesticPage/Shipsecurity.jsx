import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import securitybg from "../../../assets/Domestic/securitybg.webp";

export const Shipsecurity = () => {
  return (
    <div className="max-w-full mx-8 pt-6 ">
      <div className=" grid grid-cols-2 items-center mt-6 mb-8 bg-[#F6FFF0] rounded-xl px-14 pt-12 pb-4">
        <div>
          <img className=" w-[560px] h-[420px] " src={securitybg} alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-5xl">Shipment security cover</h1>
          <p className="text-gray-600 text-lg tracking-tight py-2 font-TWKLausanne">
            No more processing your return orders manually. Automate them <br />{" "}
            via workflows and remain stress-free
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
