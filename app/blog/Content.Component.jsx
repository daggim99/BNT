'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

const contents = [
  {
    id: 'c1',
    name: 'news',
    href: '#',
    col: 1,
    active: true,
  },
  {
    id: 'c2',
    name: 'blog',
    href: '#',
    col: 2,
    active: false,
  },
  {
    id: 'c3',
    name: 'gallery',
    href: '#',
    col: 3,
    active: false,
  },
]

const Content = () => {
  return (
    <section
      className={`w-screen h-[70] md:h-[65vh] grid grid-cols-1 grid-rows-[min-content_1fr]`}
    >
      <motion.nav
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`w-screen h-[12vh] md:h-[14vh] col-start-1 col-span-1 row-start-1 row-span-1 bg-[#4A171E] justify-self-center self-center items-center grid grid-cols-3 grid-rows-1`}
      >
        {contents.map((content) => {
          return (
            <Link
              key={content.id}
              href={content.href}
              className={`w-full md:w-[291px] pt-6 align-middle h-full uppercase col-start-${
                content.col
              } col-span-1 justify-self-center self-center font-roboto-n700 font-bold text-[20px] md:text-[40px] text-center ${
                content.active ? 'bg-[#D9D9D9] text-black' : 'text-white'
              }`}
            >
              {content.name}
            </Link>
          )
        })}
      </motion.nav>
      <div
        className={`row-start-2 row-span-1 col-span-1 self-center justify-self-center grid grid-rows-2 gap-y-12`}
      >
        <motion.p
          initial={{ opacity: 0, scale: 1.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`row-start-1 row-span-1 px-9 pt-24 md:px-0 md:py-0 md:w-[1031px] m-auto font-roboto-n700 text-[20px] md:text-[32px] leading-[37.5px] text-black text-center`}
        >
          here We give you Content on information related to our products and
          other informations
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`px-6 py-2 md:px-0 md:py-0 transition-d hover:rounded-lg hover:scale-95 md:row-start-2 row-span-1 justify-self-center self-center md:w-[302px] md:h-[69px] text-[#000000] border-black border-[1px] grid grid-cols-[1fr_0.3fr]`}
        >
          <p
            className={`col-start-1 col-span-1 self-center justify-self-center capitalize font-roboto-n700 md:text-[32px] text-[#000000] font-bold`}
          >
            get notified
          </p>
          <button
            className={`col-start-2 col-span-1 self-center justify-self-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[30px] md:w-[45.11px] text-[#E2B144] transition-d hover:scale-95 hover:text-[#E2B144e9]"
            >
              <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
              <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Content
