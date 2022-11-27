'use client'

import FooterNav from './FooterNav'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="h-[65vh] sm:h-[50vh] md:h-[35vh] bg-[#4A171E] grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-[1fr_1fr_1fr] gap-y-3">
      <FooterNav />
      <article
        className={`col-start-1 col-span-full md:col-end-3 row-start-2 row-end-4 grid grid-cols-3 grid-rows-2 lg:grid-rows-1 `}
      >
        <p className="self-center md:mt-6 px-3 md:py-6 md:px-0 text-white text-center font-roboto text-[12px] md:text-[16px] leading-[12px] sm:leading-[14px] md:leading-[18.44px] md:w-[320px] col-start-1 col-end-4 lg:col-end-2 lg:text-left ml-3 md:ml-14 lg:ml-20 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper
        </p>
        <Socials />
      </article>
      <p className="text-white text-center text-[12px] sm:text-[14px] text-[18px] font-roboto font-bold col-start-1 col-end-3 justify-self-center p-9 self-end">
        2022 BNT Industry and trading PLC
      </p>
    </footer>
  )
}

export default Footer
