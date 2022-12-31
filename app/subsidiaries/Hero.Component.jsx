'use client'

import React from 'react'

import { motion } from 'framer-motion'

function SubsidiariesHero() {
  return (
    <section className="h-[65vh] grid grid-cols-[1fr_1fr] grid-rows-1">
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-1 col-span-1 row-start-1 row-end-2"
      />
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-2 col-span-1 row-start-1 row-end-2"
      />
      <div className="lg:mt-12 col-span-full justify-self-center self-center row-start-1 row-end-2 grid grid-cols-1 grid-rows-2 lg:gap-y-6">
        <motion.h1
          initial={{ opacity: 0, scale: 1.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
          }}
          className="overflow-x-clip justify-self-center align-middle leading-[110.4px] font-lato-n900 font-bold text-4xl md:text-6xl lg:text-[88px] text-[#000000] text-center"
        >
          Subsidiaries
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 1.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            type: 'spring',
            bounce: 0.4,
          }}
          className="justify-self-center lg:w-[676px] md:leading-[34.84px] text-base md:text-lg lg:text-[20px] font-roboto text-center text-[#000000]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna.{' '}
        </motion.p>
      </div>
    </section>
  )
}

export default SubsidiariesHero
