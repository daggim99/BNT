'use client'

import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import ForBackground from './For.Background.Component'

function For() {
  return (
    <section className={`grid grid-cols-[1fr_1fr] grid-rows-1`}>
      <div
        className={`justify-self-center self-end col-start-1 col-span-full row-start-1 row-span-full`}
      >
        <ForBackground />
      </div>
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
        className={`col-start-1 col-span-1 row-start-1 row-span-1 justify-self-center self-center pt-64`}
      >
        <motion.h
          initial={{ opacity: 0, scale: 0.9, x: -120 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`font-lato-n900 font-bold text-[64px] text-black`}
        >
          For everyone
        </motion.h>
        <motion.p
          initial={{ opacity: 0, scale: 0.9, x: -120 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`font-roboto text-[#2c2b2b] text-[20px] w-[495px] leading-[34.84px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
        </motion.p>
      </motion.div>
      <motion.figure
        initial={{ opacity: 0, scale: 0.9, x: 120 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.7,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`col-start-2 col-span-1 row-start-1 row-span-1 pb-5 self-end justify-self-center w-[617px] h-[606.55px]`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Freshco/Pics/Face.png`}
          alt={`Picture of A Girl's Face`}
          className={`object-contain w-full h-full object-center`}
        />
      </motion.figure>
    </section>
  )
}

export default For
