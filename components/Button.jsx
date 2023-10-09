import { motion } from 'framer-motion';

const Button = (props) => {
    const variant = props.variant

    return (
        <motion.button
        className={`${props.css} bg-pink-500 text-black font-semibold py-2 px-4 rounded-full mx-1`}
        variants={ variant }
        initial='initial'
        animate='animate'
        whileInView='whileInView'
        viewport={{ once: true }}
        >
        { props.text }
        </motion.button>
    );
}

export default Button;
