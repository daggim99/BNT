'use client'

import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import LeftBenefit from './LeftBenefit.Component'
import RightBenefit from './RightBenefit.Component'

function Benefits() {
  return (
    <section className={`grid grid-cols-[1fr_1fr] grid-rows-1 h-[841px]`}>
      <LeftBenefit />
      <RightBenefit />

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
        className={`w-[294px] h-[716px] justify-self-center self-center col-start-1 col-span-full row-start-1 row-span-full`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Freshco/Pics/FreshCoJuiceBottle.png`}
          alt={`FreshCo Juice Bottle`}
          className={`object-contain object-center w-full h-full`}
        />
      </motion.figure>
    </section>
  )
}

export default Benefits
