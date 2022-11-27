import Section from '../Section'

const OurProducts = () => (
  <Section
    title="Our Brands"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'lg:pt-12 max-h-[100vh] min-h-[50vh] overflow-scroll md:overflow-clip sm:max-h-[65vh] sm:min-h-[60vh] pt-9 md:pt-0 md:max-h-[50vh] md:min-h-[45vh] lg:max-h-[40vh] lg:min-h-[35vh] row-start-2 row-end-3 py-9 dark:bg-white',
      cardTitle:
        'justify-self-center align-bottom self-center text-center md:mt-24',
      cardText:
        'justify-self-center self-center md:w-[940px] text-[#BCBCBC] dark:text-[#BCBCBC] md:mb-16',
      cardButton: {
        className:
          'text-black dark:text-black border-[#FFC107] dark:border-[#FFC107] border-[3px]',
        title: 'Learn More',
      },
    }}
  />
)

export default OurProducts
