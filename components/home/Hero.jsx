import { motion } from 'framer-motion';
import Button from '@components/Button.jsx';
import { heroHeaderVariant, heroSubTextVariant, heroButtonVariant } from '@app/utils/variants/variants';

const Hero = () => {
  return (
    <div className='bg-yellow-950 relative text-center'>
      <div
        className="w-full text-center text-gray-200 h-[101vh] opacity-40"
        style={{
          backgroundImage: `URL("/assets/images/hero_2.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}  
      ></div>
      <div className='absolute px-4 top-0 left-0 w-full h-full text-gray-200 flex items-center justify-center flex-col'>
        <motion.h1
          className="uppercase text-5xl font-extrabold text-yellow-400"
          variants={heroHeaderVariant}
          initial='visible'
          animate='animate'
          transition='transition'
        >Zenith Furns</motion.h1>

        <motion.p
        className='text-sm'
          variants={heroSubTextVariant}
          initial='initial'
          animate='animate'
        >From Timeless Classics to Contemporary Creations, Discover a World of Quality Craftsmanship and Endless Inspiration</motion.p>

        <div className='my-2 overflow-hidden'>
          <Button  variant={heroButtonVariant} text='more'></Button>
          <Button  variant={heroButtonVariant} text='new collection'></Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
