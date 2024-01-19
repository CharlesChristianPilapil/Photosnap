export const slideVariant = () => {
    return {
      hidden: {
        x: xValue,
        opacity: 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          delay: 0,
          duration: .5,
          when: 'beforeChildren'
        },
      },
    };
}

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
      when: 'beforeChildren',
      damping: 15
    },
  },
});

export const opacityVariant = ( direction, initPos, type, delay, duration  ) => {
  return {
    hidden: {
      blur: 5,
      x: direction === "left" ? `-${initPos}` : direction === "right" ? `${initPos}` : 0,
      y: direction === "up" ? `${initPos}` : direction === "down" ? `${initPos}` : 0,
    },
    show: {
      blur: 0,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        when: "beforeChildren"
      }
    }
  }
}

export const blueVariant = (direction, initPos, type, delay, duration) => {
  return {
    hidden: {
      filter: "blur(2px)", // Initial blur value
      x: direction === "left" ? `-${initPos}` : direction === "right" ? `${initPos}` : 0,
      y: direction === "up" ? `${initPos}` : direction === "down" ? `${initPos}` : 0,
    },
    show: {
      filter: "blur(0)", // No blur when shown
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        when: "beforeChildren",
      },
    },
  };
};