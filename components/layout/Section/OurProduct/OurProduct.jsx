import Section from '../Section'

const OurProducts = () => (
  <Section
    title="Our Brands"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-screen sm:h-[80vh] row-start-2 row-end-3 py-9',
      cardTitle:
        'justify-self-center align-bottom self-center text-center md:mt-24',
      cardText:
        'justify-self-center self-center md:w-[940px] text-[#BCBCBC] md:mb-16',
      cardButton: {
        className: 'text-black border-[#FFC107] border-[3px]',
        title: 'Learn More',
      },
    }}
  />
)

export default OurProducts
