'use client'

import { motion } from 'framer-motion'

import Button from '../../UI/Button/Button'

const Section = (props) => {
  const { title, text, className } = props
  const { card, cardTitle, cardText, cardButton, link, to } = className

  return (
    <section
      className={`${card} max-h-[45vh] min-h-[356px] grid grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] w-screen gap-y-3`}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`self-end row-start-1 row-end-2 px-12 sm:px-9 text-2xl sm:text-3xl font-lato-n900 font-bold md:text-[45px] lg:text-[55px] text-black ${cardTitle}`}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className={`px-16 sm:px-16 md:px-0 text-center row-start-2 row-end-3 font-roboto text-[14px] sm:text-[15px] md:text-[18px] lg:text-[20px] leading-[18px] sm:leading-[21px] md:leading-[34.84px] ${cardText}`}
      >
        {text}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: '12vh' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className="row-start-3 row-end-4 justify-self-center self-start pb-16 sm:pb:14 md:pb-0"
      >
        <Button
          className={`border-[3px] px-6 py-1 mt-6 md:mt-0 md:px-0 md:py-0 capitalize cursor-pointer text-[18] md:text-[23px] leading-9 md:w-[195px] md:h-[57px] font-roboto-n500 ${cardButton.className}`}
          title={cardButton.title}
          link={link}
          to={to}
        />
      </motion.div>
    </section>
  )
}

export default Section
