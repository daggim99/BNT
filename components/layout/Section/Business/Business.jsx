import Section from '../Section'

const Business = () => (
  <Section
    title="Business"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-screen sm:h-[65vh] bg-[#FFC10747] row-start-6 lg:row-start-5 text-black font-lato',
      cardTitle: 'justify-self-center self-end',
      cardText: 'justify-self-center self-center p-9 font-lato',
      cardButton: {
        className:
          'text-[#4A171E] justify-self-center self-center border-[#4A171E] px-4 py-1',
        title: 'Learn More',
      },
    }}
  />
)

export default Business
