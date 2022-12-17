import React from 'react'

import Composition from './Composition.Component'
import Compositions from './Compositions.Component'

function CompositionSection() {
  return (
    <section className={`w-screen mt-36 mb-36`}>
      <Composition />
      <Compositions />
    </section>
  )
}

export default CompositionSection
