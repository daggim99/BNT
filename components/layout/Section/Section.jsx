'use client'

import { motion } from 'framer-motion'

import Button from '../../UI/Button/Button'

const Section = (props) => {
  const { title, text, className } = props
  const { card, cardTitle, cardText, cardButton, link, to } = className

  return (
    <section
      className={`${card} grid grid-cols-[1fr] grid-rows-[min-content_min-content_min-content] w-screen`}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`row-start-1 row-end-2 px-20 py-9 md:px-0 md:py-0 text-4xl font-lato-n900 font-bold md:text-[45px] md:w-[333px] md:h-[78px] lg:text-[55px] text-black ${cardTitle}`}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`px-14 py-3 md:px-0 md:py-0 text-center row-start-2 row-end-3 font-roboto md:text-[15px] lg:text-[20px] leading-[34.84px] ${cardText}`}
      >
        {text}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: '12vh' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className="row-start-3 row-end-4 justify-self-center"
      >
        <Button
          className={`border-[3px] px-6 py-1 mt-6 md:mt-0 md:px-0 md:py-0 capitalize cursor-pointer text-[23px] md:w-[195px] md:h-[57px] font-roboto-n500 ${cardButton.className}`}
          title={cardButton.title}
          link={link}
          to={to}
        />
      </motion.div>
    </section>
  )
}

export default Section
