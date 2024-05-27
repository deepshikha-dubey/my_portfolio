import React from 'react'
import robo from '../assets/robo.png'
import CMS from '../assets/cms2.jpg'
import plant from '../assets/plantNursary.png'
import myKrishna from '../assets/my_krishna.jpg'
import stackFlow from '../assets/stackOverflow2.png'
import weather from '../assets/weather.png'
import hangman from '../assets/hangman.png'
import beautyParlour from '../assets/Beauty.jpg'
import onlinestore from'../assets/online_store.jpg'
 
const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className='justify-center flex '>
        <h2 className='text-[40px] font-bold pt-6 my_portfolio'>
           My Creative <span className='text-cyan-600'>Portfolio</span></h2>
         <img src={robo} className='w-[100px] md:w-[100px]'/>
      </div>

      <div className='flex justify-center p-4 portfolio_image '>
    
<div className='portfolioImage justify-center'>
   <img src={ CMS} className='w-[400px]'/> 
     <p>Content Management System</p>
</div>
        <div className=' portfolioImage'>
        <img src={plant} className='w-[400px]'/> 
        <p> <a href='https://deepshikha-dubey.github.io/plant_nursery/' target='_blank'>Plant Nursery</a></p>
          </div>     
  <div className=' portfolioImage'>
          <img src={onlinestore} className='w-[400px]'/>
          <p>Online Store</p>
  </div>   
   <div className=' portfolioImage'>
            <img src={myKrishna} className='w-[400px]'/> 
            <p>My Krishna's Blog</p>
    </div>    
    <div className=' portfolioImage'>
            <img src={weather} className='w-[400px]'/> 
            <p><a href='https://stackoverflowmern-areu.onrender.com/CheckWeather' target='_blank'></a>Weather</p>
    </div> 
    <div className=' portfolioImage'>
            <img src={beautyParlour} className='w-[400px]'/> 
            <p>Beauty Parlour</p>
    </div> 
    <div className=' portfolioImage'>
            <img src={hangman} className='w-[400px]'/> 
            <p><a href="https://deepshikha-dubey.github.io/hangmangame/" target= "_blank"></a>Hangman</p>
    </div> 
    <div className=' portfolioImage'>
            <img src={stackFlow} className='w-[400px]'/> 
            <p><a href="https://clientstack.onrender.com/" target="_blank">Stack Overflow clone</a></p>
    </div>   
       </div>
    </div>
  )
}

export default Portfolio