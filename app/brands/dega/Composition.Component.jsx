import React from 'react'

function Composition() {
  return (
    <article className={`grid grid-cols-1 grid-rows-2`}>
      <div className={`justify-self-center self-center row-start-1 row-span-1`}>
        <h1
          className={`text-[92px] text-black text-center font-roboto-n900 font-bold`}
        >
          Composition
        </h1>
      </div>
      <div
        className={`justify-self-center self-center row-start-2 row-span-1 w-[830.29px]`}
      >
        <p className={`text-center text-[28px] text-[#777777] font-roboto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper{' '}
        </p>
      </div>
    </article>
  )
}

export default Composition
