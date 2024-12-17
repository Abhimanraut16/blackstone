'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './benefits.css';
import benefits from '../../access/prodImage/1.png';
import benefits1 from '../../access/prodImage/shilajit_product.png';
import benefits2 from '../../access/prodImage/shilajit-product.png';
import { LiaHandPointRight } from 'react-icons/lia';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";


export const fadeUp = (delay) => ({
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
      ease: 'easeInOut',
    },
  },
});

const BenefitData = [
  { id: 1, title: 'Energy & Vitality Boost' },
  { id: 2, title: 'Rich in Bioactive Minerals' },
  { id: 3, title: 'Enhanced Nutrient Absorption' },
  { id: 4, title: 'Adaptogenic Properties' },
  { id: 5, title: 'Cognitive Support' },
];

const bgImage = {
  backgroundColor: '#000',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const sliderImages = [benefits, benefits1, benefits2];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    // x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

function BenefirsBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div style={bgImage} className="border-b-2 border-black py-4 w-full">
      <div className="container mx-auto flex flex-col items-center min-h-[550px] py-8 sm:py-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-0">
          {/* Sliding Images */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="flex justify-center w-full"
          >
            <div className="relative w-[90vw] sm:w-[75vw] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
              <AnimatePresence custom={direction}>
                <motion.div
                  key={currentSlide}
                  className="absolute w-full h-full"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <Image
                    src={sliderImages[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-8">
              <div
                className="cursor-pointer text-lime-200 hover:text-lemon text-3xl sm:text-4xl"
                onClick={prevSlide}
              >
                <FaCircleChevronLeft />
              </div>
              <div
                className="cursor-pointer text-lemon hover:text-lime-200 text-3xl sm:text-4xl"
                onClick={nextSlide}
              >
                <FaCircleChevronRight />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-white flex flex-col justify-center gap-8 px-4 lg:px-0">
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="border-b-2 py-2"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-varela text-center lg:text-left py-2">
                Blackstone The Shilajite
              </h1>
            </motion.div>
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              className="text-sm sm:text-base tracking-wide leading-6 text-white/90 font-poppins"
            >
              Shilajit is a rare, potent resin sourced from the high-altitude cliffs
              of the Himalayas. Formed over centuries through the natural
              decomposition and fermentation of medicinal plants, Shilajit is rich
              in bioactive minerals and has been a cornerstone of Ayurvedic medicine
              for thousands of years. This powerful adaptogen supports energy,
              vitality, and overall wellness, making it a true gift from nature.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits List */}
              <div className="space-y-4">
                <motion.p
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  whileInView="show"
                  className="font-semibold font-poppins"
                >
                  Benefits
                </motion.p>
                <div>
                  {BenefitData.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp(0.2)}
                      initial="hidden"
                      whileInView="show"
                      className="flex items-center gap-4 py-2"
                    >
                      <LiaHandPointRight className="text-2xl h-10 w-10 shadow-sm p-3 rounded-full bg-lemon font-varela" />
                      <motion.span className="text-sm">{item.title}</motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Shilajit Info */}
              <motion.div
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="show"
                className="border-l-4 border-primary/50 pl-6 space-y-4"
              >
                <h1 className="font-semibold font-poppins text-lg">Shilajit</h1>
                <motion.p
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="text-white/90 text-sm font-varela leading-6"
                >
                  Shilajit resin is a supplement common in Ayurvedic medicine. It
                  contains antioxidants and may offer other health benefits for
                  people with some health conditions, though more research is
                  needed.
                </motion.p>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
export default BenefirsBanner;



// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import './benefits.css';
// import benefits from '../../access/prodImage/1.png';
// import benefits1 from '../../access/prodImage/shilajit_product.png';
// import benefits2 from '../../access/prodImage/shilajit-product.png';
// import { LiaHandPointRight } from 'react-icons/lia';
// import { AnimatePresence, motion } from 'framer-motion';

// export const fadeUp = (delay) => ({
//   hidden: {
//     opacity: 0,
//     y: 100,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       delay: delay,
//       ease: 'easeInOut',
//     },
//   },
// });

// const BenefitData = [
//   { id: 1, title: 'Energy & Vitality Boost' },
//   { id: 2, title: 'Rich in Bioactive Minerals' },
//   { id: 3, title: 'Enhanced Nutrient Absorption' },
//   { id: 4, title: 'Adaptogenic Properties' },
//   { id: 5, title: 'Cognitive Support' },
// ];

// const bgImage = {
//   backgroundColor: '#000',
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   height: '100%',
//   width: '100%',
// };

// const sliderImages = [benefits, benefits1, benefits2];

// const slideVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 1000 : -1000,
//     opacity: 0,
//   }),
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => ({
//     zIndex: 0,
//     x: direction < 0 ? 1000 : -1000,
//     opacity: 0,
//   }),
// };

// function BenefirsBanner() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Auto-play functionality
//   useEffect(() => {
//     const autoPlay = setInterval(() => {
//       setDirection(1);
//       setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//     }, 3000); // Change slides every 5 seconds

//     return () => clearInterval(autoPlay); // Clear interval on component unmount
//   }, []);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentSlide((prev) =>
//       prev - 1 < 0 ? sliderImages.length - 1 : prev - 1
//     );
//   };
//   return (
//     <div style={bgImage} className="border-b-2 py-2 w-full">
//       <div className="container min-h-[550px] flex justify-center items-center py-16 sm:py-4 border-b-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Sliding Images */}
//           <motion.div
//             variants={fadeUp(0.2)}
//             initial="hidden"
//             whileInView="show"
//             className="CountSlide"
//           >
//             <div className="relative w-[400px] h-[400px] overflow-hidden">
//               <AnimatePresence custom={direction}>
//                 <motion.div
//                   key={currentSlide}
//                   className="absolute"
//                   custom={direction}
//                   variants={slideVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{
//                     x: { type: 'spring', stiffness: 300, damping: 30 },
//                     opacity: { duration: 0.2 },
//                   }}
//                 >
//                   <Image
//                     src={sliderImages[currentSlide]}
//                     alt={`Slide ${currentSlide + 1}`}
//                     width={400}
//                     height={400}
//                     className="max-w-[430px]"
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//             {/* Navigation Arrows */}
//             <div
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white text-2xl"
//               onClick={prevSlide}
//             >
//               {"<"}
//             </div>
//             <div
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white text-2xl"
//               onClick={nextSlide}
//             >
//               {">"}
//             </div>
//           </motion.div>

//           {/* Text Content */}
//           <div className="text-white flex flex-col justify-center gap-6 sm:pt-0">
//             <motion.div
//               variants={fadeUp(0.2)}
//               initial="hidden"
//               whileInView="show"
//               className="border-b-2 py-2"
//             >
//               <h1 className="text-3xl lg:text-4xl font-semibold font-varela border-b-4 text-center py-2">
//                 Blackstone The Shilajite
//               </h1>
//             </motion.div>
//             <motion.p
//               variants={fadeUp(0.3)}
//               initial="hidden"
//               whileInView="show"
//               className="text-sm tracking-wide leading-5 text-white/90 font-poppins"
//             >
//               Shilajit is a rare, potent resin sourced from the high-altitude
//               cliffs of the Himalayas...
//             </motion.p>

//             <div className="grid grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <motion.p
//                   variants={fadeUp(0.2)}
//                   initial="hidden"
//                   whileInView="show"
//                   className="font-semibold font-poppins"
//                 >
//                   Benefits
//                 </motion.p>
//                 <div>
//                   {BenefitData.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       variants={fadeUp(0.2)}
//                       initial="hidden"
//                       whileInView="show"
//                       className="flex items-center gap-5 py-2"
//                     >
//                       <LiaHandPointRight className="text-2xl h-10 w-10 shadow-sm p-3 rounded-full bg-lemon font-varela" />
//                       <motion.span>{item.title}</motion.span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <motion.div
//                 variants={fadeUp(0.3)}
//                 initial="hidden"
//                 whileInView="show"
//                 className="border-l-4 border-primary/50 pl-6 space-y-3"
//               >
//                 <h1 className="font-semibold font-poppins">Shilajit</h1>
//                 <motion.p
//                   variants={fadeUp(0.4)}
//                   initial="hidden"
//                   whileInView="show"
//                   className="text-white/90 text-sm font-varela"
//                 >
//        Shilajit resin is a supplement common in Ayurvedic medicine. It contains antioxidants and may offer other health benefits for people with some health conditions, though more research is needed.

//                 </motion.p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BenefirsBanner;
