import Image from 'next/image'

import LogoImage from '/public/images/Logo/FooterLogo.png'

const Logo = ({ className }) => {
  return (
    <figure
      className={`transition-all duration-500 ease-in self-end justify-self-center md:justify-self-start col-start-1 col-span-full md:col-span-1 relative w-full h-[10vh] md:w-[60%] md:h-[60%] hover:invert hover:drop-shadow-[12px_12px_16px_red] hover:scale-105 ml-3 md:ml-14 lg:ml-[73px]`}
    >
      <Image
        src={LogoImage}
        alt="Footer Logo Image"
        className="w-full h-full block object-contain justify-self-start self-stretch"
      />
    </figure>
  )
}

export default Logo
