import Section from '../Section'

const About = () => (
  <Section
    title="About Us"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'md:t-24 overflow-scroll md:overflow-clip row-start-2 row-end-3 dark:bg-white',
      cardTitle:
        'justify-self-center align-bottom text-center md:mt-24 xl:mt-0 xl:mb-0',
      cardText:
        'justify-self-center self-center md:w-[940px] text-[#BCBCBC] md:mb-16 xl:mb-0',
      cardButton: {
        className: 'text-[#4A171E] border-[#4A171E] border-[3px]',
        title: 'Learn More',
      },
    }}
  />
)

export default About
