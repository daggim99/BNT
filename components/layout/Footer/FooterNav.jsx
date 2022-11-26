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
      className={`text-white h-[12vh] transition-d bg-[#4A171E] transition-d hover:bg-gradient-to-t col-start-1 col-end-3 row-start-1 row-end-2 grid grid-cols-1 grid-rows-2 md:grid-cols-[minmax(60px,_0.15fr)_1fr] md:grid-rows-[12vh]`}
    >
      <Logo />
      <div className="justify-self-center md:justify-self-end self-center col-start-1 md:col-start-2 col-span-full md:col-end-3 row-start-2 row-span-1 md:row-start-1 md:row-end-2 grid grid-cols-4 gap-4 m-auto lg:ml-72 md:mr-14 lg:mr-20">
        {navigation.map((l, index) => {
          const { name, current, href } = l
          return (
            <Link
              href={href}
              key={name}
              onClick={(e) => handleActiveLink(index)}
              className={`text-xs md:text-[24px]  ${
                current ? `font-roboto text-amber-500` : ``
              } font-roboto-n500 font-bold w-full h-full pt-3 text-lg self-center text-center justify-self-center hover:cursor-pointer hover:scale-95 hover:border-b-4 pb-6 hover:border-amber-400`}
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
