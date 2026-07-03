export const easeOut = [0.16, 1, 0.3, 1] as const;

export const springSoft = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 260,
  damping: 24,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const viewportOnce = {
  once: true,
  amount: 0.25,
  margin: "-80px",
} as const;