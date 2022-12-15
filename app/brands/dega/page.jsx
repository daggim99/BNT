import DegaHero from './Hero.Component'
import QuenchSection from './QuenchSection.Component'
import BenefitsSection from './BenefitSection.Component'
import CompositionSection from './CompositionSection.Component'
import UnderConstruction from '../../blog/Player.component'

export default function Dega() {
  return (
    <>
      <DegaHero />
      <QuenchSection />
      <BenefitsSection />
      <CompositionSection />
      <UnderConstruction />
    </>
  )
}
