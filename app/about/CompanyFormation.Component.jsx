'use client'

import { motion } from 'framer-motion'

const CompanyFormation = () => {
  return (
    <section
      className={`px-12 md:px-0 pt-16 md:mt-0 h-[65vh] md:h-[75vh] grid grid-cols-1 grid-rows-[min-content_min-content_min-content] md:grid-rows-3 gap-y-9 md:gap-y-0`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`justify-self-center self-end lg:w-[912px] lg:h-[80px]`}
      >
        <h2
          className={`justify-self-center self-end text-center font-lato-n900 font-bold text-4xl md:text-6xl lg:text-[67px] leading-[80.4px] text-[#525252]`}
        >
          Company Formation
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`row-start-2 row-span-1 justify-self-center self-end text-center lg:w-[940px]`}
      >
        <p
          className={`text-[#BCBCBC] font-roboto text-center lg:leading-[34.84px] lg:text-[20px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`row-start-3 row-span-1 justify-self-center self-end text-center lg:w-[718px]`}
      >
        <p
          className={`text-[#BCBCBC] font-roboto text-center lg:leading-[34.84px] lg:text-[20px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
        </p>
      </motion.div>
    </section>
  )
}

export default CompanyFormation
