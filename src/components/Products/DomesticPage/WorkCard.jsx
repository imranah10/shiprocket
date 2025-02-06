import React from 'react'
import work1  from '../../../assets/Domestic/work1.svg'
import work2  from '../../../assets/Domestic/work2.svg'
import work3  from '../../../assets/Domestic/work3.svg'
import { div } from 'framer-motion/client'

export const WorkCard = () => {
    const workdata=[
        {img:work1,title:'Step 1',desc:(<>Import or add your orders and <br /> select a shipment</>)},
        {img:work2,title:'Step 2',desc:(<>Choose a carrier based on your <br/> choice or our recommendation</>)},
        {img:work3,title:'Step 3',desc:(<>Pack, label and hand them over <br/> to the courier partner</>)}
    ]
  return (
    <>
        <div className='flex justify-between items-center gap-4 mt-6'>
            {workdata.map((data,i)=>{
                return(
                    <div key={i} className='space-y-4'>
                        <img className='border border-1 border-gray-200 rounded-3xl shadow-2xl p-8' src={data.img} alt="image" />
                        <h1 className='text-xl font-manrope text-purple-600'>{data.title}</h1>
                        <p className='text-xl text-gray-600 font-TWKLausanne'>{data.desc}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}
