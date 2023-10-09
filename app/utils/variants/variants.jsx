export const heroHeaderVariant = {
    visible: { scale: 1 },
    animate: { rotate: 360, scale: 1 },
    transition: {
      type: 'spring', stiffness: 160, damping: 40
    }
}

export const heroSubTextVariant = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
}

export const heroButtonVariant = {
    initial: { y: "100%" },
    animate: { 
      y: "0%",
      transition: {
        duration: 1,
        delay: 1
      } 
    }
}

export const YellowSectionVariant = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
}

export const appearFromBottomVariant = (delay) => {
  const data = {
      initial: {
          opacity: 0,
          y: "100%"
      },
      whileInView: { 
          opacity: 1,
          y: "0%",
          transition: {
          duration: 1,
          delay: delay ? delay : 0
          },
          viewport: {
            once: true
          }
      },
      viewport: {
        once: true
      }
  }

  return data
}

export const appearFromLeftVariant = (initialX, whilInViewX) => {
  const data = {
      initial: {
          x: initialX
      },
      whileInView: { 
          x: whilInViewX,
          transition: {
          duration: 2,
          },
      },
  }

  return data
}
