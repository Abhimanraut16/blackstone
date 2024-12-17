'use client'
import React from 'react'
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
function Banner() {
  return (
    <div>
      <section>
        <div className="py-7 px-10">

          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:mx-w-[450px]">
              <motion.h1
                variants={fadeUp(0.5)}
                initial="hidden"
                whileInView="show"
                className='text-2xl lg:text-4xl font-semibold font-poppins text-white'>How to use:</motion.h1>
              <motion.p
                variants={fadeUp(0.6)}
                initial="hidden"
                whileInView="show"
                className='text-left text-white text-sm font-varela'>Start with a pea-sized amount (300–500 mg) of shilajit daily, dissolved in warm water, milk, or tea. For quicker absorption, let it dissolve under your tongue. Gradually increase to a maximum of 1 gram if needed. Take it in the morning on an empty stomach for energy or in the afternoon for focus . Stick to one dose daily for overall health or two doses for specific goals like improved performance. Stay consistent, and you’ll likely notice benefits like better energy and mood within weeks. Store shilajit in a cool, dry place, away from sunlight, with the container closed.</motion.p>
            </div>
          </div>
        </div >
      </section >
    </div >
  )
}

export default Banner