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
    backgroundImage: `linear-gradient(rgb(28, 10, 0, 0.7), rgb(28, 10, 0, 0.7)), url('/images/home/scroll-1${scroll}.jpg')`,
  }

  return (
    <header
      style={backgroundImage}
      className={`h-screen align-bottom bg-cover bg-center bg-no-repeat col-start-1 col-end-13 grid grid-cols-[minmax(min-content,_0.7fr)] justify-center grid-rows-[1.3fr_repeat(2,_minmax(0.3fr,_0.6fr))_1fr] gap-1`}
    >
      <h1 className="mt-44 row-start-1 row-end-2 self-end justify-self-center font-montserrat-n600 text-white text-center text-4xl sm:text-5xl md:text-6xl md:font-montserrat-n700 lg:text-7xl">
        <span className="text-amber-500 md:font-montserrat-n700">BGN</span>{' '}
        Beverages
      </h1>
      <p className="justify-self-center self-center text-center text-white text-lg md:text-xl font-raleway-n500 py-2 px-12">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <Button
        to={1}
        link="/about"
        className="border-amber-500 text-white justify-self-center self-center uppercase hover:scale-95 hover:shadow-lg md:text-lg lg:py-1 lg:px-6 my-2"
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
