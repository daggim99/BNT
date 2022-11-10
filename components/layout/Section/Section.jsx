import Button from '../../UI/Button/Button'

const Section = (props) => {
  const { title, text, className } = props
  const { card, cardTitle, cardText, cardButton, link, to } = className

  return (
    <section
      className={`${card} grid grid-cols-[1fr] grid-rows-[1fr_min-content_1fr] w-screen`}
    >
      <h1
        className={`row-start-1 row-end-2 sm:text-3xl md:text-6xl font-montserrat-n500 ${cardTitle}`}
      >
        {title}
      </h1>
      <p
        className={`px-12 sm:px-14 md:px-40 lg:px-52 text-center row-start-2 sm:text-base md:text-lg row-end-3 font-raleway ${cardText}`}
      >
        {text}
      </p>
      <Button
        className={`cursor-pointer row-start-3 row-end-4 text-lg font-roboto-n500 ${cardButton.className}`}
        title={cardButton.title}
        link={link}
        to={to}
      />
    </section>
  )
}

export default Section
