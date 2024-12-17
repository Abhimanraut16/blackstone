'use client'
import React from 'react'

import { motion } from 'framer-motion'


import TimeCard, { fadeUp } from './TimeCard';
function TimeLine() {
  return (
    <motion.div

      className=" mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full h-auto bg-bodyColor text-lightText ">
      <motion.div

        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="container flex flex-col lg:flex-row gap-12 ">
     
        <div className="w-full lg:w-1/2 ">

          <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <TimeCard
              title="Go natural company established on February 15, 2019, and started selling ‘Silajit’ in the local market."
              result="02/15/2019"

            />
            <TimeCard
              title="Due to its high demand, the purifying factory was established in Nepalgunj on November 25, 2019."
              result="11/25/2019"

            />
          </div>
        </div>

   
        <div className="w-full lg:w-1/2">
          <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <TimeCard
              title="Go Natural started to export the products to the global market on December 15, 2019."
              result="12/15/2019"

            />
          </div>



        </div>
      </motion.div>
    </motion.div>

  );

}

export default TimeLine