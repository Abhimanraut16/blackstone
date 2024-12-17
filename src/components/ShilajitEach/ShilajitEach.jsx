'use client'
import React from 'react'
import Image from 'next/image'
import shilajieach from '../../access/prodImage/shilajit_product.png'
import shilajitProd from '../../access/prodImage/1.png'
import promiseProd from '../../access/assets/images/promiseProd.png'
import { motion } from 'framer-motion'
import Button from '../Header/Button'

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
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
      variants={fadeUp(0.2)}
      initial="hidden"
      whileInView="show"
      className="container flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-0 px-4 lg:px-0 max-sm:py-4 max-md:py-4"
    >
      {/* Left Image */}
      <Image
        src={shilajieach}
        alt="shilajiteach"
        width={350}
        height={300}
        className="hidden lg:block object-cover"
      />

      {/* Content Section */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="show"
        className="relative bg-green-800 w-full flex items-center overflow-hidden rounded-lg p-6  md:py-16 "
      >
        {/* Background Image */}
        <Image
          src={promiseProd}
          width={300}
          height={200}
          alt="promis"
          className="absolute bottom-0 -right-10 md:-right-20 h-full pointer-events-none opacity-20"
        />

        {/* Text Content */}
        <div className="flex flex-col items-center text-center max-w-sm mx-auto md:items-start md:text-start md:max-w-md ">
          <h2 className="text-lg py-2 leading-loose text-lemon/80">100% SHILAJIT</h2>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-varela">
            Our Commitments to Quality
          </h2>

          <p className="text-white/90 pt-6 pb-8 text-sm md:text-base">
            At Wellness Nest, purity is our promise. Our 100% natural Shilajit comes
            straight from the Himalayas, with no additives or processing. Each
            batch is rigorously tested for fulvic acid and essential trace minerals,
            ensuring unmatched purity and potency.
          </p>

          <Button />

        </div>
      </motion.div>

      {/* Right Image */}
      <Image
        src={shilajitProd}
        width={350}
        height={400}
        alt="shilajit product"
        className="hidden lg:block object-cover"
      />
    </motion.section>


  )
}

export default ShilajitEach