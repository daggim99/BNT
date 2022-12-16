import BottleSizeBackGroundVector from './BottleSizeBackGroundVector.Component'
import BottleSize from './BottleSize.Component'
import BottleSizes from './BottleSizes.Component'

function BottleSizeSection() {
  return (
    <section className={`mb-16 w-screen grid grid-cols-2 grid-rows-1`}>
      <BottleSizeBackGroundVector />
      <BottleSize />
      <BottleSizes />
    </section>
  )
}

export default BottleSizeSection
