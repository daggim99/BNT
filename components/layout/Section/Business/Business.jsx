import Section from '../Section'

const Business = () => (
  <Section
    title="Business"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'pt-20 md:pt-0 h-[70vh] sm:h-[65vh] md:h-[60vh] lg:h-[60vh] xl:h-[30vh] 2xl:h-[25vh] 2xl:pt-12 overflow-scroll md:overflow-clip sm:max-h-[85vh] sm:min-h-[55vh] bg-[#FFC10747] row-start-6 lg:row-start-5 text-black',
      cardTitle:
        'justify-self-center self-end text-center md:mt-24 xl:mb-0 xl:mt-0',
      cardText:
        'justify-self-center self-center md:w-[842px] text-[#323232] dark:text-[#323232] md:mb-16 xl:mb-0',
      cardButton: {
        className: 'text-[#4A171E] border-[#4A171E] border-[3px] px-4 py-1',
        title: 'Learn More',
      },
    }}
  />
)

export default Business
