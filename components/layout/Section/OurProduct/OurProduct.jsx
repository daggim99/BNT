import Section from '../Section'

const OurProducts = () => (
  <Section
    title="Our Brands"
    text="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
    cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
    aliqua.    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem"
    className={{
      card: 'h-screen sm:h-[65vh] row-start-2 row-end-3 py-9',
      cardTitle: 'justify-self-center self-end',
      cardText: 'justify-self-center self-center p-9',
      cardButton: {
        className:
          'justify-self-center self-center text-black border-amber-500 px-4 py-1',
        title: 'Learn More',
      },
    }}
  />
)

export default OurProducts
