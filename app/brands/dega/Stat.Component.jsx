'use client'

import React from 'react'

import { motion } from 'framer-motion'

const stats = [
  { id: 's1', name: '100%', disc: 'number of distributors', col: 1, row: 1 },
  { id: 's2', name: '12', disc: 'Month of service', col: 2, row: 1 },
  {
    id: 's3',
    name: '44000',
    disc: 'production capacity bottles per hour',
    col: 3,
    row: 1,
  },
]

function Stat() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.2,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`w-[80vw] mx-auto justify-center grid grid-cols-3 grid-rows-1`}
    >
      {stats.map((stat) => {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              type: 'spring',
              bounce: 0.4,
            }}
            key={stat.id}
            className={`justify-self-center col-start-${stat.col} col-span-1 row-start-${stat.row} row-span-1 grid grid-cols-1 grid-rows-2`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                type: 'spring',
                bounce: 0.4,
              }}
              className={`justify-self-center col-start-1 col-span-1 row-start-1 row-span-1`}
            >
              <h1
                className={`text-[85px] text-center font-roboto-n900 font-bold bg-gradient-to-r from-[#1A2980] to-[#26D0CE] inline-block text-transparent bg-clip-text `}
              >
                {stat.name}
              </h1>
            </motion.div>
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
              className={`justify-self-center w-[343px] col-start-1 col-span-1 row-start-2 row-span-1`}
            >
              <p
                className={`text-[32px] text-[#7E7E7E] text-center font-roboto`}
              >
                {stat.disc}
              </p>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.section>
  )
}

export default Stat
