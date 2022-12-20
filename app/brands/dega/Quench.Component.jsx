import React from 'react'

function Quench() {
  return (
    <section
      className={`h-[509px] content-center grid grid-cols-1 grid-rows-[min-content_min-content]`}
    >
      <div className={`row-start-1 row-span-1 justify-self-center self-center`}>
        <h1
          className={`text-center text-[81px] text-black font-roboto-n900 font-bold`}
        >
          Quench you’re thirst
        </h1>
      </div>
      <div
        className={`row-start-2 row-span-1 justify-self-center self-center w-[944px]`}
      >
        <p className={`text-center text-[28px] tex-[#666666] font-roboto`}>
          Bottled at the source from the cold, water-rich, heavenly and
          Naturally Bountiful Highlands (DEGA) of Debreberhan, Ethiopia.
        </p>
      </div>
    </section>
  )
}

export default Quench
