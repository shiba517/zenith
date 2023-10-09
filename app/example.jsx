"use client"

import Image from 'next/image';
import { motion, useScroll,  useTransform } from 'framer-motion';
import React, { useState } from 'react';


const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);

  const imageStyle = {
    width: '100svw',
    // height: 'auto'
  }

  const boxVariant = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        when: 'beforeChildren'
      }
    }
  }

  const listVariant = {
    hidden: {
      x: "-10vw",
      opacity: 0.1
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 1,
    }
  }

  const [isAnimating, setIsAnimating] = useState(false)

  return (
    // <section className="bg-green-300 w-full h-screen text-center flex-center flex-col px-4">
    //   <h1 className='uppercase'>Hello world - Home</h1>
    //   <p className="lowercase text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nam quasi quia quisquam provident</p>
    // </section>

  <section 
  className="w-full bg-gray-900 p-4 text-center px-4 text-gray-200">
    {/* <h1 className="uppercase text-2xl font-extrabold">Play football</h1> */}
    {/* <div className='w-full'>
      <Image
      src="/assets/images/hero.jpg"
      style={imageStyle}
      width={1000}
      height={100}
      alt='hero image'
      >
      </Image>
      <div className='py-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore atque quas excepturi, eligendi, nesciunt vitae et tempora ipsum facilis quia a hic nam ipsam? Tenetur doloribus repudiandae odit rerum?</p>
      </div>
    </div> */}

    {/* ROLLER MOTION */}
    <div className='bg-blue-200'>
      {/* <div className=' bg-green-500 h-28 w-24'>hello</div> */}
      <motion.div 
      className='bg-green-500 h-28 w-24'
      initial={{
        opacity: 0.1
      }}
      animate={{
        x: isAnimating ? "50vw" : 0,
        opacity: isAnimating ? 1 : 0.1,
        scale: isAnimating ? 1.5 : 1,
        rotate: isAnimating ? 180 : 0 
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50
      }}
      onClick={() => {
        setIsAnimating(!isAnimating)
        console.log('Animating')
      }}
      >motion</motion.div>
    </div>

     {/* SCROLL */}
     <div className='bg-green-300'>
      <motion.div
      className='bg-green-500 w-1/2 mx-auto'
      style={{
        scale
      }}>
        <motion.div
        className='bg-blue-500 h-28 w-1/2 mx-auto'
        style={{
          scaleY: scrollYProgress
        }}
        ></motion.div>
      </motion.div>
      
    </div>

    {/* APPEAR MOTION */}
    <div className='bg-pink-300'>
      <motion.div
      className='bg-green-500 h-28 w-24'
      variants={boxVariant}
      initial='hidden'
      animate='visible'
      >
        {[1, 2, 3].map(box => {
          return <motion.li 
          key={box} 
          className='text-black list-none'
          variants={listVariant}
          >{box}</motion.li>
        })}
      </motion.div>
    </div>

    {/* SHAPESHIFTING MOTION */}
    <div className='bg-yellow-300'>
      <motion.div
      className='bg-red-900 h-28 w-24 mx-auto'
      animate={{
        scale: [1, 1.4, 0.6, 1],
        borderRadius: ["20%", "30%", "40%", "50%"],
        rotate: [180, 0, 270, 360]
      }}
      transition={{
        duration: 3
      }}
      >
      </motion.div>
    </div>

    {/* SCROLL TRIGGERED */}
   <motion.div 
   className='bg-purple-300'
   initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    // viewport={{ once: true }}
    transition={{
      // type: "spring",
      // bounce: 0.4,
      duration: 2
    }}
    >
      <motion.div
      className='bg-purple-700 h-28 w-24'
      >
        
      </motion.div>
    </motion.div>


    {/* MOTION CARDS */}
    {/* <div className='w-full grid grid-cols-2 gap-4 h-28'>
      <div className=' bg-green-500'>hello</div>
      <div className=' bg-pink-500'>hello</div>
    </div> */}

    {/* CARDS */}
    {/* <div className='bg-blue-400 w-full grid grid-cols-2 gap-2 h-28'>
      <div className=' bg-green-500'>hello</div>
      <div className=' bg-pink-500'>hello</div>
    </div> */}
  </section>
  );
}

export default Home
