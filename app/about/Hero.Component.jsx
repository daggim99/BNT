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
    <section className="h-[55vh] grid grid-cols-[1fr_1fr] grid-rows-1">
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-1 col-span-1 row-start-1 row-end-2"
      />
      <div
        style={style}
        className="w-[100%] h-[100%] col-start-2 col-span-1 row-start-1 row-end-2"
      />
      <div className="col-start-1 col-end-3 justify-self-center self-center row-start-1 row-end-2">
        <h1 className="lg:mb-2 lg:mt-9 leading-[110.4px] font-lato-n900 font-bold text-4xl md:text-6xl lg:text-[72px] text-[#525252] text-center">
          About Us
        </h1>
        <p className="lg:pt-6 leading-[34.84px] text-base md:text-lg lg:text-[20px] font-roboto text-center text-[#808080] px-6 md:px-44 lg:px-72">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna.{' '}
        </p>
      </div>
    </section>
  )
}

export default AboutHero
