'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

import Button from '../../UI/Button/Button'
import Scroll from '../UI/Scroll/Scroll'

const Header = () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = (index) => {
    setScroll((prev) => index)
  }

  const backgroundImage = {
    backgroundImage: `linear-gradient(rgb(28, 10, 0, 0.5), rgb(28, 10, 0, 0.5)), url('/images/home/scroll-1${scroll}.jpg')`,
  }

  return (
    <header
      style={backgroundImage}
      className={`h-[115vh] align-bottom bg-cover bg-center bg-no-repeat col-start-1 col-end-13 grid grid-cols-[minmax(min-content,_0.7fr)] justify-center grid-rows-[2fr_repeat(2,_0.3fr)_1fr] gap-y-9`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`row-start-1 row-span-1 align-end row-end-2 self-end justify-self-center lg:w-[764px]`}
      >
        <h1 className="font-oswald-n700 text-white text-center font-bold text-4xl md:text-7xl lg:text-[100px]">
          <span className="text-[#EEBC43] md:font-lato-n900">BNT</span>{' '}
          Beverages
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className={`row-start-2 row-span-1 self-start justify-self-center text-center lg:w-[560px] pb-9`}
      >
        <p className="leading-[23.44px] text-white text-sm sm:text-base md:text-[20px] font-roboto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis id nisi.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 360, scale: 0 }}
        transition={{ type: 'spring', bounce: 0.3, duration: 1.2 }}
        animate={{
          opacity: [0.3, 0.6, 0.9, 1],
          rotate: 0,
          scale: 1,
        }}
        className={`row-start-3 row-span-1 justify-self-center self-center `}
      >
        <Button
          to={1}
          link="/about"
          className="border-[#FFC107] px-9 py-2 border-[3px] text-white p-1 text-[23px] w-[214px] text-center align-middle font-roboto-n700 capitalize hover:scale-95 hover:shadow-lg"
          title="Learn More"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ type: 'spring', bounce: 0.6, duration: 1.2 }}
        animate={{
          opacity: [0.3, 0.6, 0.9, 1],
          opacity: 1,
          scale: 1,
        }}
        className={`row-start-4 row-span-1 justify-self-center self-end mb-6 `}
      >
        <Scroll
          handleScroll={handleScroll}
          className="hover:cursor-pointer sm:p-2 sm:m-1"
        />
      </motion.div>
    </header>
  )
}

export default Header
