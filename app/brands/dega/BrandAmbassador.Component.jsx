import React from 'react'

import Image from 'next/image'

function BrandAmbassador() {
  return (
    <section className={`grid grid-cols-2 grid-rows-1 gap-x-36`}>
      <figure
        className={`justify-self-end col-start-1 col-span-1 row-start-1 row-span-1 lg:w-[419px] lg:h-[419px]`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/DerartuTulu.png`}
          alt={`Derartu Tulu`}
          className={`w-full h-full object-center object-contain`}
        />
      </figure>
      <div
        className={`col-start-2 col-span-1 row-start-1 row-span-1 grid grid-cols-1 grid-rows-3`}
      >
        <div
          className={`self-end col-start-1 col-span-1 row-start-1 row-span-1`}
        >
          <h1
            className={`text-[61px] text-[#525252] text-left font-lato-n900 font-bold`}
          >
            Brand Ambassador
          </h1>
        </div>
        <div
          className={`self-center col-start-1 col-span-1 row-start-2 row-span-1`}
        >
          <h2
            className={`text-[48px] text-[#4A171E8A] text-left font-lato-n700`}
          >
            Derartu Tulu
          </h2>
        </div>
        <div
          className={`w-[532px] col-start-1 col-span-1 row-start-3 row-span-1`}
        >
          <p
            className={`text-[24px] text-black text-left font-roboto-n300 leading-[28.13px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BrandAmbassador
