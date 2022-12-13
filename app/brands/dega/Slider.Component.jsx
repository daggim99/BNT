'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'

function Slider() {
  return (
    <section className={`w-[80vw] lg:w-[85vw] md:mx-auto h-[50vh]`}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={'coverflow'}
        navigation
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        // loop
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        // pagination={true}
        className=""
      >
        <SwiperSlide>
          <Image
            width={100}
            height={100}
            src="/images/Brand/Dega/Slides/slide3.png"
            alt="slide image"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={100}
            src="/images/Brand/Dega/Slides/slide1.png"
            alt="slide image"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={100}
            src="/images/Brand/Dega/Slides/slide2.png"
            alt="slide image"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slider
