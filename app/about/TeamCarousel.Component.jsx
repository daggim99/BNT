'use client'

import { motion } from 'framer-motion'

const TeamCarousel = (props) => {
  const { firstName, jobPosition } = props

  return (
    <section className={`grid grid-cols-2 grid-rows-2 mb-6`}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, type: 'spring', bounce: 0.4 }}
        className={`justify-self-center self-center col-start-1 col-end-2 row-span-full w-[99px] h-[99px] md:w-[188.88px] md:h-[188.88px] rounded-full border-none bg-[#D9D9D9]`}
      ></motion.div>
      <div
        className={`self-center col-start-2 col-end-3 row-span-full gird grid-cols-1 grid-rows-2`}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`row-start-1 row-end-2 text-[#000000] text-[30px] md:text-[40px] leading-[40px] font-lato-n700`}
        >
          {firstName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.9,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`row-start-2 row-span-1 font-roboto-n300 text-[#757575] text-[18px] md:text-[30px]`}
        >
          {jobPosition}
        </motion.p>
      </div>
    </section>
  )
}

export default TeamCarousel
