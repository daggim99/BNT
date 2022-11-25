import Section from '../Section'

const Business = () => (
  <Section
    title="Business"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-screen sm:h-[80vh] bg-[#FFC10747] row-start-6 lg:row-start-5 text-black py-9',
      cardTitle: 'justify-self-center self-end text-center md:mt-24',
      cardText:
        'justify-self-center self-center md:w-[842px] text-[#323232] dark:text-[#323232] md:mb-16',
      cardButton: {
        className: 'text-[#4A171E] border-[#4A171E] border-[3px] px-4 py-1',
        title: 'Learn More',
      },
    }}
  />
)

export default Business
