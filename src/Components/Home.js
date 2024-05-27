import React from 'react'
import { AppText } from '../Constants'
import { homeImage } from '../assets'

const Home = () => {
  return (
    <div className='mt-7 px-4 md:px-20 items-center flex flex-col md:flex-row' id="home">
      <div>
      <h1 className='text-[40px] font-bold' >{AppText.hello}</h1>
    <h1  className='text-[40px] font-bold'>{AppText.Iam}
     <span className='text-cyan-600 '>{AppText.DeepshikhaDubey }</span> </h1>
     <h1 className='text-gray-400 mt-3'>{AppText.IntroDesc}</h1>
    <button className='bg-cyan-600 p-2 px-3 mt-4 rounded-md transition-all ease-in-out hover:scale-110 text-white'>Resume</button>
      </div>
     
    <img src={homeImage} className= 'w-[300px] md:w-[400px] homeimage' />
    </div>
  )
}

export default Home
