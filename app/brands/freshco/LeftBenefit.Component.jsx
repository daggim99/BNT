import React from 'react'

import Image from 'next/image'

const leftBenefit = [
  {
    id: 'l1',
    title: 'Helps in pregnancy',
    image: '/images/Brand/Freshco/Icons/Pregnancy.png',
    col: 1,
    row: 1,
  },
  {
    id: 'l2',
    title: 'Prevents cancer',
    image: '/images/Brand/Freshco/Icons/Cancer.png',
    row: 2,
  },
  {
    id: 'l3',
    title: 'Gives relief from anemia',
    image: '/images/Brand/Freshco/Icons/Anemia.png',
    row: 3,
  },
  {
    id: 'l4',
    title: 'Boosts immunity and brain health',
    image: '/images/Brand/Freshco/Icons/Brain.png',
    row: 4,
  },
  {
    id: 'l5',
    title: 'Helps to maintain a health heart',
    image: '/images/Brand/Freshco/Icons/Heart.png',
    row: 5,
  },
]

function LeftBenefit() {
  return (
    <article
      className={`col-start-1 col-span-1 row-start-1 row-span-1 grid grid-cols-1 grid-rows-1 bg-gradient-to-b from-[#299C33] to-[#114321]`}
    >
      <div
        className={`w-[60%] h-[60%] m-auto col-start-1 col-span-1 row-start-1 row-span-full justify-self-center self-center grid grid-cols-1 grid-rows-[min-content_min-content_min-content_min-content_min-content]`}
      >
        {leftBenefit.map((benefit, index) => {
          return (
            <div
              key={benefit.id}
              className={`self-center grid grid-cols-[min-content_min-content] gap-x-16`}
            >
              <figure
                className={`w-[103px] h-[103px] justify-self-center self-center`}
              >
                <Image
                  width={100}
                  height={100}
                  alt="Benefit Icon"
                  src={benefit.image}
                  className={`object-contain object-center w-full h-full`}
                />
              </figure>
              <div
                className={`col-start-2 w-[310px] col-span-1 row-start-1 row-span-1 justify-self-center self-center`}
              >
                <h1 className={`text-[28px] text-white font-lato`}>
                  {benefit.title}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default LeftBenefit
