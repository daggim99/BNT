'use client'

import { usePathname } from 'next/navigation'

import FooterNav from './FooterNav'
import Socials from './Socials'

const Footer = () => {
  const pathName = usePathname()

  // let color = `${
  //   pathName === '/brands/dega'
  //     ? 'bg-gradient-to-r from-[#085078] to-[#85D8CE]'
  //     : 'bg-[#4A171E]'
  // }`

  let color = ''

  if (pathName === '/brands/dega')
    color = 'bg-gradient-to-r from-[#085078] to-[#85D8CE]'
  else if (pathName === '/brands/freshco')
    color = 'bg-gradient-to-r from-[#F5CF94] via-[#F4CC8E] to-[#FBE200]'
  else color = 'bg-[#4A171E]'

  let text = ''

  if (pathName === '/brands/dega') text = 'text-white'
  else if (pathName === '/brands/freshco') text = 'text-black'
  else text = 'text-white'

  console.log(pathName)
  return (
    <footer
      className={`${color} overflow-scroll lg:overflow-hidden h-[55vh] sm:h-[50vh] md:h-[35vh] grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-[repeat(3,_min-content)] gap-y-3`}
    >
      <FooterNav />
      <article
        className={`self-start col-start-1 md:w-[80vw] md:m-auto  col-span-full md:col-end-3 row-start-2 row-end-3 grid grid-cols-3 grid-rows-2 lg:grid-rows-1 `}
      >
        <p
          className={`self-start md:self-start px-3 md:px-0 ${text} text-center font-roboto text-[12px] sm:text-[14px] md:text-[17px] leading-[14.9px] sm:leading-[16px] md:leading-[18.44px] md:w-[367px] col-start-1 col-end-4 lg:col-end-2 lg:text-left ml-3 md:ml-14 lg:ml-20 `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Socials />
      </article>
      <p
        className={`${text} text-center pt-16 text-base sm:text-[14px] md:text-[17px]  font-roboto col-start-1 col-end-3 justify-self-center p-3 self-center`}
      >
        &copy; {new Date().getFullYear()} BNT Industry and trading PLC
      </p>
    </footer>
  )
}

export default Footer
