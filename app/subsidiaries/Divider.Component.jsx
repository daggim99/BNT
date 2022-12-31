'use client'

import React from 'react'

import { motion } from 'framer-motion'
function Divider() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.5,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`w-screen h-[86px] bg-[#4A171E] grid`}
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.6, x: 541 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.6,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`text-[32px] text-white font-roboto-n700 self-center justify-self-center`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros,
      </motion.p>
    </motion.section>
  )
}

export default Divider
