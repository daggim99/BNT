'use client'

import React from 'react'

import { motion } from 'framer-motion'

function NavHover(props) {
  const { duration, delay } = props

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.5, y: -14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: `${props.duration}`,
        delay: `${props.delay}`,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`w-[104px] h-[31px] grid bg-white ${props.className}`}
    >
      <div className={`justify-self-center self-center grid`}>
        <h
          className={`text-center justify-self-center self-center text-[20px] text-black italic font-roboto-n500 ${props.className}`}
        >
          {props.title}
        </h>
      </div>
    </motion.article>
  )
}

export default NavHover
