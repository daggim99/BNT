import Section from '../Section'

const OurProducts = () => (
  <Section
    title="Our Brands"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-[70vh] sm:h-[60vh] md:h-[55vh] lg:h-[55vh] 2xl:h-[30vh] 2xl:pt-12 overflow-scroll md:overflow-clip pt-9 md:pt-0 row-start-2 row-end-3 py-9 dark:bg-white',
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
