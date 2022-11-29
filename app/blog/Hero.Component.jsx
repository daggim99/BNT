'use client'

import { motion } from 'framer-motion'

const BlogHero = () => {
  const style = {
    backgroundImage: `linear-gradient(to bottom, #E5B957D9,  #E5B957D9), url('/images/About/hero-pattern-1n2.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  return (
    <section className="h-[65vh] grid grid-cols-[1fr_1fr] grid-rows-1">
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-1 col-span-1 row-start-1 row-end-2"
      />
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-2 col-span-1 row-start-1 row-end-2"
      />
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
          className="uppercase justify-self-center lg:w-[600px] align-middle leading-[110.4px] font-roboto-n700 font-bold text-4xl md:text-6xl lg:text-[92px] text-white text-center"
        >
          News Feed
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
          className="justify-self-center lg:w-[747px] md:leading-[37.5px] font-roboto-n700 text-base md:text-lg lg:text-[32px] text-center text-[#FFFFFF]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo moll.{' '}
        </motion.p>
      </div>
    </section>
  )
}

export default BlogHero
