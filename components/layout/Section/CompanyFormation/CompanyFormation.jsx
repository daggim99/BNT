import Section from '../Section'

const CompanyFormation = () => (
  <Section
    title="Company Formation"
    text="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
    cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
    aliqua.    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
 ."
    className={{
      card: 'h-[50vh] pt-9 md:pt-0 sm:h-[65vh] bg-[#FFC10747] row-start-6 lg:row-start-5 text-black font-lato',
      cardTitle:
        'justify-self-center self-end font-lato-n900 text-4xl md:text-6xl lg:text-[67] leading-[80.4px] text-[#525252]',
      cardText:
        'font-Roboto text-[#BCBCBC] px-12 md:px-45 lg:px-72 justify-self-center self-center p-9 font-lato',
      cardButton: {
        className:
          'text-[#4A171E] justify-self-center self-center border-[#4A171E] px-4 py-1',
        title: 'Learn More',
      },
    }}
  />
)

export default CompanyFormation
