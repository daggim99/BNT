'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import React from 'react'

function FreshcoHero() {
  const style = {
    backgroundImage: `url('/images/Brand/Freshco/background/backgroundLeft.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  const style2 = {
    backgroundImage: `url('/images/Brand/Freshco/background/backgroundRight.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  return (
    <section className={`grid grid-cols-[1fr_1fr] grid-rows-1`}>
      <div
        style={style}
        className={`pl-[120px] pt-[140px] col-start-1 col-span-1 grid grid-cols-1 grid-rows-1`}
      >
        <div
          className={`self-start col-span-1 row-span-1 grid grid-cols-1 grid-rows-[min-content-min-content-min-content-min-content]`}
        >
          <div className={`w-[330px] self-end row-start-1 col-span-1`}>
            <h2
              style={{ fontFamily: 'austria' }}
              className={`text-[48px] text-[#925A25] text-left`}
            >
              Drink Natural
            </h2>
          </div>
          <div
            className={`font-roboto-n900 font-bold text-[75px] text-[#131313] row-start-2 col-span-1 w-[496px] grid grid-cols-1 grid-rows-[min-content_min-content]`}
          >
            <h1
              className={`col-start-1 col-span-1 row-start-1 row-span-1 self-end`}
            >
              Feel-Good
            </h1>
            <h1
              className={`col-start-1 col-span-1 row-start-2 row-span-1 self-start`}
            >
              Do-Good
            </h1>
          </div>
          <div className={`row-start-3 col-span-1 w-[662px] self-start`}>
            <p className={`font-roboto-n300 text-[24px] text-[#121212] `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis
            </p>
          </div>

          <figure
            className={`row-start-4 col-span-1 w-[319px] h-[164.97px] self-start`}
          >
            <Image
              width={100}
              height={100}
              src={`/images/Brand/Freshco/freshco.png`}
              alt="Freshco Logo"
              className={`w-full h-full object-cover object-center`}
            />
          </figure>
        </div>
      </div>
      <div style={style2} className={`pt-[68px] col-start-2 col-span-1`}>
        <figure className={`w-[529px] h-[838px]`}>
          <Image
            width={100}
            height={100}
            src={`/images/Brand/Freshco/Pics/freshcoJuice.png`}
            alt={`Freshco Juice`}
            className={`object-contain w-full h-full`}
          />
        </figure>
      </div>
    </section>
  )
}
export default FreshcoHero
