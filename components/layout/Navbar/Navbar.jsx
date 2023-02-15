'use client'

import { Fragment, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'

import { navigationActions } from '../../../store/slices/navigation.slice'

import NavHover from './Hover.Component'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(index) {
  const [isBlogHovering, setIsBlogHovering] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const handleBlogMouseOver = () => {
    setIsBlogHovering(true)
  }

  const handleBlogMouseOut = () => {
    setIsBlogHovering(false)
  }
  const handleMouseOver = (index) => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const pathName = usePathname()

  const color = `${
    pathName === '/brands/freshco'
      ? 'bg-white bg-opacity-75 drop-shadow-lg shadow-lg py-3'
      : 'bg-transparent top-[5%]'
  }`

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
      key={navigation}
      as="nav"
      className={`z-[5000] absolute w-screen col-start-1 col-end-13 ${color}`}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-self-center md:justify-self-start justify-center md:justify-start sm:justify-between w-screen m-0">
                <figure className="transition-d justify-self-center md:justify-self-start md:ml-14 lg:ml-20">
                  <Link href="/" className="block lg:hidden">
                    <Image
                      width="90"
                      height="90"
                      className="p-0"
                      src="/images/Logo/BNTLogo.svg"
                      alt="Your Company"
                    />
                  </Link>
                  <Link
                    href="/"
                    onClick={(e) => handleNavigation(0)}
                    className="hidden lg:block justify-self-center"
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
                  <div className="grid grid-cols-[repeat(7,_104px)] grid-rows-[min-content_31px_31px_31px] gap-y-[0.15rem] gap-x-12">
                    {navigation.map((item, inx) =>
                      item.top ? (
                        item.blog ? (
                          <Link
                            href={`/blog`}
                            onMouseOver={handleBlogMouseOver}
                            onMouseOut={handleBlogMouseOut}
                            key={item.id}
                            className={classNames(
                              item.current
                                ? 'font-roboto text-amber-500 border-b-[1px] pb-1 border-amber-500 text-center self-center justify-self-center'
                                : 'text-black font-roboto-n500 font-bold w-full h-full text-center justify-self-center self-center hover:cursor-pointer hover:text-amber-500',
                              ' transition-d text-sm font-bold',
                            )}
                          >
                            Blog
                          </Link>
                        ) : (
                          <Menu
                            key={inx}
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div
                              onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                              key={item.id}
                            >
                              <Menu.Button
                                onClick={(e) => handleNavigation(0)}
                                className={`inline-flex w-full justify-center bg-transparent  text-sm font-roboto-n500 font-bold text-black shadow-sm hover:cursor-pointer hover:text-amber-500 ${
                                  (item.current
                                    ? 'font-roboto border-b-[1px] pb-1 border-amber-500 text-center self-center'
                                    : 'text-black h-full justify-self-center self-center hover:text-amber-500',
                                  ' transition-d font-bold')
                                }`}
                              >
                                <h1>Brands</h1>
                                <ChevronDownIcon
                                  className="-mr-1 ml-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 bg-opacity-40 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="/brands/dega"
                                        className={classNames(
                                          active
                                            ? 'bg-sky-200 text-sky-900'
                                            : 'text-sky-500',
                                          'block px-4 py-2 text-sm font-bold',
                                        )}
                                      >
                                        Dega Water
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="/brands/freshco"
                                        className={classNames(
                                          active
                                            ? 'bg-amber-200 text-amber-900'
                                            : 'text-amber-700',
                                          'block px-4 py-2 text-sm font-bold',
                                        )}
                                      >
                                        Freshco
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        )
                      ) : item.blog ? (
                        ''
                      ) : (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={(e) => handleNavigation(inx)}
                          className={classNames(
                            item.current
                              ? 'font-roboto text-amber-500 border-b-[1px] pb-1 border-amber-500 text-center self-center justify-self-center'
                              : 'text-black font-roboto-n500 font-bold w-full h-full text-center justify-self-center self-center hover:cursor-pointer hover:text-amber-500',
                            ' transition-d text-sm font-bold',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ),
                    )}
                    {isHovering ? (
                      <>
                        <NavHover
                          title={`Dega`}
                          className="rounded-t-md justify-self-center row-start-2 row-span-1 col-start-4 col-span-1"
                          duration={0.5}
                          delay={0.2}
                        />
                        <NavHover
                          title={`Fresco`}
                          className="rounded-b-md justify-self-center row-start-3 row-span-1 col-start-4 col-span-1"
                          duration={0.5}
                          delay={0.3}
                        />
                      </>
                    ) : (
                      ''
                    )}
                    ,
                    {isBlogHovering ? (
                      <>
                        <NavHover
                          title={`News`}
                          className="rounded-t-md justify-self-center row-start-2 row-span-1 col-start-6 col-span-1"
                          duration={0.5}
                          delay={0.2}
                        />
                        <NavHover
                          title={`Gallery`}
                          className="rounded-none justify-self-center row-start-3 row-span-1 col-start-6 col-span-1"
                          duration={0.5}
                          delay={0.3}
                        />
                        <NavHover
                          title={`Blog`}
                          className="rounded-b-md justify-self-center row-start-4 row-span-1 col-start-6 col-span-1"
                          duration={0.5}
                          delay={0.4}
                        />
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 text-white">
              <div>
                {navigation.map((item, inx) => (
                  <Link key={inx} href={item.href}>
                    <Disclosure.Button
                      key={item.id}
                      as="a"
                      onClick={(e) => handleNavigation(inx)}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white ml-3'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white ml-3',
                        'block px-3 py-2 text-base font-medium',
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
