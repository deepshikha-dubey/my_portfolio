import React from 'react'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import Contactme  from '../assets/contact_me.jpg'

const Contact = () => {
  return (
    <div id='contact'>
      <div className='justify-center text-center contact'>
      <h2 className='text-[40px] font-bold pt-6 my_portfolio'>Contact  <span className='text-cyan-600'>Us</span></h2>
       
      </div>
      <div className='contact_me flex m-2 p-2 bg-gray-100 justify-center'>
        <div  className='image'>
       <img src={Contactme} className='w-[500px] mt-2' />
        </div>
          <div>
          <div className='form'>
      <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
         
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
        Email 
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="username"
                    id="username"
                  
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="YourEmail@.com"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              Message 
              </label>
              <div className="mt-2">
                <textarea
                placeholder='Type your message here'
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
             
            </div>

            </div>
            </div>
</div>
<div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
</form>
    </div>

          </div>
      </div>
    
      <div className='justfy-center contactme'> 
      <div className='flex p-2 m-2'>
      <img src={linkedin } className='w-[30px]'/>
      <a href="https://www.linkedin.com/in/deepshikha-dubey/" target='_blank'>https://www.linkedin.com/in/deepshikha-dubey/</a><br/>
      </div>
     <div className='flex p-2 m-2'> 
     <img src={email} className='w-[30px]'/>
      <i>dubeyddeepshikha1707@gmail.com</i><br/>
     </div>
       <div className='flex p-2 m-2'>
       <img src={github} className='w-[30px]'/>
       <a href="https://github.com/deepshikha-dubey/" target='_blank'>https://github.com/deepshikha-dubey/ :</a> 
  
      </div>
      </div>
    </div>
  )
}

export default Contact