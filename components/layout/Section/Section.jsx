import Button from '../../UI/Button/Button'

const Section = (props) => {
  const { title, text, className } = props
  const { card, cardTitle, cardText, cardButton, link, to } = className

  return (
    <section
      className={`${card} grid grid-cols-[1fr] grid-rows-[min-content_min-content_min-content] w-screen`}
    >
      <h1
        className={`row-start-1 row-end-2 sm:text-4xl font-lato-n900 font-bold md:text-[45px] md:w-[333px] md:h-[78px] lg:text-[55px] text-black ${cardTitle}`}
      >
        {title}
      </h1>
      <p
        className={`text-center row-start-2 row-end-3 font-roboto md:text-[15px] lg:text-[20px] leading-[34.84px] ${cardText}`}
      >
        {text}
      </p>
      <Button
        className={`border-[3px] capitalize cursor-pointer row-start-3 row-end-4 text-[23px] md:w-[195px] md:h-[57px] font-roboto-n500 ${cardButton.className}`}
        title={cardButton.title}
        link={link}
        to={to}
      />
    </section>
  )
}

export default Section
