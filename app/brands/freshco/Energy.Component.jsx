'use client'

import React from 'react'

import { motion } from 'framer-motion'
import Slider from './Slider.Component'

function Energy() {
  return (
    <section className={`my-16 h-[900px] grid grid-cols-[1fr_1fr] grid-rows-1`}>
      <div
        className={`w-[60%] m-auto justify-self-center  col-start-1 col-span-1 row-start-1 row-span-full grid grid-cols-1 grid-rows-2`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -120 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`col-start-1 col-span-1 row-start-1 row-span-1`}
        >
          <h1
            style={{ fontFamily: 'austria' }}
            className={`text-[#925A25] text-[96px]`}
          >
            Feel energetic
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -120 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`w-[495px] justify-self-center col-start-1 col-span-1 row-start-2 row-span-1`}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9, x: -120 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`font-roboto text-[#2C2B2B] text-[20px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </motion.p>
        </motion.div>
      </div>
      <Slider />
    </section>
  )
}

export default Energy
