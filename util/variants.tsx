export const stack = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  export const innerStack = {
    hidden: {
        opacity: 0,
        x:-80
      },
      whileInView: {
        opacity: 1,
        x:0
    },
      exit: {
        opacity: 0,
        x:-80,
      },
  }

  export const image = {
    hidden: {
        opacity: 0,
        x:100
      },
      whileInView: {
        opacity: 1,
        x:0
    },
      exit: {
        opacity: 0,
        x:100,
      },
  }

  export const secondaryImage = {
    hidden: {
        opacity: 0,
        x:10
      },
      whileInView: {
        opacity: 1,
        x:0
    },
      exit: {
        opacity: 0,
        x:10,
      },
  }

  export const divider = {
      hidden: { width: 0 },
      whileInView: {
          width: '100%',
          transition: {
              delay: 0.2,
              duration: 0.4,
          },
      },
  };

  export const secondaryDivider = {
    hidden: { width: 0 },
    whileInView: {
        width: '10%',
        transition: {
            delay: 0.2,
            duration: 0.8,
        },
    },
  }

  export const aspectRatio = {
    hidden: {
        opacity: 0,
        x:-10
      },
      whileInView: {
        opacity: 1,
        x:0
    },
      exit: {
        opacity: 0,
        x:-10
      },
  }

  export const secondaryStack = {
    hidden: {
        opacity: 0,
        x:100
      },
      whileInView: {
        opacity: 1,
        x:0
    },
      exit: {
        opacity: 0,
        x:100,
      },
  }

  export const box = {
    hidden: {
        opacity: 0,
        border:0
      },
      whileInView: {
        opacity: 1,
        border:'1px solid #2d3748'
    },
      exit: {
        opacity: 0,
        border:0
      },
  }

  export const gridItem = {
    hidden: {
        opacity: 0,
        y:-80
      },
      whileInView: {
        opacity: 1,
        y:0
    },
      exit: {
        opacity: 0,
        y:-80,
      },
  }

  export const secondaryGridItem = {
    hidden: {
        opacity: 0,
        y:-80
      },
      whileInView: {
        opacity: 1,
        y:0
    },
      exit: {
        opacity: 0,
        y:-80,
      },
  }

  export const simpleGrid = {
      hidden: {
          opacity: 0,
      },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.2,
          },
      },
      exit: {
          opacity: 0,
          transition: {
              delay: 0.2,
              duration: 0.5,
          },
      },
  };

  export const ternaryStack = {
    hidden: {
        opacity: 0,
        y:80
      },
      whileInView: {
        opacity: 1,
        y:0
    },
      exit: {
        opacity: 0,
        y:80,
      },
  }
