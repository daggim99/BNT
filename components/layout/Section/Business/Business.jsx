import Section from '../Section'

const Business = () => (
  <Section
    title="Business"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'overflow-scroll md:overflow-clip bg-[#FFC10747] row-start-6 lg:row-start-5 text-black',
      cardTitle:
        'justify-self-center self-end text-center md:mt-24 xl:mb-0 xl:mt-0',
      cardText:
        'justify-self-center self-center md:w-[842px] text-[#323232] dark:text-[#323232]',
      cardButton: {
        className: 'text-[#4A171E] border-[#4A171E] border-[3px]',
        title: 'Learn More',
      },
    }}
  />
)

export default Business
