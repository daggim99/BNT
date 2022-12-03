'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

const CoreValues = () => {
  return (
    <section
      className={`overflow-x-clip mt-9 w-[85vw] overflow-scroll md:overflow-clip m-auto grid grid-cols-1 grid-rows-[min-content_1fr]`}
    >
      <div
        className={`row-start-1 row-span-1 md:self-center md:justify-self-center md:w-[500px]`}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0, type: 'spring', bounce: 0.4 }}
          className={`py-9 text-[30px] md:text-[67px] font-lato-i900 font-bold text-[#525252] text-center capitalize`}
        >
          Core value
        </motion.h2>
      </div>
      <div
        className={`row-start-2 row-span-1 self-center justify-self-center grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-y-14 md:gap-y-0 md:gap-x-16`}
      >
        <div
          className={`row-start-1 row-span-1 md:col-start-1 col-span-1 justify-self-center self-center max-w-[454px] grid grid-cols-1 grid-rows-[min-content_min-content] lg:grid-rows-[105px_172px] gap-y-9`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 105 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`justify-self-center self-center row-start-1 row-span-1`}
          >
            <figure className={`w-[106px] h-[105px]`}>
              <Image
                width={100}
                height={100}
                src={`/images/About/hand-icon.png`}
                alt={`hand-icon`}
                className={`w-full h-full object-contain`}
              />
            </figure>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`row-start-2 row-span-1 font-roboto text-[16px] md:text-[20px] text-[#6D6D6D] leading-[34.84px] text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </motion.p>
        </div>
        <div
          className={`row-start-2 md:row-start-1 row-span-1 md:col-start-2 col-span-1 justify-self-center self-center max-w-[454px] grid grid-rows-[min-content_min-content] lg:grid-rows-[105px_172px] gap-y-9`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 105 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.8,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`justify-self-center self-center row-start-1 row-span-1`}
          >
            <figure className={`w-[106px] h-[105px]`}>
              <Image
                width={100}
                height={100}
                src={`/images/About/database-icon.png`}
                alt={`hand-icon`}
                className={`w-full h-full object-contain`}
              />
            </figure>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`row-start-2 row-span-1 font-roboto text-[16px] md:text-[20px] text-[#6D6D6D] leading-[34.84px] text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </motion.p>
        </div>
        <div
          className={`row-start-3 md:row-start-1 row-span-1 md:col-start-3 col-span-1 justify-self-center self-center max-w-[454px] grid grid-rows-[min-content_min-content] lg:grid-rows-[105px_172px] gap-y-9`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 105 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 1.1,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`justify-self-center self-center row-start-1 row-span-1`}
          >
            <figure className={`w-[106px] h-[105px]`}>
              <Image
                width={100}
                height={100}
                src={`/images/About/text-icon.png`}
                alt={`hand-icon`}
                className={`w-full h-full object-contain`}
              />
            </figure>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`row-start-2 row-span-1 font-roboto text-[16px] md:text-[20px] text-[#6D6D6D] leading-[34.84px] text-center`}
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
