import React from 'react'

import Image from 'next/image'

function Farm() {
  return (
    <section className={`grid grid-cols-[1fr_1fr] grid-rows-1`}>
      <figure
        className={`col-start-1 col-span-1 w-[688px] h-[561.5px] justify-self-center self-center`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Freshco/Pics/mango.png`}
          alt={`A Picture of Mango`}
          className={`object-contain object-center w-[80%] h-[80%] `}
        />
      </figure>
      <div
        className={`col-start-2 col-span-1 grid grid-cols-1 grid-rows-[min-content_min-content] self-center`}
      >
        <h2
          className={`col-start-1 col-span-1 row-start-1 row-span-1 font-lato-i900 font-bold text-black text-[64px]`}
        >
          Farm to Home{' '}
        </h2>
        <p
          className={`col-start-1 col-span-1 row-start-2 row-span-1 font-roboto w-[495px] text-[20px] text-[#121212] leading-[34.84px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
        </p>
      </div>
    </section>
  )
}

export default Farm
