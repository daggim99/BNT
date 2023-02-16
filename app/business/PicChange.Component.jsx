import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay])

export const businesses = [
  {
    id: 'b1',
    index: 1,
    title: 'BNT Coffee',
    colStart: `1`,
    colEnd: `2`,
    picNumber: 10,
    active: false,
  },
  {
    id: 'b2',
    index: 2,
    title: 'Ranger',
    colStart: `2`,
    colEnd: `3`,
    picNumber: 8,
    active: false,
  },
  {
    id: 'b3',
    index: 3,
    title: 'BNT Transport',
    colStart: `3`,
    colEnd: `4`,
    picNumber: 4,
    active: false,
  },
  {
    id: 'b4',
    index: 4,
    title: 'BNT Agriculture',
    colStart: `4`,
    colEnd: `5`,
    picNumber: 0,
    active: true,
  },
  {
    id: 'b5',
    index: 5,
    title: 'Techachlo Real Estate',
    colStart: `5`,
    colEnd: `6`,
    picNumber: 5,
    active: false,
  },
  {
    id: 'b6',
    index: 6,
    title: 'BNT Import',
    colStart: `6`,
    colEnd: `7`,
    picNumber: 7,
    active: false,
  },
  {
    id: 'b7',
    index: 7,
    title: 'BNT Trading',
    colStart: `7`,
    colEnd: `8`,
    picNumber: 2,
    active: false,
  },
]

function PicChange({ handlePicChange }) {
  const [businessesState, setBusinesses] = useState(businesses)
  const [activeBusiness, setActiveBusiness] = useState(0)

  const handleActiveBusiness = (inx) => {
    setActiveBusiness(inx)

    businessesState.forEach((element) => (element.active = false))

    const activeLinkIndex = businessesState.findIndex(
      (element) => element.index === inx,
    )

    businessesState[activeLinkIndex].active = true
  }

  const changePic = (picNumber) => {
    handlePicChange(picNumber)
  }

  return (
    <Swiper
      loop={true}
      slidesPerView={7}
      autoplay={{ delay: 500, disableOnInteraction: true }}
      speed={1000}
      grabCursor={true}
      className="dark:bg-white col-start-1 col-span-full row-start-2 row-span-1 h-[36vh] md:h-[24vh] lg:h-[16vh] content-center justify-center items-center overflow-hidden grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-7 lg:grid-rows-1 gap-0"
    >
      {businesses.map((business, inx) => {
        const { id, title } = business
        return (
          <SwiperSlide
            key={id}
            className={`transition-d text-center align-middle justify-self-center p-1 self-center font-roboto-n500 text-[12px] sm:text-[12px] md:text-[16px] text-[#636363] font-bold px-0  hover:scale-95 hover:text-base hover:bg-slate-50 grid`}
          >
            <button
              onClick={(e) => {
                changePic(business.picNumber)
                handleActiveBusiness(business.index)
              }}
              className={`${
                business.active
                  ? 'w-[168px] h-[73px] bg-[#E2B144] text-black self-center justify-self-center pb-3'
                  : ''
              }`}
            >
              {title}
            </button>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default PicChange
