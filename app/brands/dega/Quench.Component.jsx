'use client'

import React from 'react'

import { motion } from 'framer-motion'

function Quench() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`h-[509px] content-center grid grid-cols-1 grid-rows-[min-content_min-content]`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`row-start-1 row-span-1 justify-self-center self-center`}
      >
        <h1
          className={`text-center text-[81px] text-black font-roboto-n900 font-bold`}
        >
          Quench you’re thirst
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.6,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`row-start-2 row-span-1 justify-self-center self-center w-[944px]`}
      >
        <p className={`text-center text-[28px] tex-[#666666] font-roboto`}>
          Bottled at the source from the cold, water-rich, heavenly and
          Naturally Bountiful Highlands (DEGA) of Debreberhan, Ethiopia.
        </p>
      </motion.div>
    </motion.section>
  )
}

export default Quench
