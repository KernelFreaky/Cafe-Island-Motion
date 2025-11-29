import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "100%", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1.0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};