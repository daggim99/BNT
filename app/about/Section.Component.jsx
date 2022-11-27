'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'

import Button from '/components/UI/Button/Button'
const Section = (props) => {
  const { left, title } = props

  return (
    <section className="md:mt-3 overflow-scroll lg:overflow-clip h-[60vh] md:h-[60vh] rounded-none w-full overflow-scroll md:overflow-visible m-0 md:w-[80vw] md:m-auto grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] md:grid-rows-1 gap-y-24 md:gap-y-0 gap-x-12">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 14 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, type: 'spring', bounce: 0.4 }}
        className={`self-stretch col-span-full md:col-span-1 row-span-full md:row-start-1 md:row-span-1 md:col-start-${
          left ? '2' : '1'
        } w-full h-full block col-span-1 row-span-full`}
      >
        <Image
          width={100}
          height={100}
          src={'/images/About/imageHigh.png'}
          alt={'image'}
          className="w-full object-contain h-full"
        />
      </motion.div>
      <div
        className={`col-start-1 col-span-full md:col-start-${
          left ? '1' : '2'
        } self-center col-span-1 row-span-full grid grid-cols-[1fr] grid-rows-[min-content_min-content_min-content] gap-y-3`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 14 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`w-[575px]`}
        >
          <h1 className="font-lato-n900 text-[#525252] px-9 md:px-0 text-[30px] md:text-[45px] lg:text-[67px] leading-[80.4px] font-bold">
            {title}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 14 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`w-[608px]`}
        >
          <p
            className={`text-[#6D6D6D] px-6 md:py-6 lg:py-8 xl:py-9 2xl:py:10 md:px-0 text-base md:text-[20px] font-roboto leading-[34.84px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis. a id nisi.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 14 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`px-9 md:px-0 self-center`}
        >
          <Button
            className={`md:w-[198.27px] px-9 py-1 md:px-0 md:py-0 md:h-[57.96px] border-[#4A171E] border-[3px] text-[#4A171E] text-[18px] md:text-[25px] font-roboto-n500 capitalize`}
            title="Contact Us"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Section
