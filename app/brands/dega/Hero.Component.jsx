'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

const style = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(rgb(28, 10, 0, 0.2), rgb(28, 10, 0, 0.2)), url('/images/Brand/Dega/DegaHero.png')`,
}

function DegaHero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.2,
        type: 'spring',
        bounce: 0.4,
      }}
      style={style}
      className={`w-screen h-[95vh] grid grid-cols-1 grid-rows-[0.5fr_1fr]`}
    >
      <motion.figure
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.4,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`row-start-1 row-span-1 justify-self-center self-end w-[281px] h-[104px]`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaLogo.png`}
          alt={`Dega Water Logo`}
          className={`w-full h-full object-contain`}
        />
      </motion.figure>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`col-start-1 col-span-1 row-start-2 row-span-1 justify-self-center self-start md:w-[571.4px] md:h-[351px] grid grid-cols-1 grid-rows-[min-content_min-content_min_content_min-content]`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            type: 'spring',
            bounce: 0.4,
          }}
          className={` row-start-1 row-span-1 justify-self-center self-end`}
        >
          <h1
            className={`uppercase text-white text-[110px] text-center font-oswald-n700 font-bold`}
          >
            Dega
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`row-start-2 row-span-1 justify-self-center md:w-[571.4px] md:h-[46.94px]`}
        >
          <p
            className={`text-white text-[20px] font-roboto leading-[23.44px] text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`row-start-3 row-span-1 justify-self-center md:w-[218.35px] md:h-[52.04px] border-solid border-[3px] border-amber-500 grid transition-d hover:rounded-md`}
        >
          <button
            className={`capitalize text-white text-[23px] font-roboto-n700 text-center`}
          >
            learn more
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default DegaHero
