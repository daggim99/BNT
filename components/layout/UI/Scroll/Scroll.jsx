import { useState } from 'react'

const scrolls = [
  {
    id: 's1',
    active: true,
    scroll: 0,
  },
  {
    id: 's2',
    active: false,
    scroll: 1,
  },
  {
    id: 's3',
    active: false,
    scroll: 2,
  },
  {
    id: 's4',
    active: false,
    scroll: 3,
  },
]

const Scroll = (props) => {
  const [slides] = useState(scrolls)

  const handleSlide = (index) => {
    slides.forEach((element) => (element.active = false))

    const activeSlideIndex = slides.findIndex(
      (element) => element.scroll === index,
    )

    const activeSlide = scrolls[activeSlideIndex]

    activeSlide.active = true
  }

  const { className, handleScroll } = props

  return (
    <div className={`justify-self-center self-end pb-9`}>
      {scrolls.map((scroll, index) => {
        return (
          <button
            key={scroll.id}
            onClick={(event) => {
              handleScroll(scroll.scroll), handleSlide(index)
            }}
            className={`rounded-full border-none cursor-pointer ${
              scroll.active
                ? `bg-[#FFFFFF66] hover:scale-105 hover:bg-opacity-10`
                : `bg-[#FFFFFF24] hover:scale-105 hover:bg-opacity-10`
            }  ${className}`}
          />
        )
      })}
    </div>
  )
}

export default Scroll
