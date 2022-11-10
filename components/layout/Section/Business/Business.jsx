import Section from '../Section'

const Business = () => (
  <Section
    title="Business"
    text="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
    cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
    aliqua.    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
 ."
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
