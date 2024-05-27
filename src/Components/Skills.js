import React from 'react'
import Skill from '../assets/pencils.png'
import { skills } from '../Constants'
import '../App.css'

const Skills = () =>{
  return (
    <div id='skils'>
      <div className='justify-center flex my_skills  '>
        <img src={Skill} className= 'w-[100px] md:w-[100px]'  />
        <h1 className='text-[50px] font-bold pt-6 skiltext'>Skills & <span className='text-cyan-600'>Expertise</span></h1>
      </div>

      <div className='flex justify-center myskills'>
       <div className=' skils justify-center'>
       { skills.map((item,index)=> (
           <img src={item.image} className='hover:w-[100px] w-[100px] h-[100px] md:w-[100px] m-1 p-2'/>
        ))}
       </div>
       
       <div className='m-6 p-6  skills' >
        <h2 className='font-bold'> 2023 : <span className='font-bold'>  web devloper intern</span>
          <p className='text-gray-400 mt-1'>Nucleus Technology</p></h2>
        <h2 className='font-bold'> 2021 : <span className='font-bold'>  Telecalling Executive</span> 
         <p className='text-gray-400 mt-1'>SlicePay</p></h2>
        <h2 className='font-bold'> 2019 : <span className='font-bold'>  Risk Management Operator</span> 
         <p className='text-gray-400 mt-1'>Home Credit</p></h2>
        <h2 className='font-bold'> 2018 : <span className='font-bold'> PHP web devloper intern</span>
         <p className='text-gray-400 mt-1'>NextGen Institute</p></h2>
         <h2 className='font-bold'> 2017 : <span className='font-bold'> PHP devloper </span>
         <p className='text-gray-400 mt-1'>RMCube</p></h2>
         <h2 className='font-bold'> 2016 : <span className='font-bold'> PHP web devloper intern</span>
         <p className='text-gray-400 mt-1'>Epsilon Wings</p></h2>
       </div>
      </div>
    </div>
  )
}

export default Skills