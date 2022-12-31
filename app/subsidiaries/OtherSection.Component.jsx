'use client'

import React from 'react'

import { motion } from 'framer-motion'

function OtherSection() {
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
      className={`w-screen h-[180px] grid`}
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.8,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`text-center text-[36px] text-black font-roboto-n300 self-center justify-self-center`}
      >
        Production capacity (44,000 bottles per hour)
      </motion.p>
    </motion.section>
  )
}

export default OtherSection
