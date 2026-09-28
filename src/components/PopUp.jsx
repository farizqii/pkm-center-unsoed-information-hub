"use client";

import { motion } from "framer-motion";

export default function PopUpWrapper({
  children,
  delay = 0,
  margin = "0px 0px -200px 0px", // starts 150px before entering the screen
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
}
