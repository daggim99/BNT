'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'

import Button from '/components/UI/Button/Button'

const Section = (props) => {
  const { left, title } = props

  return (
    <section className="lg:my-16 overflow-x-hidden lg:overflow-clip h-[70vh] md:h-[60vh] lg:h-[377px] rounded-none w-full overflow-scroll md:overflow-visible m-0 md:w-[80vw] md:m-auto grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] md:grid-rows-[377px] gap-y-24 md:gap-y-0 gap-x-12">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 14 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, type: 'spring', bounce: 0.4 }}
        className={`self-start col-span-full md:col-span-1 row-span-full md:row-start-1 md:row-span-1 md:col-start-${
          left ? '2' : '1'
        } w-full h-full block col-span-1 row-span-full`}
      >
        <Image
          width={100}
          height={100}
          src={'/images/About/imageHigh.png'}
          alt={'image'}
          className={`${
            left ? 'lg:object-right' : 'lg:object-left'
          } w-full object-cover filter brightness-50 md:brightness-100 -z-50 object-center md:object-contain h-full`}
        />
      </motion.div>
      <div
        className={`col-start-1 col-span-full md:col-start-${
          left ? '1' : '2'
        } filter brightness-200 self-center col-span-1 row-span-full grid grid-cols-[1fr] grid-rows-[81px_172px_59.96px] gap-y-3`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 14 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`w-full md:w-[575px]`}
        >
          <h1 className="font-lato-n900 text-[#525252] px-9 md:px-0 text-[40px] md:text-[45px] lg:text-[67px] leading-[80.4px] font-bold">
            {title}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 14 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`w-full md:w-[608px]`}
        >
          <p
            className={`text-[#6D6D6D] md:px-0 text-[18px] md:text-[20px] font-roboto leading-[34.84px]`}
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
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`pt-12 md:pt-0 px-9 md:px-0 self-center`}
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
