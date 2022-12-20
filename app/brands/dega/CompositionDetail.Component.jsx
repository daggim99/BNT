import React from 'react'

function CompositionDetail(props) {
  return (
    <section
      className={`z-5000 col-start-2 col-span-1 row-start-2 row-span-3 justify-self-center self-center w-[658px] h-[325px] bg-[#EEF5F8] rounded-[61px] grid grid-cols-1 grid-rows-[min-content_min-content]`}
    >
      <div
        className={`col-start-1 col-span-1 row-start-1 row-span-1 justify-self-start self-end`}
      >
        <h1
          className={`text-left text-black text-[40px] font-roboto-n900 font-bold`}
        >
          {props.title}
        </h1>
      </div>
      <div
        className={`w-[511px] col-start-1 col-span-1 row-start-1 row-span-1 justify-self-start self-start`}
      >
        <p className={`text-left text-[#9B9B9B] text-[32px] font-roboto-n500`}>
          {props.detail}
        </p>
      </div>
    </section>
  )
}

export default CompositionDetail
