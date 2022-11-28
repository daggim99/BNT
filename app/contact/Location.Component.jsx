'use client'

import Maps from './Maps.Component'
import Form from './Form.Component'

function Location() {
  return (
    <section className={`grid grid-cols-[1fr_1fr] grid-rows-1`}>
      <div className={`col-start-1 col-span-1`}>
        <Maps />
      </div>
      <div className={`col-start-2 col-span-1 justify-self-center self-center`}>
        <Form />
      </div>
    </section>
  )
}

export default Location
