"use client"

import Image from 'next/image';
import { motion, useScroll,  useTransform } from 'framer-motion';
import React, { useState, useRef } from 'react';

const Home = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

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

  const [isAnimating, setIsAnimating] = useState(true)

  

  return (
    // <section className="bg-green-300 w-full h-screen text-center flex-center flex-col px-4">
    //   <h1 className='uppercase'>Hello world - Home</h1>
    //   <p className="lowercase text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nam quasi quia quisquam provident</p>
    // </section>

  <section 
  className="w-full bg-gray-900 text-center text-gray-200 h-[101vh] absolute opacity-90"
  style={{
    backgroundImage: `URL("/assets/images/hero_2.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundColor: 'opacity: 0.1'
  }}>
    {/* <AnimatePresence>
      <div className='h-screen bg-blue-100 relative'>
        <motion.div
          className='bg-orange-500 h-full absolute top-0 left-0 w-full'
          // initial={{opacity: 0.1}}
          // animate={{opacity: 1}}
          // transition={{duration: 3, ease: "easeOut"}}
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration: 2, ease: "easeOut"}}
          exit={{ opacity: 0 }}
        >
          <p>Hello 1</p>
        </motion.div>
      </div>
    </AnimatePresence> */}
    
    

    <div className='w-full h-full p-4'>
      <div className='py-4 h-full flex items-center justify-center flex-col'>
        <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40
        }}
        >
          <h1 className="uppercase text-6xl font-extrabold text-black">Safari</h1>
        </motion.div>

        <motion.div 
        className='w-full'
        initial={{
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          // rotate: isAnimating ? 180 : 0 
        }}
        transition={{
          duration: 1.5,
          delay: 0.5
        }}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore atque quas excepturi, eligendi, nesciunt vitae et tempora</p>
          <div className='my-2 overflow-hidden'>
            <motion.button 
              className="bg-yellow-400  text-black font-bold py-2 px-4 rounded-full mx-1"
              initial={{ opacity: 1, y: "100%", }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 1
              }}
              >
              Button
            </motion.button>
            <motion.button 
              className="bg-yellow-400  text-black font-bold py-2 px-4 rounded-full mx-1"
              initial={{ opacity: 1, y: "100%", }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 1
              }}
              >
              Button
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>

    {/* <div className='h-[100vh] bg-gray-800'>
        <motion.div
          style={{
            scale
          }}
          className='h-full '
          initial={{ opacity: 0.1 }}
          whileInView={{ 
            opacity: 1,
          }}
          // viewport={{ once: true }}
          animate={{ backgroundColor: ["rgb(17 24 39)", "#fa0"] }}
          transition={{
            // type: "spring",
            // bounce: 0.4,
            duration: 1.5,
            // repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <motion.div 
          className='bg-blue w-full h-full p-4 text-black flex justify-center flex-col text-left'
          >
            <motion.h2 
              className='text-left text-2xl font-bold'
              initial={{
                x: "-100vw",
                opacity: 0.1
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              transition={{
                type: 'spring',
                // delay: 2,
                // duration: 2, // only works for type tween
                stiffness: 100
              }}
            >Check out our new yellow collection</motion.h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Ad, quis enim porro eveniet</p>
            <button class="bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded-full my-2 w-fit">discover more</button>
          </motion.div>
        </motion.div>
    </div> */}

    <div className='h-[101vh] bg-gray-900 text-black' ref={scrollRef} >
        <motion.div
          className='h-full bg-yellow-500 flex justify-center flex-col text-left px-4'
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.5,
            // delay: 2,
            }
          }}
        >
          <motion.div 
            className=' h-fit w-full overflow-hidden'
            >
            <motion.h2 
              className='text-2xl font-bold '
              initial={{ opacity: 0, y: "100%" }}
              transition={{ duration: 1.5 }}
              whileInView={{
                opacity: 1,
                y: "0%",
                transition: {
                  duration: 2,
                }
              }}
              
            >Check out our new yellow collection</motion.h2>
          </motion.div>

          <motion.div 
            className=' h-fit w-full overflow-hidden'
            >
            <motion.p 
              className='text-sm lowercase'
              initial={{ opacity: 0, y: "100%" }}
              transition={{ duration: 1.5 }}
              whileInView={{
                opacity: 1,
                y: "0%",
                transition: {
                  duration: 2,
                  delay: 1
                }
              }}
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nam quasi quia quisquam provident</motion.p>
          </motion.div>

          <motion.div 
            className=' h-fit w-full overflow-hidden mt-2'
            >
            <motion.button
              className='text-sm lowercase py-2 px-4 rounded-full mr-1 bg-blue-200'
              initial={{ opacity: 0, y: "100%" }}
              transition={{ duration: 1.5 }}
              whileInView={{
                opacity: 1,
                y: "0%",
                transition: {
                  duration: 2,
                  delay: 2
                }
              }}
            >Learn more</motion.button>
          </motion.div>
        </motion.div>
    </div>

    <div className='bg-pink-500 h-fit w-full relative'>
      <div
        className='w-full flex flex-row'
      >
        <motion.div 
          style={{
            backgroundImage: `URL("/assets/images/furn_1.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
          className='w-1/3 aspect-square bg-green-300'
          initial={{ x: "-100%" }}
          whileInView={{
            x: 0,
            transition: {
              duration: 2,
            }
          }}
        ></motion.div>
        <motion.div 
          style={{
            backgroundImage: `URL("/assets/images/furn_4.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
          className='w-1/3 aspect-square bg-green-300'
          initial={{ x: "-200%" }}
          whileInView={{
            x: "100%",
            transition: {
              duration: 2,
            }
          }}
        ></motion.div>
      </div>
      <motion.div
        style={{
          backgroundImage: `URL("/assets/images/furn_2.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className='bg-green-200 w-1/3 aspect-square'
        initial={{ x: "-100%" }}
        whileInView={{
          x: "100%",
          transition: {
            duration: 2,
          }
        }}
      >
      </motion.div>
      <motion.div
        style={{
          backgroundImage: `URL("/assets/images/furn_3.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className='bg-green-200 w-1/3 aspect-square'
        initial={{ x: "-100%" }}
        whileInView={{
          x: "200%",
          transition: {
            duration: 2,
          }
        }}
      >
      </motion.div>

      <motion.div 
        className='text-black absolute top-[40%] text-left px-4 w-1/3'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 2
          }
        }}
        >
        <p className='text-5xl font-extrabold uppercase'>Our latest releases</p>
        
      </motion.div>

      <motion.div 
        className='text-black p-4'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 2
          }
        }}>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates rem </p>
        <button className='text-sm lowercase py-2 mt-2 px-4 rounded-full mr-1 bg-green-600'>discover</button>
      </motion.div>
    </div>
  </section>
  );
}

export default Home
