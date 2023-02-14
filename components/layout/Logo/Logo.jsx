import Image from 'next/image'
import { usePathname } from 'next/navigation'

// import LogoImage from '/public/images/Logo/FooterLogo.png'
// import DegaLogoImage from '/public/images/Brand/Dega/footerDegaLogo.png'

const Logo = ({ className }) => {
  const pathName = usePathname()

  // const color = `${
  //   pathName === '/brands/dega' ? 'bg-transparent' : 'bg-[#4A171E]'
  // }`

  // const Logo = `${pathName === '/brands/dega' ? DegaLogoImage : LogoImage}`

  let logo = ''
  let color = ''

  if (pathName === '/brands/dega')
    logo = '/images/Brand/Dega/footerDegaLogo.png'
  else if (pathName === '/brands/freshco')
    logo = '/images/Brand/Freshco/Logo/FooterFreshCoLogo.png'
  else logo = '/images/Logo/FooterLogo.png'

  if (pathName === '/brands/dega') color = 'bg-transparent'
  else if (pathName === '/brands/freshco') color = 'bg-transparent'
  else color = 'bg-[#4A171E]'

  return (
    <figure
      className={`${color} transition-all duration-500 ease-in self-end justify-self-center md:justify-self-start col-start-1 col-span-full md:col-span-1 relative w-full h-[10vh] md:w-[60%] md:h-[60%] hover:invert hover:drop-shadow-[12px_12px_16px_red] hover:scale-105 ml-3 md:ml-14 lg:ml-[73px]`}
    >
      <Image
        width={100}
        height={100}
        src={logo}
        alt="Footer Logo Image"
        className="w-full h-full block object-contain justify-self-start self-stretch"
      />
    </figure>
  )
}

export default Logo
