'use client'
import React from 'react'
import Image from 'next/image'
import './benefits.css'
import benefits from '../../access/prodImage/1.png'
import benefits1 from '../../access/prodImage/shilajit_product.png'
import benefits2 from '../../access/prodImage/shilajit-product.png'
import { LiaHandPointRight } from "react-icons/lia";
import { AnimatePresence, motion } from 'framer-motion';
export const fadeUp = (delay) => {
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


const BenefitData = [

  {
    id: 1,
    title: "Energy & Vitality Boost",

  },
  {
    id: 2,
    title: "Rich in Bioactive Minerals",



  },

  {
    id: 3,
    title: "Enhanced Nutrient Absorption",

  },

  {
    id: 4,
    title: "Adaptogenic Properties",

  },

  {
    id: 5,
    title: "Cognitive Support",

  },

]


const bgImage = {
  // backgroundImage: `url(${bg})`,
  backgroundColor: '#000',
  backgroundPosition: 'no-repeat',
  backgroundSize: 'cover',
  height: "100%",
  width: "100%"
}

function BenefirsBanner() {
  return (
    <div style={bgImage}>

      <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="show"
            className="CountSlide">
            <div className="box">
              <Image src={benefits} alt='benefits' width={400} height={400} className='max-w-[430px]' />
              <Image src={benefits1} alt='benefits' width={400} height={400} className='max-w-[430px]' />
              <Image src={benefits2} alt='benefits' width={400} height={400} className='max-w-[430px]' />
            </div>
          </motion.div>
          <div className="text-white flex flex-col justify-center gap-6 sm:pt-0">

            <motion.h1
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="show"

              className='text-3xl lg:text-4xl font-semibold font-poppins'>Blackstone The Shilajite
            </motion.h1>
            <motion.p
              variants={fadeUp(0.8)}
              initial="hidden"
              whileInView="show"

              className='text-sm tracking-wide leading-5 text-white/90 '>Shilajit is a rare, potent resin sourced from the high-altitude cliffs of the Himalayas. Formed over centuries through the natural decomposition and fermentation of medicinal plants, Shilajit is rich in bioactive minerals and has been a cornerstone of Ayurvedic medicine for thousands of years. This powerful adaptogen supports energy, vitality, and overall wellness, making it a true gift from nature
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              <div className=" space-y-5">

                <div className=" ">
                  {BenefitData.map((item, index) => {
                    return (

                      <motion.div
                        key={index}
                        variants={fadeUp(0.8)}
                        initial="hidden"
                        whileInView="show"
                        className='flex items-center gap-5 py-2' >
                        <LiaHandPointRight className='text-2xl h-10 w-10 shadow-sm p-3 rounded-full bg-lemon' />
                        <motion.span
                          variants={fadeUp(0.7)}
                          initial="hidden"
                          whileInView="show"

                        >{item.title}</motion.span>
                      </motion.div>
                    )
                  })}
                </div>


              </div>

              <motion.div
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"

                className="border-l-4 border-primary/50 pl-6 space-y-3">
                <h1>
                  Shilajit</h1>
                <motion.p
                  variants={fadeUp(0.7)}
                  initial="hidden"
                  whileInView="show"
                  className='text-white/90 text-sm'>
                  Shilajit resin is a supplement common in Ayurvedic medicine. It contains antioxidants and may offer other health benefits for people with some health conditions, though more research is needed.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default BenefirsBanner