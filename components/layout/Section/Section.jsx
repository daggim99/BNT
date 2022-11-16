import Button from '../../UI/Button/Button'

const Section = (props) => {
  const { title, text, className } = props
  const { card, cardTitle, cardText, cardButton, link, to } = className

  return (
    <section
      className={`${card} grid grid-cols-[1fr] grid-rows-[1fr_min-content_1fr] w-screen`}
    >
      <h1
        className={`row-start-1 row-end-2 sm:text-4xl tracking-tighter font-lato-n900 font-extrabold md:text-[45px] text-black ${cardTitle}`}
      >
        {title}
      </h1>
      <p
        className={`text-center row-start-2 row-end-3 text-[#BCBCBC] font-roboto text-[15px] leading-[24.84px] py-5 lg:px-72 ${cardText}`}
      >
        {text}
      </p>
      <Button
        className={`cursor-pointer row-start-3 py-2 row-end-4 text-lg text-[18px] font-roboto-n500 font-bold ${cardButton.className}`}
        title={cardButton.title}
        link={link}
        to={to}
      />
    </section>
  )
}

export default Section
