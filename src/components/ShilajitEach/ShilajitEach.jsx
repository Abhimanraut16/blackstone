'use client'
import React from 'react'
import Image from 'next/image'
import shilajieach from '../../access/prodImage/shilajit_product.png'
import shilajitProd from '../../access/prodImage/shilajit-prod.png'
import promiseProd from '../../access/assets/images/promiseProd.png'
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

function ShilajitEach() {
  return (
    <motion.section
      variants={fadeUp(0.5)}
      initial="hidden"
      whileInView="show"
      className='container py-1 flex '>

      <Image src={shilajieach} alt='shilajiteach' width={400} height={400} className='hidden lg:block object-cover' />

      <motion.div
        variants={fadeUp(0.7)}
        initial="hidden"
        whileInView="show"

        className="relative bg-green-800 w-full flex items-center py-20 overflow-hidden md:py-16">
        <Image src={promiseProd} width={300} height={200} alt='promis' className='absolute bottom-0 -right-20 h-full pointer-events-none opacity-20' />

        <div className="flex flex-col items-center text-center max-w-sm mx-auto px-3 md:items-start md:text-start md:mx-12 md:max-w-md">
          <h2 className=' text-lg py-2 leading-loose text-lemon/80'>100% SHILAJIT</h2>
          <h2 className='text-xl lg:text-2xl font-bold text-white font-varela '>Our Commitments to Quality
          </h2>

          <p className='text-white/90 pt-6 pb-8'>At Wellness Nest, purity is our promise. Our 100% natural Shilajit comes straight from the Himalayas, with no additives or processing. Each batch is rigorously tested for fulvic acid and essential trace minerals, ensuring unmatched purity and potency. </p>
          <button className='px-4 py-2 inline-block font-normal rounded-sm border-2 border-lemon text-white hover:bg-lemon hover:text-black'>  Order Now</button>
        </div>

      </motion.div>
      
      <Image src={shilajitProd} width={300}
        height={200} alt='' className='hidden lg:block' />
    </motion.section>
  )
}

export default ShilajitEach