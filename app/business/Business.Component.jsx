'use client'

import { motion } from 'framer-motion'

const BusinessSection = () => {
  return (
    <section className="h-[450px] grid grid-cols-[1fr_1fr] grid-rows-1">
      <div className="lg:mt-12 col-span-full justify-self-center self-center row-start-1 row-end-2 grid grid-cols-1 grid-rows-2 lg:gap-y-6">
        <motion.h1
          initial={{ opacity: 0, scale: 1.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
          }}
          className="overflow-x-clip justify-self-center align-middle leading-[110.4px] font-lato-n900 font-bold text-4xl md:text-6xl lg:text-[88px] text-[#525252] text-center"
        >
          Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 1.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            type: 'spring',
            bounce: 0.4,
          }}
          className="justify-self-center lg:w-[861px] md:leading-[34.84px] lg:leading-[28.13px] text-base md:text-lg lg:text-[24px] font-roboto text-center text-[#000000]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.{' '}
        </motion.p>
      </div>
    </section>
  )
}

export default BusinessSection
