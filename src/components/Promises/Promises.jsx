'use client'
import React from 'react'
import Image from 'next/image'
import bgShilajit from '../../access/prodImage/shilajit_product.png'
import promise1 from '../../access/promises/promise_01.png'
import promise2 from '../../access/promises/promise_02.png'
import promise3 from '../../access/promises/promise_03.png'
import promise4 from '../../access/promises/promise_04.png'
import promise5 from '../../access/promises/promise_05.png'
import promise6 from '../../access/promises/promise_06.png'
import { motion } from 'framer-motion'
const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      }
    }
  }
}
function Promises() {
  return (
    <div className="border-b-2 bg-black  w-full text-white py-1 h-full">
      <div className='border-b-4 pt-8'>
        <div className="container ">
          <div className=" text-center w-60 py-3  m-auto border-b-2">
            <motion.h1
              variants={fadeUp(0.5)}
              initial="hidden"
              whileInView="show"
              className=' font-bold text-2xl border-b-4 py-2 w-56 m-auto font-varela' >
              Our Promises</motion.h1>
          </div>
          <div className="flex flex-col lg:flex-row p-6 xl:items-center">
            {/* left  */}
            <div className="flex flex-col gap-10  xl:gap-6">
              <motion.div
                variants={fadeUp(0.5)}
                initial="hidden"
                whileInView="show"
                className="flex items-start gap-4 py-4">
                <Image src={promise1} alt='promise' width={70}
                  height={100} />
                <div className="">
                  <h4 className='text-xl font-varela' >100% Pure and Authentic Shilajit
                  </h4>
                  <p className='text-xs text-white/60  font-poppins' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nulla . </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp(0.6)}
                initial="hidden"
                whileInView="show"
                className="flex items-start gap-4 py-4">
                <Image src={promise2} alt='promise' width={70}
                  height={100} />
                <div className="">
                  <h4 className='text-xl font-varela' >Quality Assurance</h4>
                  <p className='text-xs text-white/60 font-poppins'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nulla . </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp(0.6)}
                initial="hidden"
                whileInView="show"
                className="flex items-start gap-4 py-4">
                <Image src={promise3} alt='promise' width={70}
                  height={100} />
                <div className="">
                  <h4 className='text-xl font-varela'>Ethically Sourced</h4>
                  <p className='text-xs text-white/60 font-poppins' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nulla. </p>
                </div>
              </motion.div>

            </div>


            <motion.div
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="hidden xl:w-3/4  xl:grid xl:place-items-center">
              <Image src={bgShilajit} alt='bgShilajit' className='rounded-full object-cover' width={400} height={300} />
            </motion.div>
            {/* right  */}
            <div className="flex flex-col gap-12 pt-12 lg:pt-0  xl:gap-6">

              <motion.div
                variants={fadeUp(0.5)}
                initial="hidden"
                whileInView="show"

                className="flex items-start gap-6 py-4 lg:flex-row-reverse">
                <Image src={promise4} alt='promise' width={70}
                  height={100} />
                <div className="lg:text-end">
                  <h4 className='text-xl font-varela'>Transparencys</h4>
                  <p className='text-xs text-white/60 font-poppins'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nulla . </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp(0.6)}
                initial="hidden"
                whileInView="show"
                className="flex items-start gap-6 py-4 lg:flex-row-reverse">
                <Image src={promise5} alt='promise' width={70}
                  height={100} />
                <div className="lg:text-end">
                  <h4 className='text-xl font-varela'>Customer Satisfaction</h4>
                  <p className='text-xs text-white/60 font-poppins'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nulla . </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="flex items-start gap-6 py-4 lg:flex-row-reverse">
                <Image src={promise6} alt='promise' width={75} className=''
                  height={100} />
                <div className="lg:text-end">
                  <h4 className='text-xl font-varela'>Nature-Powered Wellness</h4>
                  <p className='text-xs text-white/60 font-poppins'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta. </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promises