'use client'

import { Player } from '@lottiefiles/react-lottie-player'

export default function UnderConstruction() {
  return (
    <article className="overflow-x-clip mt-24 overflow-hidden content-center m-auto justify-center align-middle self-center w-[90vh] h-[90vh] z-10 border-none lg:col-start-2 col-start-1 col-end-2 row-start-2 row-end-3 lg:col-end-3 lg:row-start-1 lg:row-end-2">
      <Player
        autoplay
        loop
        src={`/Lottie/UnderConstruction.json`}
        className="w-full object-cover"
      />
    </article>
  )
}
