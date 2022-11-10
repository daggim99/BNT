import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div
      className={`transition-d text-white col-start-1 lg:col-start-3 col-end-4 row-start-2 lg:row-start-1 row-span-1 justify-self-stretch p-4 self-stretch grid grid-cols-4 lg:gap-x-6 grid-rows-1 lg:m-4`}
    >
      <FaFacebook
        className={`rounded-2xl w-[100%] h-[72%] cursor-pointer transition-d hover:bg-white hover:text-[#3b5998] col-start-1 col-end-2 justify-self-center self-center lg:w-[65%] lg:h-[65%]`}
      />
      <FaInstagram
        className={`rounded-2xl w-[100%] h-[72%] cursor-pointer transition-d hover:instaGrad col-start-2 col-end-3 justify-self-center self-center lg:w-[65%] lg:h-[65%]`}
      />
      <FaTwitter
        className={`rounded-2xl w-[100%] h-[72%] cursor-pointer transition-d hover:bg-white hover:text-[#00acee] col-start-3 col-end-4 justify-self-center self-center lg:w-[65%] lg:h-[65%]`}
      />
      <FaLinkedin
        className={`rounded-2xl w-[100%] h-[72%] cursor-pointer transition-d hover:bg-white hover:text-[#0e76a8] col-start-4 col-end-5 justify-self-center self-center lg:w-[65%] lg:h-[65%]`}
      />
    </div>
  );
};

export default Socials;
