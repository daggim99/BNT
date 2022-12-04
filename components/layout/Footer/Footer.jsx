'use client'

import FooterNav from './FooterNav'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="overflow-scroll lg:overflow-hidden h-[55vh] sm:h-[50vh] md:h-[35vh] bg-[#4A171E] grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-[repeat(3,_min-content)] gap-y-3">
      <FooterNav />
      <article
        className={`self-start col-start-1 md:w-[80vw] md:m-auto  col-span-full md:col-end-3 row-start-2 row-end-3 grid grid-cols-3 grid-rows-2 lg:grid-rows-1 `}
      >
        <p className="self-start md:self-start px-3 md:px-0 text-white text-center font-roboto text-[12px] sm:text-[14px] md:text-[17px] leading-[14.9px] sm:leading-[16px] md:leading-[18.44px] md:w-[367px] col-start-1 col-end-4 lg:col-end-2 lg:text-left ml-3 md:ml-14 lg:ml-20 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Socials />
      </article>
      <p className="text-white text-center pt-16 text-base sm:text-[14px] md:text-[17px]  font-roboto col-start-1 col-end-3 justify-self-center p-3 self-center">
        &copy; {new Date().getFullYear()} BNT Industry and trading PLC
      </p>
    </footer>
  )
}

export default Footer
