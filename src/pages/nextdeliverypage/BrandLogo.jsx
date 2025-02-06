import React from 'react'
import brand1 from '../../assets/BrandLogo/brand1.webp'
import brand2 from '../../assets/BrandLogo/brand2.webp'
import brand3 from '../../assets/BrandLogo/brand3.webp'
import brand4 from '../../assets/BrandLogo/brand4.png'
import brand5 from '../../assets/BrandLogo/brand5.webp'
import brand6 from '../../assets/BrandLogo/brand6.png'
import brand7 from "../../assets/BrandLogo/brand7.webp"

export const BrandLogo = () => {
  const brandLogos = [
    { logo: brand1, Name: 'Brand1' },
    { logo: brand2, Name: 'Brand2' },
    { logo: brand3, Name: 'Brand3' },
    { logo: brand4, Name: 'Brand4' },
    { logo: brand5, Name: 'Brand5' },
    { logo: brand6, Name: 'Brand6' },
    { logo: brand7, Name: 'Brand7' },
  ];

  return (
    <>
    <div className={`w-full flex gap-4 sm:overflow-scroll-x md:overflow-hidden `}>
      {/* <div className={`grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-7 border`}> */}
        {brandLogos.map((item, i) => {
          return (
            <div className='border  border-gray-400 rounded-lg space-x-2 mx-auto flex justify-center items-center px-3 w-28  h-12' key={i}>
              <img className='max-h-full max-w-full object-contain' src={item.logo} alt={item.Name} />
            </div>
          );
        })}
      </div>
    </>
  );
}
