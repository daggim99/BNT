'use client'

import { useState } from 'react'

import Image from 'next/image'

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

  const handleDetail = (index) => {
    setDetail(elements[index])
  }

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <article className={`grid grid-cols-3 grid-rows-5 gap-y-12`}>
      {elements.map((element) => {
        const w = element.width
        return (
          <div
            key={element.id}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ width: element.width }}
            className={`lg:h-[130.05px] bg-[#EEF5F8] ${
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
      <figure
        className={`justify-self-center col-start-2 col-span-1 row-start-1 row-span-full lg:w-[400px] h-[923px]`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Dega Water Bottle`}
          className={`w-full h-full object-center overflow-visible object-contain`}
        />
      </figure>
    </article>
  )
}

export default Compositions
// {isHovering ? <CompositionDetail /> : null}
