import Image from 'next/image'

import Button from '/components/UI/Button/Button'
const Section = (props) => {
  const { left, title } = props

  return (
    <section className="mt-16 h-[65vh] rounded-none w-[80vw] m-auto grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] md:grid-rows-[1fr] gap-x-16">
      <div
        className={`self-stretch md:col-start-${
          left ? '2' : '1'
        } w-full h-full block col-span-1 row-span-full`}
      >
        <Image
          width={100}
          height={100}
          src={'/images/About/image.png'}
          alt={'image'}
          className="w-full object-contain h-full"
        />
      </div>
      <div
        className={`md:col-start-${
          left ? '1' : '2'
        } col-span-1 row-span-full grid grid-cols-[1fr] grid-rows-3 `}
      >
        <div className={`w-[375px]`}>
          <h1 className="font-lato-n900 text-[#525252] text-[67px] leading-[80.4px] font-bold">
            {title}
          </h1>
        </div>
        <div className={`w-[608px]`}>
          <p
            className={`text-[#6D6D6D] text-[20px] font-roboto leading-[34.84px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis. a id nisi.
          </p>
        </div>
        <div className={`self-center`}>
          <Button
            className={`w-[198.27px] h-[57.96px] border-[#4A171E] border-[3px] text-[#4A171E] text-[25px] font-roboto-n500 capitalize`}
            title="Contact Us"
          />
        </div>
      </div>
    </section>
  )
}

export default Section
