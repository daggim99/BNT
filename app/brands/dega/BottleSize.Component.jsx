'use client'

import React from 'react'

import { motion } from 'framer-motion'

const sizes = [
  { id: 's1', size: 'Lorem ipsum dolor sit amet,', col: 1, row: 1 },
  { id: 's1', size: 'Lorem ipsum dolor sit amet,', col: 1, row: 2 },
  { id: 's1', size: 'Lorem ipsum dolor sit amet,', col: 1, row: 3 },
  { id: 's1', size: 'Lorem ipsum dolor sit amet,', col: 1, row: 4 },
]

function BottleSize() {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`lg:w-[747.96px] justify-self-end lg:h-[441px] lg:pt-40 col-start-1 col-span-1 row-start-1 justify-center row-span-1 grid grid-cols-1 grid-rows-[min-content_min-content_min-content]`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1, x: '-14vw' }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`w-[747.96px] justify-self-center self-end col-start-1 col-span-1 row-start-1 row-span-1 grid`}
      >
        <h1
          className={`text-[94px] text-[#3F3F3F] text-left font-roboto-n900 font-bold capitalize`}
        >
          Bottle sizes
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1, x: '14vw' }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.4,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-center self-center lg:w-[747.96px] col-start-1 col-span-1 row-start-2 row-span-1`}
      >
        <p className={`text-[28px] text-[#676767] text-left font-roboto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper{' '}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.6,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`mt-9 ml-20 justify-self-center self-center lg:w-[747.96px] col-start-1 col-span-1 row-start-3 row-span-1 grid grid-cols-1 grid-rows-4 gap-y-6`}
      >
        {sizes.map((size) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.6,
                type: 'spring',
                bounce: 0.4,
              }}
              key={size.id}
              className={`col-start-${size.col} col-span-1 row-start-${size.row} row-span-1`}
            >
              <p
                className={`text-[28px] text-[#676767] leading-[33px] font-roboto`}
              >
                {size.size}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.article>
  )
}

export default BottleSize
