import React from 'react'
import { BrandLogo } from './BrandLogo'

export const BrandLogoHeader = () => {
  return (
    <>
      <header>
        <h1 className='text-5xl font-semibold mb-12 ml-6 '>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300 to-[#6849EC]'>
            Trusted
          </span>
          <span className='text-[#0B0757]'> courier partners</span>
        </h1>
        {/* brand-partner start */}
        <BrandLogo />
      </header>
    </>
  )
}
