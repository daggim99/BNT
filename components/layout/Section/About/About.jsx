import Section from '../Section'

const About = () => (
  <Section
    title="About Us"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis."
    className={{
      card: 'h-screen sm:h-[65vh] row-start-5 row-span-1 lg:row-start-4',
      cardTitle: 'justify-self-center self-end',
      cardText: 'justify-self-center self-center p-9',
      cardButton: {
        className:
          'justify-self-center self-center text-[#4A171E] border-[#4A171E] px-4 py-1',
        title: 'Learn More',
      },
      link: '/about',
      to: 1,
    }}
  />
)

export default About
