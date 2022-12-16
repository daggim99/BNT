import React from 'react'

const sizes = [
  { id: 's1', size: 'Lorem ipsum dolor sit amet,', col: 1, row: 1 },
  { id: 's1', size: 'Lorem ipsum dolor sit amet,', col: 1, row: 2 },
  { id: 's1', size: 'Lorem ipsum dolor sit amet,', col: 1, row: 3 },
  { id: 's1', size: 'Lorem ipsum dolor sit amet,', col: 1, row: 4 },
]

function BottleSize() {
  return (
    <article
      className={`lg:h-[441px] lg:pt-40 col-start-1 col-span-1 row-start-1 justify-center row-span-1 grid grid-cols-1 grid-rows-[min-content_min-content_min-content]`}
    >
      <div
        className={`justify-self-start self-end col-start-1 col-span-1 row-start-1 row-span-1`}
      >
        <h1
          className={`pl-16 text-[94px] text-[#3F3F3F] text-left font-roboto-n900 font-bold capitalize`}
        >
          Bottle sizes
        </h1>
      </div>
      <div
        className={`justify-self-start self-center lg:w-[667px] col-start-1 col-span-1 row-start-2 row-span-1`}
      >
        <p className={`pl-16 text-[28px] text-[#676767] text-left font-roboto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper{' '}
        </p>
      </div>
      <div
        className={`mt-12 justify-self-start self-center lg:w-[395.82px] col-start-1 col-span-1 row-start-3 row-span-1 grid grid-cols-1 grid-rows-4`}
      >
        {sizes.map((size) => {
          return (
            <div
              key={size.id}
              className={`w-[500px] col-start-${size.col} col-span-1 row-start-${size.row} row-span-1`}
            >
              <p className={`pl-24 text-[28px] text-[#676767] font-roboto`}>
                {size.size}
              </p>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default BottleSize
