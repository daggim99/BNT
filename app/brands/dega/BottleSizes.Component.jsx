'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

function BottleSizes() {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`h-[849px] w-[809px] col-start-2 col-span-1 row-start-1 row-span-1 grid grid-cols-4 grid-rows-1`}
    >
      <motion.figure
        initial={{ opacity: 0, scale: 1, x: 32 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-end self-center w-[102px] h-[349px] col-start-1 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Small Bottle`}
          className={`w-full h-full object-center object-contain`}
        />
      </motion.figure>
      <motion.figure
        initial={{ opacity: 0, scale: 1, x: 32 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.6,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-center self-center w-[156px] h-[549px] col-start-2 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Medium Bottle`}
          className={`w-full h-full object-center object-contain`}
        />
      </motion.figure>
      <motion.figure
        initial={{ opacity: 0, scale: 1, x: 32 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.7,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-center self-center w-[194px] h-[715px] col-start-3 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Big Bottle`}
          className={`w-full h-full object-center object-contain`}
        />
      </motion.figure>
      <motion.figure
        initial={{ opacity: 0, scale: 1, x: 32 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.8,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-center self-center w-[240px] h-[849px] col-start-4 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Huge Bottle`}
          className={`w-full h-full object-center object-contain`}
        />
      </motion.figure>
    </motion.article>
  )
}

export default BottleSizes
