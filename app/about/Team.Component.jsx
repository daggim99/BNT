'use client'

import { motion } from 'framer-motion'

import TeamCarousel from './TeamCarousel.Component'

const Team = () => {
  return (
    <section
      className={`bg-gradient-to-b from-[#FFF1C9] to-transparent pt-16 mt-16 h-[95vh] grid grid-cols-1 md:grid-cols-2 grid-rows-[1fr_min-content]`}
    >
      <div
        className={` justify-self-center col-start-1 col-span-1 row-start-1 row-end-2 grid grid-cols-1 grid-rows-[min-content_min-content] gap-y-16`}
      >
        <div
          className={`justify-self-start self-center text-[67px] text-[#525252]`}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`font-lato-n900 font-bold`}
          >
            Our Team
          </motion.h2>
        </div>
        <div className={`justify-self-start self-center w-[506px]`}>
          <motion.p
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`text-[20px] text-[#6D6D6D] leading-[34.84px] font-roboto`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </motion.p>
        </div>
      </div>
      <div
        className={`col-start-2 col-span-1 row-start-1 row-end-2 grid grid-cols-1 grid-rows-[min-content_min-content] gap-y-16`}
      >
        <TeamCarousel />
        <TeamCarousel />
      </div>
      <div
        className={`self-start col-start-2 col-span-1 row-start-2 row-span-1 justify-self-center`}
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[86.5px]  text-[#878787]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Team
