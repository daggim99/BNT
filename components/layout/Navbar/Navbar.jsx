'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export const navigation = [
  { name: 'Home', href: '/', current: true, index: 0 },
  { name: 'About', href: '/about', current: false, index: 1 },
  { name: 'Blog', href: '/blog', current: false, index: 2 },
  { name: 'Contact Us', href: '/contact', current: false, index: 3 },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(index) {
  const [active, setActive] = useState(navigation)

  const router = useRouter()
  const handleActiveLink = (i) => {
    active.forEach((element) => (element.current = false))

    const activeLinkIndex = active.findIndex((element) => element.index === i)

    active[activeLinkIndex].current = true
  }

  return (
    <Disclosure
      as="nav"
      className="opacity-80 hover:opacity-90 z-50 absolute top-[5%] w-screen col-start-1 col-end-13 bg-transparent"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 border-white border-2 text-white text-3xl hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center sm:justify-between w-screen m-0">
                <figure className="transition-d justify-self-center hover:invert hover:drop-shadow-[12px_12px_16px_red] hover:scale-105">
                  <Link href="/" className="block lg:hidden">
                    <Image
                      width="70"
                      height="70"
                      className="p-0"
                      src="/images/Logo/Logo.svg"
                      alt="Your Company"
                    />
                  </Link>
                  <Link
                    href="/"
                    onClick={(e) => handleActiveLink(0)}
                    className="hidden lg:block"
                  >
                    <Image
                      width="140"
                      height="140"
                      src="/images/Logo/Logo.svg"
                      alt="Your Company"
                    />
                  </Link>
                </figure>
                <div className="hidden sm:ml-6 sm:block items-stretch justify-self-end">
                  <div className="flex space-x-4">
                    {navigation.map((item, inx) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        onClick={(e) => handleActiveLink(inx)}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white font-montserrat-n600 text-xl'
                            : 'text-gray-300 font-montserrat-n500 text-xl hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 text-white">
              {navigation.map((item, inx) => (
                <Disclosure.Button
                  as="Link"
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleActiveLink(inx)}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-white hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
