'use client'

import { motion } from 'framer-motion'

function Form() {
  return (
    <article className={`grid grid-rows-[1fr_1fr]`}>
      <div
        className={`row-start-1 row-span-1 grid grid-cols-1 grid-rows-[min-content_min-content_min-content] gap-y-6`}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`row-start-1 row-span-1 text-[#525252] text-[48px] font-lato-n900 font-bold leading-[57.6px]`}
        >
          Head Office
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`row-start-2 row-span-1 text-[#525252] text-[48px] font-lato-n900 font-bold leading-[57.6px]`}
        >
          Drop Us A Line
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.9,
            type: 'spring',
            bounce: 0.4,
          }}
          className={`pt-6 row-start-3 row-span-1 w-[539px] text-[24px] text-[#BCBCBC] text-left font-roboto`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna.{' '}
        </motion.p>
      </div>
      <div className={`row-start-2 row-span-1`}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            type: 'spring',
            bounce: 0.4,
          }}
          className="block"
        >
          <form>
            <div className="form-group mb-6">
              <textarea
                className="
        form-control
        block
        w-[519px]
        px-3
        py-1.5
        text-[24px]
        font-normal
        text-[#BCBCBC]
        bg-white
        bg-clip-padding
        border border-solid border-[#C8C8C8]
        transition
        focus:ring-0
        ease-in-out
        m-0
        focus:text-gray-300 focus:bg-white focus:border-[#4A171E] focus:outline-none
      "
                id="exampleFormControlTextarea13"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group mb-6 grid grid-cols-[1fr_1fr] w-[519px]">
              <input
                type="text"
                className="form-control block col-start-1 col-span-1 justify-self-start
        w-[248px]
        px-3
        py-1.5
        text-[24px]
        font-normal
        text-[#BCBCBC]
        bg-white bg-clip-padding
        border border-solid border-gray-300
        transition
        ease-in-out
        focus:ring-0
        m-0
        focus:text-gray-400 focus:bg-white focus:border-[#4A171E] focus:outline-none"
                id="exampleInput7"
                placeholder="FirstName"
              />
              <input
                type="text"
                className="form-control block col-start-2 col-span-1
                justify-self-end
        w-[248px]
        px-3
        py-1.5
        text-[24px]
        font-normal
        text-[#BCBCBC]
        bg-white bg-clip-padding
        border border-solid border-gray-300
        transition
        focus:ring-0
        ease-in-out
        m-0
        focus:text-gray-300 focus:bg-white focus:border-[#4A171E] focus:outline-none"
                id="exampleInput7"
                placeholder="LastName"
              />
            </div>

            <button
              type="submit"
              className="
      w-[519px]
      px-6
      py-2.5
      bg-white
      text-[#4A171E]
      text-[25px]
      capitalize
      border-[3px]
      border-[#4A171E]
      hover:bg-gray-100 hover:shadow-md
      focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-gray-100 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              submit
            </button>
          </form>
        </motion.div>
      </div>
    </article>
  )
}

export default Form
