import Section from '../Section'

const About = () => (
  <Section
    title="About Us"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-[70vh] sm:h-[60vh] md:h-[55vh] lg:h-[55vh] 2xl:h-[30vh] 2xl:pt-12 overflow-scroll md:overflow-clip sm:max-h-[85vh] sm:min-h-[55vh] pt-9 sm:pt-12 md:pt-0 md:h-[55vh] row-start-2 row-end-3 py-6 sm:py-3 md:py-0 dark:bg-white',
      cardTitle:
        'justify-self-center align-bottom self-center text-center md:mt-24',
      cardText:
        'justify-self-center self-center md:w-[940px] text-[#BCBCBC] md:mb-16',
      cardButton: {
        className: 'text-[#4A171E] border-[#4A171E] border-[3px]',
        title: 'Learn More',
      },
    }}
  />
)

export default About
