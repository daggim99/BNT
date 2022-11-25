import Image from 'next/image'

import LogoImage from '/public/images/Logo/BNTLogo.svg'

const Logo = ({ className }) => {
  return (
    <figure
      className={`ml-3 mt-1 md:ml-16 px-3 transition-all self-end duration-500 ease-in col-start-1 col-end-2 relative w-[60%] h-[60%] hover:invert hover:drop-shadow-[12px_12px_16px_red] hover:scale-105`}
    >
      <Image
        src={LogoImage}
        alt="Logo Image"
        className="w-full h-full block object-contain justify-self-center self-stretch"
      />
    </figure>
  )
}

export default Logo
