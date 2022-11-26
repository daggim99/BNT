'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

import TeamCarousel from './TeamCarousel.Component'

const team = [
  {
    id: 't1',
    firstName: 'First Name A',
    jobPosition: 'Job Position',
  },
  {
    id: 't2',
    firstName: 'First Name B',
    jobPosition: 'Job Position',
  },
  {
    id: 't3',
    firstName: 'First Name C',
    jobPosition: 'Job Position',
  },
  {
    id: 't4',
    firstName: 'First Name D',
    jobPosition: 'Job Position',
  },
  {
    id: 't5',
    firstName: 'First Name E',
    jobPosition: 'Job Position',
  },
]

const Team = () => {
  const [count, setCount] = useState(0)
  const [next, setNext] = useState(team)

  const handleTeamChangeDown = () => {
    if (count === team.length - 2) setCount(0)
    else setCount((e) => count + 1)
  }
  const handleTeamChangeUp = () => {
    setCount((e) => count - 1)
  }

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
        className={`col-start-2 col-span-1 row-start-1 row-end-2 grid grid-cols-1 grid-rows-[min-content_min-content_min-content] gap-y-16`}
      >
        <TeamCarousel
          firstName={team[count].firstName}
          jobPosition={team[count].jobPosition}
        />
        <TeamCarousel
          firstName={team[count + 1].firstName}
          jobPosition={team[count + 1].jobPosition}
        />
        <div
          className={`self-start justify-self-center grid ${
            count > 0 ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          <button onClick={handleTeamChangeDown}>
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
          {count > 0 ? (
            <button onClick={handleTeamChangeUp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[86.5px] text-[#878787]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
          ) : (
            ' '
          )}
        </div>
      </div>
    </section>
  )
}

export default Team
