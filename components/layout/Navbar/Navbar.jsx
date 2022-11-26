'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'

import { navigationActions } from '../../../store/slices/navigation.slice'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(index) {
  const navigation = useSelector((state) => state.navigation)
  const dispatch = useDispatch()

  const handleNavigation = (to) => {
    localStorage.setItem('to', JSON.stringify(to))
    const saved = localStorage.getItem('to')
    const savedInt = parseInt(saved)
    dispatch(navigationActions.navigate(savedInt))
  }

  return (
    <Disclosure
      as="nav"
      className="opacity-80 hover:opacity-90 z-50 absolute top-[5%] w-screen col-start-1 col-end-13 bg-transparent"
    >
      {({ open }) => (
        <>
          <div className="">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-self-start justify-start sm:justify-between w-screen m-0">
                <figure className="transition-d justify-self-start hover:invert hover:drop-shadow-[12px_12px_16px_red] hover:scale-105 md:ml-14 lg:ml-20">
                  <Link href="/" className="block lg:hidden">
                    <Image
                      width="100"
                      height="100"
                      className="p-0"
                      src="/images/Logo/BNTLogo.svg"
                      alt="Your Company"
                    />
                  </Link>
                  <Link
                    href="/"
                    onClick={(e) => handleActiveLink(0)}
                    className="hidden lg:block"
                  >
                    <Image
                      width="100"
                      height="100"
                      src="/images/Logo/BNTLogo.svg"
                      alt="Your Company"
                    />
                  </Link>
                </figure>
                <div className="hidden sm:block items-stretch justify-self-end self-center md:mr-14 lg:mr-20 ">
                  <div className="flex space-x-4">
                    {navigation.map((item, inx) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        onClick={(e) => handleNavigation(inx)}
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
              <div>
                {navigation.map((item, inx) => (
                  <Link key={item.name} href={item.href}>
                    <Disclosure.Button
                      as="a"
                      onClick={(e) => handleNavigation(inx)}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
