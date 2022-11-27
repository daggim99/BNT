import AboutHero from './Hero.Component'
import CompanyFormation from './CompanyFormation.Component'
import Section from './Section.Component'
import CoreValues from './CoreValue.Component'
import Team from './Team.Component'
import TrustedPartners from './TrustedPartners.Component'

function About() {
  return (
    <>
      <AboutHero />
      <CompanyFormation />
      <Section left={true} title="Our Mission" />
      <Section left={false} title="Our Vision" />
      <CoreValues />
      <Team />
      <TrustedPartners />
    </>
  )
}

export default About
