import Section from '../Section'

const OurProducts = () => (
  <Section
    title="Our Brands"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'overflow-scroll md:overflow-clip row-start-2 row-end-3 dark:bg-white',
      cardTitle: 'justify-self-center align-bottom self-end text-center ',
      cardText:
        'justify-self-center self-center md:w-[940px] text-[#BCBCBC] dark:text-[#BCBCBC]',
      cardButton: {
        className:
          'text-black dark:text-black border-[#FFC107] dark:border-[#FFC107] border-[3px]',
        title: 'Learn More',
      },
    }}
  />
)

export default OurProducts
