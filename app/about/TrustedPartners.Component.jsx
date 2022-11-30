'use client'

import { motion } from 'framer-motion'

const TrustedPartners = () => {
  return (
    <section
      className={`overflow-x-clip row-start-3 md:row-start-2 col-span-full h-[12vh] md:h-[9vh] grid grid-cols-1 grid-rows-1`}
    >
      <div className={`justify-self-center self-start md:self-end w-[538px]`}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`font-roboto-n500 font-bold text-[#525252] text-center text-[30px] md:text-[48px] leading-[56.25px]`}
        >
          Trusted Partners
        </motion.h1>
      </div>
    </section>
  )
}

export default TrustedPartners
