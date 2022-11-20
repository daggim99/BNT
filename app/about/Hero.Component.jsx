import { bottom } from '@popperjs/core'

const AboutHero = () => {
  const style = {
    backgroundImage: `linear-gradient(to bottom, rgba(255, 241, 201, 0.5),  rgba(255, 236, 177, 0.5)), url('/images/About/hero-pattern-1.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  return (
    <section className="h-[75vh] grid grid-cols-[1fr_1fr] grid-rows-1">
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-1 col-span-1 row-start-1 row-end-2"
      />
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-2 col-span-1 row-start-1 row-end-2"
      />
      <div className="lg:mt-12 col-span-full justify-self-center self-center row-start-1 row-end-2 grid grid-cols-1 grid-rows-2 lg:gap-y-6">
        <h1 className="justify-self-center lg:w-[600px] align-middle leading-[110.4px] font-lato-n900 font-bold text-4xl md:text-6xl lg:text-[92px] text-[#525252] text-center">
          About Us
        </h1>
        <p className="justify-self-center lg:w-[676px] md:leading-[34.84px] text-base md:text-lg lg:text-[20px] font-roboto text-center text-[#808080]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna.{' '}
        </p>
      </div>
    </section>
  )
}

export default AboutHero
