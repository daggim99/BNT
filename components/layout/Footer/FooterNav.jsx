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
      className={`text-white h-[9vh] transition-d bg-[#4A171E] transition-d hover:bg-gradient-to-t col-start-1 col-end-3 row-start-1 row-end-2 grid grid-cols-[minmax(40px,_0.12fr)_1fr] grid-rows-[9vh]`}
    >
      <Logo />
      <div className="justify-self-end col-start-2 col-end-3 row-start-1 row-end-2 grid grid-cols-4 gap-4 mr-4 ml-3  lg:ml-72">
        {navigation.map((l, index) => {
          const { name, current, href } = l
          return (
            <Link
              href={href}
              key={name}
              onClick={(e) => handleActiveLink(index)}
              className={`text-xs sm:text-sm ${
                current ? `font-montserrat-n600 text-amber-500` : ``
              } font-montserrat-n500 pt-3 text-lg self-center justify-self-center hover:cursor-pointer hover:scale-95 hover:border-b-4 pb-6 hover:border-amber-400`}
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
