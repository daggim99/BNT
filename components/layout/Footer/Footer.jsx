'use client'

import FooterNav from './FooterNav'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="row-start-[10] md:row-start-[8] h-[55vh] bg-[#4A171E] col-start-1 col-end-13 grid grid-cols-2 grid-rows-4 lg:grid-rows-3">
      <FooterNav />
      <article
        className={`col-start-1 col-end-3 row-start-2 row-end-4 grid grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:gap-6`}
      >
        <p className="text-white pt-12 text-center text-sm sm:text-base md:text-lg self-center col-start-1 col-end-4 lg:col-end-2 lg:text-left ml-3 lg:ml-12 ">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <Socials />
      </article>
      <p className="text-white text-base sm:text-base text-center md:text-lg lg:text-xl col-start-1 col-end-3 justify-self-center p-9 self-end">
        2022 BNT Industry and trading PLC
      </p>
    </footer>
  )
}

export default Footer
