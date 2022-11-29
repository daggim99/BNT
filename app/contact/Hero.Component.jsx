'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import Button from '/components/UI/Button/Button'

const ContactHero = () => {
  const style = {
    backgroundImage: `linear-gradient(to bottom, rgba(255, 241, 201, 1),  rgba(255, 236, 177, 0.9)), url('/images/About/hero-pattern-1n2.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  return (
    <section className="h-[85vh] grid grid-cols-[1fr_1fr] grid-rows-1">
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-1 col-span-1 row-start-1 row-end-2"
      />
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-2 col-span-1 row-start-1 row-end-2"
      />
      <div
        className={`col-span-full row-span-full grid grid-cols-1 md:grid-cols-[1fr_0.75fr] grid-rows-1`}
      >
        <div className="col-start-1 col-span-1 lg:mt-12 justify-self-center self-center row-start-1 row-end-2 grid grid-cols-1 grid-rows-3">
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
            className="capitalize justify-self-start lg:w-[600px] align-middle leading-[110.4px] font-lato-n800 font-bold text-4xl md:text-6xl lg:text-[92px] text-black text-center md:text-left"
          >
            Let’s Talk
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
            className="justify-self-center lg:w-[663px] md:leading-[34.84px] font-roboto-n400 text-base md:text-lg lg:text-[20px] text-center text-black md:text-left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </motion.p>
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
            className={`px-9 md:px-0 self-center`}
          >
            <Button
              className={`md:w-[198.27px] px-9 py-1 md:px-0 md:py-0 md:h-[57.96px] border-[#4A171E] border-[3px] text-[#4A171E] text-[18px] md:text-[25px] font-roboto-n500 capitalize`}
              title="Contact Us"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.99, x: 333 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`hidden md:block md:col-start-2 md:col-span-1 w-full h-full`}
        >
          <Image
            src={`/images/contact/hero.png`}
            alt={`contact hero image`}
            width={100}
            height={100}
            className={`w-full h-full object-contain`}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
