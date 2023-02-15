'use client'

import React from 'react'

import { motion } from 'framer-motion'

function ForBackground() {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.9, x: -120 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.6,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`w-screen h-[738.47px] bg-[url('/images/Brand/Freshco/Pics/backgroundSvg.svg')]`}
    />
  )
}

export default ForBackground
