import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Socials = () => {
  return (
    <div
      className={`transition-d text-white col-span-full md:col-start-3 md:col-span-1 row-start-5 md:row-start-2  row-span-1 justify-self-center md:justify-self-end self-center md:self-start grid grid-cols-4 gap-x-9 lg:gap-x-6 grid-rows-1 md:mr-14 lg:mr-20`}
    >
      <FaFacebook
        className={`rounded-full w-[100%] h-[72%] cursor-pointer transition-d hover:bg-white hover:text-[#3b5998] col-start-1 col-end-2 justify-self-center self-center w-[35px] h-[35px] md:w-[35.61px] md:h-[35.61px]`}
      />
      <FaInstagram
        className={`rounded-full w-[100%] h-[72%] cursor-pointer transition-d text-xs bg-white text-[#4A171E]  hover:instaGrad col-start-2 col-end-3 justify-self-center self-center  w-[35px] h-[35px] lg:w-[35.61px] lg:h-[35.61px]`}
      />
      <FaTwitter
        className={`rounded-full w-[100%] h-[72%] cursor-pointer transition-d text-xs hover:bg-white bg-white text-[#4A171E] hover:text-[#00acee] col-start-3 col-end-4 justify-self-center self-center  w-[35px] h-[35px] lg:w-[35.61px] lg:h-[35.61px]`}
      />
      <FaLinkedin
        className={`rounded-full w-[100%] h-[72%] cursor-pointer transition-d text-xs hover:bg-white hover:text-[#0e76a8] col-start-4 col-end-5 justify-self-center self-center w-[35px] h-[35px] lg:w-[35.61px] lg:h-[35.61px]`}
      />
    </div>
  )
}

export default Socials
