'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

const desc1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing'
const desc2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing'

const benefits = [
  {
    id: 'b1',
    description: desc1,
    icon: `/images/Brand/Dega/Icons/Heart.png`,
    alt: 'Heart Icon',
    col: 1,
    row: 1,
    width: 503,
    left: true,
  },
  {
    id: 'b2',
    description: desc1,
    icon: `/images/Brand/Dega/Icons/Muscle.png`,
    alt: 'Muscle Icon',
    col: 1,
    row: 2,
    width: 503,
    left: true,
  },
  {
    id: 'b3',
    description: desc1,
    icon: `/images/Brand/Dega/Icons/Kidney.png`,
    alt: 'Kidney Icon',
    col: 1,
    row: 3,
    width: 503,
    left: true,
  },
  {
    id: 'b4',
    description: desc2,
    icon: `/images/Brand/Dega/Icons/Time.png`,
    alt: 'Time Icon',
    col: 4,
    row: 1,
    width: 496.79,
    left: false,
  },
  {
    id: 'b5',
    description: desc2,
    icon: `/images/Brand/Dega/Icons/Face.png`,
    alt: 'Face Icon',
    col: 4,
    row: 2,
    width: 496.79,
    left: false,
  },
  {
    id: 'b6',
    description: desc2,
    icon: `/images/Brand/Dega/Icons/Dambel.png`,
    alt: 'Dambel Icon',
    col: 4,
    row: 3,
    width: 496.79,
    left: false,
  },
]

const Benefits = () => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`w-screen justify-items-stretch grid grid-cols-[auto_min-content_min-content_auto] grid-rows-3 gap-x-14`}
    >
      {benefits.map((benefit) => {
        return (
          <motion.div
            initial={
              benefit.left
                ? { opacity: 0, scale: 1, x: '-50vw' }
                : { opacity: 0, scale: 1, x: '50vw' }
            }
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              type: 'spring',
              bounce: 0.4,
            }}
            key={benefit.id}
            className={`col-start-${benefit.col} col-span-1 row-start-${benefit.row} grid grid-cols-1 grid-rows-2 gap-y-2`}
          >
            <div
              className={`justify-self-center self-start lg:w-[400px] row-start-2 row-span-1`}
            >
              <p
                className={`text-[28px] text-[#464646] text-center font-roboto leading-[32.81px]`}
              >
                {benefit.description}
              </p>
            </div>
            <figure
              className={`justify-self-center self-end row-start-1 row-span-1`}
            >
              <Image
                width={100}
                height={100}
                src={benefit.icon}
                alt={benefit.alt}
                className={`object-cover object-center w-full h-full`}
              />
            </figure>
          </motion.div>
        )
      })}
      <div
        className={`-z-[5009] col-start-1 col-span-2 row-span-full bg-gradient-to-t from-[#D8F2F5] to-white`}
      ></div>
      <motion.figure
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`justify-self-right w-[266px] h-[938px] overflow-visible col-start-2 col-span-2 row-span-full`}
      >
        <Image
          height={100}
          width={100}
          src="/images/Brand/Dega/degaWaterBottle.png"
          alt="Dega Water Bottle"
          className={`w-full h-full object-center overflow-visible object-cover`}
        />
      </motion.figure>
    </motion.article>
  )
}

export default Benefits
