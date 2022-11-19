'use client'

import { useState } from 'react'

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
      className={`h-[115vh] align-bottom bg-cover bg-center bg-no-repeat col-start-1 col-end-13 grid grid-cols-[minmax(min-content,_0.7fr)] justify-center grid-rows-[1.3fr_repeat(2,_0.6fr)_1fr]`}
    >
      <h1 className="mt-56 row-start-1 align-end row-end-2 self-end justify-self-center font-oswald-n700 text-white text-center lg:w-[764px] lg:h-[132px] text-4xl md:text-7xl lg:text-[90px]">
        <span className="text-[#EEBC43] md:font-lato-n900">BNT</span> Beverages
      </h1>
      <p className="justify-self-center self-start text-center lg:w-[560px] lg:h-[46px] leading-[23.44px] text-white text-sm sm:text-base md:text-[20px] font-roboto ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis id nisi.
      </p>
      <Button
        to={1}
        link="/about"
        className="border-[#FFC107] border-[3px] text-white p-1 text-[23px] w-[214px] h-[51px] text-center align-middle font-roboto-n700 justify-self-center self-end capitalize hover:scale-95 hover:shadow-lg"
        title="Learn More"
      />
      <Scroll
        handleScroll={handleScroll}
        className="hover:cursor-pointer sm:p-2 sm:m-1"
      />
    </header>
  )
}

export default Header
