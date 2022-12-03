'use client'

// import { useState } from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

const blogs = [
  {
    id: 'b1',
    title: 'How we create a connection',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
  },
  {
    id: 'b2',
    title: 'Blog Post',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
  },
  {
    id: 'b3',
    title: 'Another Blog Post',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
  },
  {
    id: 'b4',
    title: 'Another Another Blog Post',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
  },
  {
    id: 'b5',
    title: 'Blog Post Five',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.',
  },
]

const Blog = () => {
  // const [count, setCount] = useState(0)

  // const handleBlogScrollDown = () => {
  //   if (count === blogs.length - 1) setCount(0)
  //   else setCount(count + 1)
  // }

  // const handleBlogScrollUp = () => {
  //   setCount(count - 1)
  // }

  return (
    <section
      className={`h-[115vh] md:h-[75vh] lg:h-[590px] grid grid-cols-1 md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] md:grid-rows-[1fr]`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.6, x: -333 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`bg-[#D9D9D9] col-start-1 col-span-1 row-start-1 row-span-1 grid grid-cols-1 gird-rows-1`}
      >
        <div
          className={`justify-self-center grid grid-cols-1 gird-rows-[min-content_min-content_min-content]`}
        >
          <h
            className={`self-end text-[27px] md:text-[40px] text-black font-roboto-n700 font-bold text-center md:text-left`}
          >
            {blogs[0].title}
          </h>
          <p
            className={`self-center md:w-[437px] text-[20] md:text-[24px] font-roboto-n700 leading-[28.13px] text-[#000000] text-center md:text-left`}
          >
            {blogs[0].text}
          </p>
          <div
            className={`justify-self-center md:justify-self-start self-start md:w-[195px] md:h-[57px] text-[#4A171E] bg-[#4A171E] grid grid-cols-1 grid-rows-1`}
          >
            <button
              className={`capitalize px-6 py-2 md:px-0 md:py-0 justify-self-center self-centre text-center text-white font-roboto-n500 md:text-[25px] leading-[29.3px]`}
            >
              Contact us
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.6, x: 333 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.6,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`md:col-start-2 col-start-1 col-span-1 row-start-2 md:row-start-1 row-span-1 w-full h-full`}
      >
        <Image
          width={100}
          height={100}
          src="/images/blog/blog.png"
          alt="Blog"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* <motion.button
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          type: 'spring',
          bounce: 0.4,
        }}
        className={`col-span-full row-start-3 justify-self-center self-center grid ${
          count > 0 ? 'grid-cols-2' : 'grid-cols-1'
        } grid-rows-1`}
      >
        <button
          className="col-start-1 col-span-1"
          onClick={handleBlogScrollDown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[57.29px] text-[#4A171E]"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {count > 0 ? (
          <button
            className="col-start-2 col-span-1"
            onClick={handleBlogScrollUp}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[57.29px] text-[#4A171E]"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          ' '
        )}
      </motion.button> */}
    </section>
  )
}

export default Blog
