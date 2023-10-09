import { motion } from 'framer-motion';
import { YellowSectionVariant, appearFromBottomVariant } from '@app/utils/variants/variants';
import Button from '@components/Button';

const YellowCollection = () => {
    // const variant = {
    //     initial: { opacity: 0 },
    //     whileInView: { 
    //       opacity: 1,
    //       transition: {
    //         duration: 1.5,
    //       },
    //     },
    // }
    const data = {
        initial: {
            opacity: 0,
            y: "100%"
        },
        whileInView: { 
            opacity: 0.5,
            y: "0%",
            transition: {
            duration: 1,
            // delay: delay ? delay : 0
            },
        },
    }

  return (
    <div className='h-[105vh]'>
    <motion.div
        className='h-full bg-yellow-500 flex justify-center flex-col text-left px-4'
        variants={YellowSectionVariant}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true }}
    >
    <motion.div 
        className=' h-fit w-full overflow-hidden'
    >
        <motion.h2 
            className='text-2xl font-bold '
            variants={appearFromBottomVariant()}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true }}
        >Check out our new yellow collection</motion.h2>
    </motion.div>

        <motion.div 
        className=' h-fit w-full overflow-hidden'
        >
        <motion.p 
            className='text-sm lowercase'
            variants={appearFromBottomVariant(1)}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true }}
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nam quasi quia quisquam provident</motion.p>
        </motion.div>

        <motion.div 
        className=' h-fit w-full overflow-hidden mt-2'
        >
        <Button variant={appearFromBottomVariant(2)} text='Discover'></Button>
        </motion.div>
    </motion.div>
    </div>
  );
}

export default YellowCollection;
