'use client'

import React from 'react'

import { motion } from 'framer-motion'

function Location() {
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
      className={`w-screen h-[190px] bg-[#D9D9D9] grid mb-24`}
    >
      <div className={`grid grid-cols-[0.6fr_1fr] grid-rows-1 gap-x-9`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.6, x: 341 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`col-start-1 col-span-1 justify-self-end self-center`}
        >
          <h1 className={`text-black text-[36px] font-roboto-n300`}>
            Location
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6, x: -341 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.9,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`col-start-2 col-span-1 justify-self-start self-center`}
        >
          <select
            name="locations"
            id="locations"
            className={`w-[558px] h-[52px] border-black bg-white`}
          >
            <option value="none"></option>
            <option value="addisabeba">Addis Abeba</option>
            <option value="dese">Dese</option>
            <option value="gonder">Gonder</option>
          </select>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Location
