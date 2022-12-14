import Quench from './Quench.Component'
import Slider from './Slider.Component'

const style = {
  backgroundImage: `url('/images/Brand/Dega/backgroundSplash.png')`,
  backgroundPosition: 'right',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}

const QuenchSection = () => {
  return (
    <section style={style} className={`w-screen`}>
      <Quench />
      <Slider />
    </section>
  )
}

export default QuenchSection
