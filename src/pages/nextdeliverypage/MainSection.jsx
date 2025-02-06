
import React from 'react';
import mainsecimg from '../../assets/BrandLogo/mainsectimg.webp';

export const MainSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-8 sm:pb-12">
      <main className=" rounded-xl bg-gradient-to-r from-[#6849EC] via-purple-300  to-orange-300 text-[#0B0757] grid grid-cols-1 md:grid-cols-2 items-center mt-10 md:mt-16 shadow-lg">
        
        {/* Left Section (Text & Button) */}
        <div className="  space-y-6 w-full px-8 md:pt-8 pt-5">
          <h1 className="xs:text-3xl sm:text-4xl sm:pt-6 md:pt-0 lg:text-5xl font-semibold text-white leading-tight">
            Ready to deliver your orders the next day?
          </h1>
          <button className="sm:mb-5 mb-3 bg-white text-black font-semibold py-3 w-54 rounded-lg shadow-lg outline-none transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Right Section (Image) - Fixed for responsiveness */}
        <div className="hidden md:block w-full h-[300px] flex justify-end mt-0 md:mt-10">
          <img className="w-full h-full object-contain " src={mainsecimg} alt="Delivery Illustration" />
        </div>

      </main>
    </section>
  );
};




 





