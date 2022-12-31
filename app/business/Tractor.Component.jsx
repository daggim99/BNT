'use client'

import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

function Tractor() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`transition-d group w-screen grid grid-cols-[1fr_1fr] grid-rows-1`}
    >
      <div
        className={`transition-d z-[5000] group-hover:text-black text-white col-start-1 col-span-1 justify-self-center self-center row-start-1 row-span-1 grid grid-cols-1 grid-rows-[min-content_min-content] gap-y-16`}
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.6, x: 333 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`transition-d col-start-1 col-span-1 row-start-1 row-span-1 w-[437px] text-left  text-[24px] font-roboto-n700`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.6, x: 333 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`transition-d col-start-1 col-span-1 row-start-2 row-span-1 capitalize hover:rounded-md group-hover:border-black group-hover:text-black text-white text-[25px] border-solid border-[3px] border-white w-[195px] h-[57px]`}
        >
          contact us
        </motion.button>
      </div>
      <figure
        className={`transition-d h-[650px] group-hover:-z-50 w-full col-span-full row-span-full group-hover:col-start-2 group-hover:col-span-1`}
      >
        <Image
          src={`/images/Business/Tractor/Tractor.png`}
          width={100}
          height={100}
          alt={`Tractor Image`}
          className={`transition-d w-full h-full object-cover object-center`}
        />
      </figure>
    </motion.section>
  )
}

export default Tractor
