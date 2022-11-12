'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

import { navigationActions } from '../../../store/slices/navigation.slice'

// import { navigation } from '../../layout/Navbar/Navbar'

const Button = (props) => {
  const { className, title, link, to } = props

  // const [active, setActive] = useState(navigation)
  const navigation = useSelector((state) => state.navigation)
  const dispatch = useDispatch()

  const handleActiveLink = (to) => {
    dispatch(navigationActions.navigate(to))
  }

  if (link)
    return (
      <Link
        href={link}
        onClick={(e) => handleActiveLink(to)}
        className={`uppercase text-center border-2 transition-d hover:scale-95 shadow-md hover:shadow-xl hover:rounded-md ${className}`}
      >
        {title}
      </Link>
    )

  return (
    <button
      className={`uppercase text-center border-2 transition-d hover:scale-95 shadow-md hover:shadow-xl hover:rounded-md ${className}`}
    >
      {title}
    </button>
  )
}

export default Button
