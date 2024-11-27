import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

function page() {
  return (
    <>
      <div className=" antialiased bg-white">
        <div className="flex w-full min-h-screen justify-center items-center">

          <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 bg-lemon w-full max-w-4xl sm:p-12 p-8 shadow-lg rounded-xl text-white">
            <div className="flex flex-col space-y-8 justify-between">
              <div className="">
                <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                <p className='pt-2 text-black text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint.</p>
              </div>
              <div className="flex flex-col space-y-6">

                <div className="inline-flex space-x-2 items-center">
                  <FaPhoneAlt className='text-teal-300 text-xl' />
                  <span>+977 9810110110</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <FaPhoneAlt className='text-teal-300 text-xl' />
                  <span>contact@16gmail.com</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <FaPhoneAlt className='text-teal-300 text-xl' />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
              <div className="flex space-x-4 text-lg">
                <a href="#">
                  <FaPhoneAlt />
                </a>
                <a href="#">
                  <FaPhoneAlt />
                </a>
                <a href="#">
                  <FaPhoneAlt />
                </a>
                <a href="#">
                  <FaPhoneAlt />
                </a>
              </div>

            </div>


            <div className="bg-white rounded-xl shadow-lg p-8 md:w-80">
              <form action="" className='flex flex-col space-y-4'>

                <div className="">
                  <label htmlFor="" className='text-sm'>Your name</label>
                  <input type="text" placeholder='Your name' className=' ring-1 ring-gray-300 w-full rounded-md  px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />

                </div>

                <div className="">
                  <label htmlFor="" className='text-sm'>Email Address</label>


                  <input type="text" placeholder='Email Address' className=' ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2  outline-none focus:ring-2 focus:ring-teal-300' />

                </div>

                <div className="">
                  <label htmlFor="" className='text-sm'>Message</label>


                  <textarea
                    placeholder='Message' className=' ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' >

                  </textarea>

                </div>
                <button className=' inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
                  send message
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>


    </>



  )
}

export default page