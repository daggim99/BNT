import Image from 'next/image'

import LogoImage from '/public/images/Logo/BNTLogo.svg'

const Logo = ({ className }) => {
  return (
    <figure
      className={`ml-3 mt-1 md:ml-12 transition-all duration-500 ease-in col-start-1 col-end-2 relative w-full h-full hover:invert hover:drop-shadow-[12px_12px_16px_red] hover:scale-105`}
    >
      <Image
        fill
        src={LogoImage}
        alt="Logo Image"
        className="w-full h-full block object-cover justify-self-center self-stretch"
      />
    </figure>
  )
}

export default Logo
