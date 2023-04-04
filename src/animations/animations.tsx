export const pageAnimationLeft = {
  hidden: { x: "100%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      type: "spring",
      damping: 20,

      delayChildren: 1.3,
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
};

export const parentNav = {
  hidden: { y: "-100%" },
  show: {
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
      type: "spring",
      damping: 10,
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 1, transition: { ease: "easeIn" } },
};
