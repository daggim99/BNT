import DegaHero from './Hero.Component'
import QuenchSection from './QuenchSection.Component'
import BenefitsSection from './BenefitSection.Component'
import CompositionSection from './CompositionSection.Component'
import BottleSizeSection from './BottleSizeSection.Component'
import Stat from './Stat.Component'
import BrandAmbassador from './BrandAmbassador.Component'

export default function Dega() {
  return (
    <>
      <DegaHero />
      <QuenchSection />
      <BenefitsSection />
      <CompositionSection />
      <BottleSizeSection />
      <Stat />
      <BrandAmbassador />
    </>
  )
}
