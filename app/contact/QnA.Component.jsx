'use client'

import { useState } from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

const Qs = [
  {
    id: 'q1',
    Q: 'Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    A: 'Donec scelerisque sollicitudin enim eu venenatis.',
    row: 1,
  },
  {
    id: 'q2',
    Q: 'Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    A: 'Donec scelerisque sollicitudin enim eu venenatis.',
    row: 2,
  },
  {
    id: 'q3',
    Q: 'Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    A: 'Donec scelerisque sollicitudin enim eu venenatis.',
    row: 3,
  },
  {
    id: 'q4',
    Q: 'Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    A: 'Donec scelerisque sollicitudin enim eu venenatis.',
    row: 4,
  },
  {
    id: 'q5',
    Q: 'Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
    A: 'Donec scelerisque sollicitudin enim eu venenatis.',
    row: 5,
  },
]

function QnA() {
  const [count, setCount] = useState(0)

  const handleDownScroll = () => {
    if (count >= Qs.length - 2) setCount(0)
    else setCount(count + 1)
  }

  const handleUpScroll = () => {
    setCount(count - 1)
  }

  return (
    <section className={`mt-16 w-screen grid grid-cols-[1fr_1fr] grid-rows-1`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.4,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`col-start-1 col-span-1 justify-self-center self-center w-full h-full grid grid-cols-1 grid-rows-1`}
      >
        <figure
          className={`justify-self-center self-center w-[478px] h-[355px]`}
        >
          <Image
            src={`/images/contact/QnA.png`}
            alt="QnA Image"
            width={100}
            height={100}
            className={`w-full h-full object-contain`}
          />
        </figure>
      </motion.div>
      <div
        className={`col-start-2 col-span-1 grid grid-cols-1 grid-rows-[min-content_min-content] gap-y-12`}
      >
        <div
          className={`self-center row-start-1 row-span-1 w-[193px] grid grid-rows-[min-content_min-content] gap-6`}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9, x: -666 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`pl-9 justify-self-start
             row-start-1 row-span-1 text-center text-[20px] text-black font-roboto-i300 font-thin italic`}
          >
            Ask you’r questions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -666 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`row-start-2 row-span-1 w-[595px] h-[57px]`}
          >
            <input
              type="text"
              className={`w-full h-full border border-solid border-black bg-white drop-shadow-lg shadow-lg`}
            />
          </motion.div>
        </div>
        <div
          className={`row-start-2 row-span-1 grid grid-rows-[1fr_0.1fr_1fr_0.3fr] gap-y-6`}
        >
          <div
            className={`row-start-1 row-span-1 grid grid-cols-1 grid-rows-2`}
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.7,
                type: 'spring',
                bounce: 0.4,
              }}
              className={`italic pl-9 row-start-1 row-span-1 w-[495.75px] text-black text-[20px] leading-[23.44px] font-roboto-i`}
            >
              {Qs[count].Q}
            </motion.p>
            <div
              className={`pl-9 row-start-2 row-span-1 grid grid-cols-[min-content_1fr] gap-3`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className={`justify-self-end self-center col-start-1 col-span-1`}
              >
                <svg
                  width="26"
                  height="29"
                  viewBox="0 0 26 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.753906 19.8563L0.753906 9.22237L13.2696 9.22237L13.2696 0.644342L25.5349 14.5393L13.2696 28.4343L13.2696 19.8563L0.753906 19.8563Z"
                    fill="black"
                  />
                </svg>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.8,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className={`italic self-center col-start-2 col-span-1 w-[495.75px] text-[20px] text-black text-left font-roboto-i`}
              >
                {Qs[count].A}
              </motion.p>
            </div>
          </div>

          <motion.hr
            initial={{ opacity: 0, scale: 1, x: '-100vw' }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              type: 'spring',
              bounce: 0.4,
            }}
            className={`row-start-2 row-span-1 text-black w-[608px] border border-solid border-black`}
          />

          <div
            className={`row-start-3 row-span-1 grid grid-cols-1 grid-rows-2`}
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.8,
                type: 'spring',
                bounce: 0.4,
              }}
              className={`italic pl-9 row-start-1 row-span-1 w-[495.75px] text-black text-[20px] leading-[23.44px] font-roboto-i`}
            >
              {Qs[count].Q}
            </motion.p>
            <div
              className={`pl-9 row-start-2 row-span-1 grid grid-cols-[min-content_1fr] gap-3`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className={`justify-self-end self-center col-start-1 col-span-1`}
              >
                <svg
                  width="26"
                  height="29"
                  viewBox="0 0 26 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.753906 19.8563L0.753906 9.22237L13.2696 9.22237L13.2696 0.644342L25.5349 14.5393L13.2696 28.4343L13.2696 19.8563L0.753906 19.8563Z"
                    fill="black"
                  />
                </svg>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.9,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className={`italic self-center col-start-2 col-span-1 w-[495.75px] text-[20px] text-black text-left font-roboto-i`}
              >
                {Qs[count].A}
              </motion.p>
            </div>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              type: 'spring',
              bounce: 0.4,
            }}
            onClick={handleDownScroll}
            className={`justify-self-center row-start-4 col-span-1`}
          >
            <svg
              width="105"
              height="46"
              viewBox="0 0 105 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.87695 1.93799L56.2462 43L103.015 1.93799"
                stroke="#878787"
                strokeWidth="4"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default QnA
