import React from 'react'
import { companies } from '../Constants'

const Companies = () => {
  return (
    <div className='justify-center' id='companies'>
    <div className='bg-cyan-500'>
   <h2 className='text-[40px] font-bold pt-6 my_portfolio text-center'>
     Companies I <span className='text-white'>Worked For</span></h2>
    </div>

    <div className='flex bg-cyan-500 justify-center companies'>  
  
      {
        companies.map((item, index) => (
          <img src={item.image} className=' w-[180px]  m-4 p-4'/>
        ))}
    </div>
   
    </div>
 
  )
}

export default Companies

