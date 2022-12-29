'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import { motion } from 'framer-motion'

function Slider() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`overflow-visible w-[80vw] lg:w-screen justify-self-center  h-[50vh]`}
    >
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={'coverflow'}
        navigation
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        // pagination={true}
        className="overflow-visible"
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
    </motion.section>
  )
}

export default Slider
