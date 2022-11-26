import Section from '../Section'

const About = () => (
  <Section
    title="About Us"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-screen sm:h-[75vh] row-start-2 row-end-3 py-9 mt-16 dark:bg-white',
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
