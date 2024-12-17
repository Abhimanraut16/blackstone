'use client'
import React from 'react'
import Image from 'next/image'
import RightImage from '../../access/prodImage/3.png'
import Use from '../Use/Use'
import { BiCheckShield } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import { motion } from 'framer-motion';
import { fadeUp } from '../BenefitsBanner/BenefirsBanner';
import { BsArrowRightShort } from "react-icons/bs";
<BsArrowRightShort />
function HowUse() {
  return (
    <div className="bg-black">
      <div className='container'>
        <Use />
        <section className="text-white/50 body-font">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <motion.div
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-5">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 inline-flex items-center justify-center text-white relative z-10">

                    <BiCheckShield className='text-3xl' />

                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white tracking-wider">STEP 1:<span className='font-bold'>(Dosage)</span> </h2>
                    <div className="leading-relaxed">
                      <p className='flex'><BsArrowRightShort className='text-white text-xl mt-1' /> (about 300-500 mg) is usually sufficient for daily use</p>
                      <p className='flex'><BsArrowRightShort className='text-white text-xl mt-1' />1 gram per day</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-5">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 inline-flex items-center justify-center text-white relative z-10">
                    <BiDownArrowAlt className='text-3xl' />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white  tracking-wider">STEP 2: <span className='font-bold'>(Preparation)</span></h2>
                    <div className="leading-relaxed">
                      <p className='flex' ><BsArrowRightShort className='text-white text-xl mt-1' />Mix with Water</p>
                      <p className='flex'><BsArrowRightShort className='text-white text-xl mt-1' />Mix with Milk or Tea</p>
                      <p className='flex'><BsArrowRightShort className='text-white text-xl mt-1' />Direct Consumption</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-5">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 inline-flex items-center justify-center text-white relative z-10">
                    <BiDownArrowAlt className='text-3xl'/>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white  tracking-wider">STEP 3: <span className='font-bold'>(When to Take)</span></h2>
                    <div className="leading-relaxed">
                      <p className='flex'><BsArrowRightShort className='text-white text-xl mt-1' />on an empty stomach in the morning</p>
                      <p className='flex'><BsArrowRightShort className='text-white text-3xl' />afternoon if you're looking for an energy boost or enhanced focus.</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-5">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 inline-flex items-center justify-center text-white relative z-10">
                    <BiDownArrowAlt className='text-3xl'/>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white  tracking-wider">STEP 4: <span className='font-bold'>(Frequency)</span></h2>
                    <div className="leading-relaxed">
                      <p className='flex'><BsArrowRightShort className='text-white text-xl mt-1' />general wellness, take Shilajit once daily</p>
                      <p className='flex'><BsArrowRightShort className='text-white text-xl mt-1' />twice a day—morning and early afternoon</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white  tracking-wider">Consistency</h2>
                    <div className="leading-relaxed">
                      <p className='flex'><BsArrowRightShort className='text-white mt-2 text-xl' />on an empty stomach in the morning</p>
                      <p className='flex'><BsArrowRightShort className='text-white  text-3xl' />afternoon if you're looking for an energy boost or enhanced focus.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp(0.5)}
                initial="hidden"
                whileInView="show"
                className="py-2 px-16 ">
                <Image src={RightImage} width={500} height={300} className=" object-cover  m-auto" alt="step" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HowUse