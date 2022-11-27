import React, { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

export const businesses = [
  {
    id: 'b1',
    title: 'BNT Coffee',
    colStart: `1`,
    colEnd: `2`,
  },
  {
    id: 'b2',
    title: 'Ranger',
    colStart: `2`,
    colEnd: `3`,
  },
  {
    id: 'b3',
    title: 'BNT Transport',
    colStart: `3`,
    colEnd: `4`,
  },
  {
    id: 'b4',
    title: 'BNT Agriculture',
    colStart: `4`,
    colEnd: `5`,
  },
  {
    id: 'b5',
    title: 'Techachlo Real Estate',
    colStart: `5`,
    colEnd: `6`,
  },
  {
    id: 'b6',
    title: 'BNT Import',
    colStart: `6`,
    colEnd: `7`,
  },
  {
    id: 'b7',
    title: 'BNT Trading',
    colStart: `7`,
    colEnd: `8`,
  },
]

const list = { opacity: 0, scale: 0, x: '-100vw' }
const item = { y: '-100%', opacity: 0, scale: 0 }
const trans = { type: 'spring', bounce: 0.3, duration: 1.4 }
const anim = { opacity: 1, scale: 1, x: 0, y: 0 }

export const Others = () => {
  const { ref, inView } = useInView()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: [0.3, 0.6, 0.9, 1],
        rotate: 0,
        scale: 1,
        transition: {
          delay: 0,
          duration: 0.4,
          type: 'spring',
        },
      })
    }

    if (!inView) {
      animation.start({
        opacity: 0,
        scale: 0.3,
        transition: {
          delay: 0,
          duration: 0.4,
          type: 'spring',
        },
      })
    }
  }, [inView, animation])

  return (
    <ul
      ref={ref}
      className="dark:bg-white h-[36vh] md:h-[24vh] lg:h-[16vh] overflow-hidden grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-7 lg:grid-rows-1 gap-0"
    >
      {businesses.map((business) => {
        const { id, title, colStart, colEnd } = business
        return (
          <motion.li
            animate={animation}
            key={id}
            className={`transition-d lg:col-start-${colStart} lg:col-end-${colEnd} text-center align-middle justify-self-center p-1 self-center font-roboto-n500 text-[12px] sm:text-[12px] md:text-[16px] text-[#636363] font-bold px-0  hover:scale-95 hover:text-base hover:bg-slate-50`}
          >
            {title}
          </motion.li>
        )
      })}
    </ul>
  )
}

export default Others
