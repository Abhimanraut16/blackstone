"use client"
import React from 'react'
import Image from 'next/image'
import shilajit1 from '../../access/assets/images/banner/shilajit-2.png'
import shilajit2 from '../../access/assets/images/banner/shilajit-3.png'
import shilajit3 from '../../access/assets/images/banner/silajit-one.png'

import { FaWhatsapp } from "react-icons/fa"
import { AnimatePresence, easeInOut, motion } from 'framer-motion'

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut
      },
    },

    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut
      }
    }


  }
}


const slideShowData = [

  {
    id: 1,
    image: shilajit2,
    title: "Revitalize Your Body, Conquer the Day",
    subtitle: "with Blackstone Shilajit ",
    bgColor: "#99D902"
  },
  {
    id: 2,
    image: shilajit1,
    title: "Nature’s Purest Power",
    subtitle: "Unleashed ",
    bgColor: "#99D902",


  },

  {
    id: 3,
    image: shilajit3,
    title: "Revitalize Your Body, Conquer the Day",
    subtitle: "with Blackstone Shilajit",
    bgColor: "#99D902"
  },


]

export default function SlideShow() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Auto-slide logic
  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slideShowData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, []);

  const handleActiveData = (index) => {
    setActiveIndex(index);
  };
  const activeData = slideShowData[activeIndex];

  return (
    <div className='bg-brandDark border-b-2 border-white  text-white font-varela md:py-1 min-h-[80vh]'>
      <section className='border-b-4'>
        <div className="container  grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-5 md:py-16  ">

          <div className='flex flex-col justify-center py-14 md:py-0 '>
            <div className="text-center md:text-left flex justify-between flex-col min-h-[60vh]">
              <div>
                <AnimatePresence mode='wait'>
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='text-3xl lg:text-4xl font-bold font-varela'>
                    <p className=' shadow-2xl'>
                      {activeData.title}
                    </p>
                  </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                  <motion.p
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='text-lg py-2 leading-loose text-lemon/80'>{activeData.subtitle}</motion.p>
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='px-4 py-2 inline-block font-normal rounded-sm mt-4 
                     border-2 border-white shadow-box text-white hover:bg-lemon hover:text-black 
                    '>
                    Order Now
                  </motion.button>
                </AnimatePresence>
              </div>

              <div className='mt-8'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="flex items-center justify-center md:justify-start gap-4 mb-10">
                    <div className="w-20 h-[1px] bg-white"></div>
                    <p className=' uppercase text-sm'>Shilajit for you</p>
                    <div className="w-20 h-[1px] bg-white"></div>
                  </motion.div>

                </AnimatePresence>
                <div className='grid grid-cols-3'>
                  {slideShowData.map((item) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          y: 100,
                          transition: {
                            duration: 0.2
                          }
                        }}

                        onClick={() => handleActiveData(item)}
                        className="grid grid-cols-2 place-items-center cursor-pointer  rounded-full" key={item.id}>

                        <Image src={item.image} width={80} height={80} className=' hover:rotate-[360deg] duration-500 border-x-4 shadow-box border-spacing-2 border-lime-100 rounded-full h-[80px] w-[80px]' alt='' />
                      </motion.div>
                    )
                  })}


                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center ml-20 rounded-full border-opacity-20 shadow-2xl h-full w-8/12">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeData.id}

                variants={fadeUp(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="">
                <Image src={activeData.image} width={900} height={700} alt='blackstone' className='' />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="text-3xl text-white fixed bottom-16 right-10 hover:rotate-[360deg] duration-500
          z-[99999] mix-blend-difference" >
            <a href=""  >
              <FaWhatsapp className='text-lemon' />
            </a>
          </div>
        </div>
      </section>


    </div>
  )
}
