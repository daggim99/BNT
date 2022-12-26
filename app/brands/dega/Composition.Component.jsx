'use client'

import React from 'react'

import { motion } from 'framer-motion'

function Composition() {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`grid grid-cols-1 grid-rows-2`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1, x: '-14vw' }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.4,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-center self-center row-start-1 row-span-1`}
      >
        <h1
          className={`text-[81px] text-black text-center font-roboto-n900 font-bold`}
        >
          Composition
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1, x: '14vw' }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-center self-center row-start-2 row-span-1 w-[830.29px]`}
      >
        <p className={`text-center text-[28px] text-[#777777] font-roboto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper{' '}
        </p>
      </motion.div>
    </motion.article>
  )
}

export default Composition
