import React, { useState } from 'react'

import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

import { navigationActions } from '../../../store/slices/navigation.slice'
import Logo from '../Logo/Logo'

// import { navigation } from '../Navbar/Navbar'

const FooterNav = () => {
  // const [active, setActive] = useState(navigation)
  const navigation = useSelector((state) => state.navigation)
  const dispatch = useDispatch()

  const handleActiveLink = (to) => {
    dispatch(navigationActions.navigate(to))
  }

  return (
    <nav
      className={`self-end text-white md:w-[80vw] md:m-auto h-[12vh] transition-d bg-[#4A171E] transition-d hover:bg-gradient-to-t col-start-1 col-end-3 row-start-1 row-end-2 grid grid-cols-1 grid-rows-[1fr_0.3fr] md:grid-cols-[minmax(60px,_0.15fr)_1fr] md:grid-rows-[12vh]`}
    >
      <Logo />
      <div className="md:pb-3 justify-self-center md:justify-self-end md:self-end col-start-1 md:col-start-2 col-span-full md:col-end-3 row-start-2 row-span-1 md:row-start-1 md:row-end-2 grid grid-cols-4 gap-4 m-auto md:m-0 lg:ml-72 md:mr-14 lg:mr-20">
        {navigation.map((l, index) => {
          const { name, current, href } = l
          return (
            <Link
              href={href}
              key={name}
              onClick={(e) => handleActiveLink(index)}
              className={`text-xs sm:text-sm md:text-base ${
                current ? `font-roboto text-white` : ``
              } transition-d font-roboto-n500 font-bold w-full h-full self-center text-center justify-self-center hover:cursor-pointer hover:text-amber-500`}
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default FooterNav
