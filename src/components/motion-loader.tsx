"use client";

import { FC, PropsWithChildren } from "react";
import { motion } from "motion/react";

interface MotionLoaderProps extends PropsWithChildren {
  className?: string;
}

const MotionLoader: FC<MotionLoaderProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionLoader;
