import React from "react";

export const AlwaysStay = () => {
  return (
    <>
      <div className="relative mx-8 w-full mt-6 mb-10 pb-14 bg-gradient-to-r from-purple-600 via-pink-300 to-orange-300 rounded-lg parent overflow-hidden ">
        <div className="flex flex-col justify-center items-center space-y-4 absolute top-20 left-[18%]">
          <div className="text-5xl font-bold text-white">
            <h1>Always stay in the loop</h1>
          </div>
          <div className="text-2xl font-manrope text-white">
            <p>
              Keep up with what’s happening at Shiprocket and never miss a
              product update
            </p>
          </div>
          <div className="bg-white w-1/2 rounded-lg text-xl flex justify-between items-center">
            <input
              className="pl-2 rounded-lg"
              type="email"
              placeholder="Enter your e-mail address"
            />
            <button className="bg-purple-400 text-white w-40 py-3 m-2 rounded-lg">
              I'm in
            </button>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="flex justify-evenly items-center animate-slideup">
          <div className="opacity-20 bg-gray-100 h-70 w-70 rounded-full"></div>
          <div className="opacity-20 bg-gray-100 h-40 w-40 rounded-full"></div>
        </div>

        {/* CSS Animation */}
        <style>
          {`
            @keyframes slideup {
              0% { transform: translateY(100%); opacity: 1; }  /* Start from bottom */
              70% { transform: translateY(0); opacity: 1; }    /* Move to top */
              100% { transform: translateY(-50%); opacity: 0; } /* Fade out at top */
            }
            .animate-slideup {
              animation: slideup 5s linear infinite;
            }
          `}
        </style>
      </div>
    </>
  );
};
