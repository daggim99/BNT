import Image from 'next/image'

import LogoImage from '/public/images/Logo/BNTLogo.svg'

const Logo = ({ className }) => {
  return (
    <figure
      className={`transition-all self-end duration-500 ease-in justify-self-center md:justify-self-start col-start-1 col-span-full md:col-span-1 relative w-[60%] h-[60%] hover:invert hover:drop-shadow-[12px_12px_16px_red] hover:scale-105 ml-3 md:ml-12 lg:ml-[70px]`}
    >
      <Image
        src={LogoImage}
        alt="Logo Image"
        className="w-full h-full block object-contain justify-self-start self-stretch"
      />
    </figure>
  )
}

export default Logo
