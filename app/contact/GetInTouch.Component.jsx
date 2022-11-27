'use client'

import { motion } from 'framer-motion'

import Office from './Office.Component'

const GetInTouch = () => {
  return (
    <section className={`md:pt-24 w-full grid grid-cols-1 grid-rows-3 gap-y-3`}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.4,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`row-start-1 row-span-1 justify-self-center self-end`}
      >
        <h2
          className={`text-[67px] text-[#525252] text-center font-lato-n800 font-bold`}
        >
          Get In Touch With Us
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.7,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`w-[940px] row-start-2 row-span-1 justify-self-center self-center`}
      >
        <p className={`text-[24px] text-#BCBCBC] text-center font-roboto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
        </p>
      </motion.div>
      <div className={`row-start-3 row-span-1 justify-self-center self-start`}>
        <Office />
      </div>
    </section>
  )
}

export default GetInTouch
