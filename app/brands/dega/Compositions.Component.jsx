'use client'

import { useState } from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import CompositionDetail from './CompositionDetail.Component'

const elements = [
  {
    id: 'e1',
    name: 'Iron',
    symbol: 'Fe',
    width: '35vw',
    left: true,
    col: 1,
    row: 1,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e2',
    name: 'Magnesium',
    symbol: 'Mg',
    width: '32vw',
    left: true,
    col: 1,
    row: 2,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e3',
    name: 'Potassium',
    symbol: 'K',
    width: '30vw',
    left: true,
    col: 1,
    row: 3,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e4',
    name: 'Calcium',
    symbol: 'Ca',
    width: '32vw',
    left: true,
    col: 1,
    row: 4,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e5',
    name: 'Sodium',
    symbol: 'Na',
    width: '35vw',
    left: true,
    col: 1,
    row: 5,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e6',
    name: 'Sodium',
    symbol: 'Na',
    width: '35vw',
    left: false,
    col: 3,
    row: 1,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e7',
    name: 'Calcium',
    symbol: 'Ca',
    width: '32vw',
    left: false,
    col: 3,
    row: 2,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e8',
    name: 'Potassium',
    symbol: 'K',
    width: '30vw',
    left: false,
    col: 3,
    row: 3,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e9',
    name: 'Magnesium',
    symbol: 'Mg',
    width: '32vw',
    left: false,
    col: 3,
    row: 4,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
  {
    id: 'e10',
    name: 'Iron',
    symbol: 'Fe',
    width: '35vw',
    left: false,
    col: 3,
    row: 5,
    detail:
      'to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Some studies suggest that calcium, along with vitamin D',
  },
]

const style = {
  backgroundImage: `url('/images/Brand/Dega/backgroundSplash.png')`,
  backgroundPosition: 'right',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  transform: 'matrix(-0.78, -0.63, -0.63, 0.78, 0, 0)',
}

function Compositions() {
  const [detail, setDetail] = useState({})

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = (index) => {
    setIsHovering(true)
    setDetail(elements[index])
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

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
      className={`grid grid-cols-3 grid-rows-5 gap-y-12`}
    >
      {elements.map((element, index) => {
        const w = element.width
        return (
          <div
            key={element.id}
            onMouseOver={(e) => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            style={{ width: element.width }}
            className={`z-[5000] lg:h-[130.05px] bg-[#EEF5F8] transition-d hover:bg-[#BBECFC] hover:scale-105 ${
              element.left ? 'rounded-r-full' : 'rounded-l-full'
            } ${
              element.left ? 'justify-self-start' : 'justify-self-end'
            } col-start-${element.col} col-span-1 row-start-${
              element.row
            } row-span-1 grid grid-cols-[min-content_min-content] ${
              element.left ? 'justify-end' : 'justify-start'
            } grid-rows-1 gap-x-16`}
          >
            <div
              className={`self-center ${
                element.left
                  ? 'justify-self-end col-start-1 col-span-1 row-start-1 row-span-1'
                  : 'justify-self-start col-start-2 col-span-1 row-start-1 row-span-1'
              }`}
            >
              <p
                className={`font-roboto-n300 text-[36px] text-black ${
                  element.left ? 'text-right' : 'text-left'
                }`}
              >
                {element.name}
              </p>
            </div>
            <div
              className={`self-center ${
                element.left
                  ? 'justify-self-end col-start-2 col-span-1 row-start-1 row-span-1'
                  : 'justify-self-start col-start-1 col-span-1 row-start-1 row-span-1'
              } lg:w-[101.04px] lg:h-[101.04px] rounded-full bg-white grid ${
                element.left ? 'mr-6' : 'ml-6'
              }`}
            >
              <h2
                className={`justify-self-center self-center text-[48px] text-center text-[#707070] font-roboto-n900 font-bold`}
              >
                {element.symbol}
              </h2>
            </div>
          </div>
        )
      })}
      <div
        style={style}
        className={`justify-self-start col-start-2 col-span-1 row-start-1 row-span-full w-full h-full`}
      />
      {isHovering ? (
        <>
          <div
            className={`backdrop-filter backdrop-brightness-50 h-[923px] w-screen overflow-clip z-[4900] self-center justify-self-center col-start-2 col-span-1 row-start-1 row-span-full  bg-slate-50 opacity-60`}
          >
            <figure
              className={` lg:w-[500px] h-[80%] mx-auto justify-self-center grid`}
            >
              <Image
                width={100}
                height={100}
                src={`/images/Brand/Dega/Splash/degaWaterBottleWithSplash.png`}
                alt={`Dega Water Bottle`}
                className={`w-[90%] h-[95%] mx-auto object-center overflow-visible object-contain`}
              />
            </figure>
          </div>
          <CompositionDetail
            title={detail.name}
            detail={detail.detail}
            symbol={detail.symbol}
          />
        </>
      ) : (
        <figure
          className={`justify-self-center col-start-2 col-span-1 row-start-1 row-span-full lg:w-[550px] h-[970px]`}
        >
          <Image
            width={100}
            height={100}
            src={`/images/Brand/Dega/Splash/degaWaterBottleWithSplash.png`}
            alt={`Dega Water Bottle`}
            className={`w-full h-full object-center overflow-visible object-contain`}
          />
        </figure>
      )}
      )
    </motion.article>
  )
}

export default Compositions
