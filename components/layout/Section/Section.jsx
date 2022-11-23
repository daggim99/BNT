'use client'

import { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Button from '../../UI/Button/Button'

const Section = (props) => {
  const { title, text, className } = props
  const { card, cardTitle, cardText, cardButton, link, to } = className

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
          delay: 0.1,
          duration: 0.6,
          type: 'spring',
        },
      })
    }
  }, [inView, animation])

  return (
    <section
      ref={ref}
      className={`${card} grid grid-cols-[1fr] grid-rows-[min-content_min-content_min-content] w-screen`}
    >
      <motion.h1
        animate={animation}
        className={`row-start-1 row-end-2 sm:text-4xl font-lato-n900 font-bold md:text-[45px] md:w-[333px] md:h-[78px] lg:text-[55px] text-black ${cardTitle}`}
      >
        {title}
      </motion.h1>
      <motion.p
        animate={animation}
        className={`text-center row-start-2 row-end-3 font-roboto md:text-[15px] lg:text-[20px] leading-[34.84px] ${cardText}`}
      >
        {text}
      </motion.p>
      <motion.div
        animate={animation}
        className="row-start-3 row-end-4 justify-self-center"
      >
        <Button
          className={`border-[3px] capitalize cursor-pointer text-[23px] md:w-[195px] md:h-[57px] font-roboto-n500 ${cardButton.className}`}
          title={cardButton.title}
          link={link}
          to={to}
        />
      </motion.div>
    </section>
  )
}

export default Section
