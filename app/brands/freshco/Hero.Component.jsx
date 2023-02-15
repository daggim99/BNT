'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import React from 'react'

function FreshcoHero() {
  const style = {
    backgroundImage: `url('/images/Brand/Freshco/background/backgroundLeft.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  const style2 = {
    backgroundImage: `url('/images/Brand/Freshco/background/backgroundRight.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`grid grid-cols-[1fr_1fr] grid-rows-1`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          type: 'spring',
          bounce: 0.4,
        }}
        style={style}
        className={`pl-[120px] pt-[140px] col-start-1 col-span-1 grid grid-cols-1 grid-rows-1`}
      >
        <div
          className={`self-start col-span-1 row-span-1 grid grid-cols-1 grid-rows-[min-content-min-content-min-content-min-content]`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 120 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`w-[330px] self-end row-start-1 col-span-1`}
          >
            <h2
              style={{ fontFamily: 'austria' }}
              className={`text-[48px] text-[#925A25] text-left`}
            >
              Drink Natural
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 120 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`font-roboto-n900 font-bold text-[75px] text-[#131313] row-start-2 col-span-1 w-[496px] grid grid-cols-1 grid-rows-[min-content_min-content]`}
          >
            <h1
              className={`col-start-1 col-span-1 row-start-1 row-span-1 self-end`}
            >
              Feel-Good
            </h1>
            <h1
              className={`col-start-1 col-span-1 row-start-2 row-span-1 self-start`}
            >
              Do-Good
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 120 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`row-start-3 col-span-1 w-[662px] self-start`}
          >
            <p className={`font-roboto-n300 text-[24px] text-[#121212] `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.9, x: -120 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`row-start-4 col-span-1 w-[319px] h-[164.97px] self-start`}
          >
            <Image
              width={100}
              height={100}
              src={`/images/Brand/Freshco/freshco.png`}
              alt="Freshco Logo"
              className={`w-full h-full object-cover object-center`}
            />
          </motion.figure>
        </div>
      </motion.div>
      <div style={style2} className={`pt-[68px] col-start-2 col-span-1`}>
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
          className={`w-[529px] h-[838px]`}
        >
          <Image
            width={100}
            height={100}
            src={`/images/Brand/Freshco/Pics/freshcoJuice.png`}
            alt={`Freshco Juice`}
            className={`object-contain w-full h-full`}
          />
        </motion.figure>
      </div>
    </motion.section>
  )
}
export default FreshcoHero
