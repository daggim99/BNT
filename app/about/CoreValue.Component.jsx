'use client'

import { motion } from 'framer-motion'

const CoreValues = () => {
  return (
    <section className={`mt-12 w-[85vw] m-auto grid grid-cols-1 grid-rows-2`}>
      <div
        className={`row-start-1 row-span-1 self-center justify-self-center w-[500px]`}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0, type: 'spring', bounce: 0.4 }}
          className={`text-[67px] font-lato-i900 font-bold text-[#525252] text-center capitalize`}
        >
          Core value
        </motion.h2>
      </div>
      <div
        className={`row-start-2 row-span-1 self-center justify-self-center grid grid-cols-3 grid-rows-1 gap-x-16`}
      >
        <div
          className={`col-start-1 col-span-1 justify-self-center self-center max-w-[454px]`}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`font-roboto text-[20px] text-[#6D6D6D] leading-[34.84px] text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </motion.p>
        </div>
        <div
          className={`col-start-2 col-span-1 justify-self-center self-center max-w-[454px] `}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`font-roboto text-[20px] text-[#6D6D6D] leading-[34.84px] text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </motion.p>
        </div>
        <div
          className={`col-start-3 col-span-1 justify-self-center self-center max-w-[454px] `}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`font-roboto text-[20px] text-[#6D6D6D] leading-[34.84px] text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default CoreValues
