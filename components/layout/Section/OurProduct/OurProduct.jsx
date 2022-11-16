import Section from '../Section'

const OurProducts = () => (
  <Section
    title="Our Brands"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-screen sm:h-[65vh] row-start-2 row-end-3 py-9',
      cardTitle: 'justify-self-center self-end ',
      cardText: 'justify-self-center self-center',
      cardButton: {
        className:
          'justify-self-center self-center text-black border-[#FFC107] px-4',
        title: 'Learn More',
      },
    }}
  />
)

export default OurProducts
