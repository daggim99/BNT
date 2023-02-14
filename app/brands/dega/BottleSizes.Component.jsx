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
      className={`h-[849px] w-[809px] col-start-2 col-span-1 row-start-1 row-span-1 grid grid-cols-1 grid-rows-1`}
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
        className={`justify-self-center self-center w-full h-full col-start-1 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaGroupBottle.png`}
          alt={`Dega Bottles`}
          className={`w-full h-full object-center object-contain`}
        />
      </motion.figure>
    </motion.article>
  )
}

export default BottleSizes
