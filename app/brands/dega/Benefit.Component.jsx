'use client'

import { motion } from 'framer-motion'

const Benefit = () => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 1, x: '-14vw' }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`mb-12 grid grid-cols-1 grid-rows-2`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1, x: '-14vw' }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.4,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`row-start-1 row-span-1`}
      >
        <h1
          className={`text-black text-[64px] text-center font-roboto-n900 font-bold`}
        >
          Benefits of <span className={`text-[#2497EA]`}>Dega</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1, x: '-14vw' }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-center lg:w-[944px] row-start-2 row-span-1`}
      >
        <p className={`text-[28px] text-[#666666] font-roboto text-center`}>
          Bottled at the source from the cold, water-rich, heavenly and
          Naturally Bountiful Highlands (DEGA) of Debreberhan, Ethiopia.
        </p>
      </motion.div>
    </motion.article>
  )
}

export default Benefit
