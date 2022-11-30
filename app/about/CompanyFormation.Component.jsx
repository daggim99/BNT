'use client'

import { motion } from 'framer-motion'

const CompanyFormation = () => {
  return (
    <section
      className={`pt-12 pb-11 sm:pb-9 md:pb-6 lg:pb-3 xl:pb-2 2xl:pb:1 overflow-scroll md:overflow-clip px-12 md:px-0 md:mt-0 h-[50vh] sm:h-[40vh] xl:h-[40vh] 2xl:h-[25vh]  grid grid-cols-1 grid-rows-[min-content_min-content] md:gap-6`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`justify-self-center self-center lg:w-[912px] lg:h-[80px] pb-9 `}
      >
        <h2
          className={`justify-self-center self-end text-center font-lato-n900 font-bold  text-[23px] md:text-6xl lg:text-[67px] leading-9 md:leading-[80.4px] text-[#525252]`}
        >
          Company Formation
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`overflow-x-clip row-start-2 row-span-1 justify-self-center self-start text-center lg:w-[940px]`}
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
