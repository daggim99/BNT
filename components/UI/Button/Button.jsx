'use client'

import { useState } from 'react'

import Link from 'next/link'

import { navigation } from '../../layout/Navbar/Navbar'

const Button = (props) => {
  const { className, title, link, to } = props

  const [active, setActive] = useState(navigation)

  const handleActiveLink = (i) => {
    active.forEach((element) => (element.current = false))

    const activeLinkIndex = active.findIndex((element) => element.index === i)

    active[activeLinkIndex].current = true
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
