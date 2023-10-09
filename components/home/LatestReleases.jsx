import { motion, useScroll,  useTransform } from 'framer-motion';
import { appearFromLeftVariant } from '@app/utils/variants/variants';
import Button from '@components/Button';

const LatestReleases = () => {
    

  return (
    <div className='bg-pink-500 h-fit w-full relative pb-6'>
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
          variants={appearFromLeftVariant("-100%", "0%")}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
        ></motion.div>
        <motion.div 
          style={{
            backgroundImage: `URL("/assets/images/furn_4.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
          className='w-1/3 aspect-square bg-green-300'
          variants={appearFromLeftVariant("-200%", "100%")}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <motion.div
        style={{
          backgroundImage: `URL("/assets/images/furn_2.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className='bg-green-200 w-1/3 aspect-square'
        variants={appearFromLeftVariant("-100%", "100%")}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true }}
      >
      </motion.div>
      <motion.div
        style={{
          backgroundImage: `URL("/assets/images/furn_3.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className='bg-green-200 w-1/3 aspect-square'
        variants={appearFromLeftVariant("-100%", "200%")}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true }}
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
        viewport={{ once: true }}
        >
        <p className='text-5xl font-extrabold uppercase'>Our latest releases</p>
        
      </motion.div>

      <motion.div 
        className='text-black px-4 text-center pt-4'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 2
          }
        }}
        viewport={{ once: true }}
        >
        {/* <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sunt officia repudiandae ducimus sit aspernatur culpa corrupti?</p> */}
        <Button css='bg-yellow-400' text='see more'></Button>
      </motion.div>
    </div>
  );
}

export default LatestReleases;
