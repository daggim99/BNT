import AboutHero from './Hero.Component'
import CompanyFormation from './CompanyFormation.Component'
import Section from './Section.Component'
import CoreValues from './CoreValue.Component'
import UnderConstruction from './Player.component'

function About() {
  return (
    <>
      <AboutHero />
      <CompanyFormation />
      <Section left={true} title="Our Mission" />
      <Section left={false} title="Our Vision" />
      <CoreValues />
      <UnderConstruction />
    </>
  )
}

export default About
