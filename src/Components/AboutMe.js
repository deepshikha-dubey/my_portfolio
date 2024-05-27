import React from 'react'
import Wave from '../assets/wave.svg'
import { AppText, aboutSection } from '../Constants'
import { laptop1 } from '../assets'

const  AboutMe = () => {
  return (
    <div className='mt-36' id="about">
 <img src={laptop1} className='absolute mt-[-180px] md:w-[300px] md:mt-[-200px] w-[220px] '/> 
      <div className="h-[300px] bg-cyan-600  w-full">
        <h2 className= 'text-[50px] text-center font-bold text-white pt-6 aboutme'>
          {AppText.About} <span className='text-black'>{AppText.Me}</span></h2>
      <h2 className='text-white mt-10 text-center px-10 md:px-64 lg:px-80 aboutme_des'>{AppText.aboutMeDescription}</h2>
      </div>
      <div className='flex flex-col mt-[-60px] md:flex-row justify-around
       items-center px-32'>
        {
        aboutSection.map((item,index) =>(
          <div className='group hover:bg-cyan-600 mb-5 p-7 rounded-2x1'>
            <img src={item.image} className='w-[230px] h-[200px] object-cover rounded-lg'/>
            <div className='w-[230px] pb-[20px]'>
            <h2 className='group-hover:text-white font-bold text-center'>{item.title}</h2>
            <h2 className='group-hover:text-white text-[12px] text-gray-500 text-center'>{item.desc}</h2>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}
export default AboutMe
