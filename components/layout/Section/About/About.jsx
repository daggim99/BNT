import Section from '../Section'

const About = () => (
  <Section
    title="About Us"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-screen sm:h-[80vh] row-start-5 row-span-1 lg:row-start-4 py-9 mt-36',
      cardTitle:
        'justify-self-center align-bottom self-center text-center lg:mt-24',
      cardText:
        'justify-self-center self-center text-[#BCBCBC] md:w-[940px] md:mb-16',
      cardButton: {
        className:
          'justify-self-center self-center text-[#4A171E] border-[#4A171E] px-4 text-center  border-[3px] align-middle pt-3',
        title: 'Learn More',
      },
      link: '/about',
      to: 1,
    }}
  />
)

export default About
