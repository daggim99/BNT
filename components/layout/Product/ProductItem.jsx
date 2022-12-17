'use client'

import { useEffect } from 'react'

import Image from 'next/image'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Button from '../../UI/Button/Button'

import img1 from '/public/images/Products/freshcoImage.png'
import img2 from '/public/images/Products//degaImage.png'

const products = [
  {
    id: 'p1',
    title: 'Freshco',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.',
    left: true,
  },
  {
    id: 'p2',
    title: 'Dega Water',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.',
    left: false,
  },
]

const ProductItem = () => {
  const { ref, inView } = useInView()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0,
          duration: 0.4,
          type: 'spring',
        },
      })
    }

    if (!inView) {
      animation.start({
        scale: 0.99,
        opacity: 0.8,
        transition: {
          delay: 0.1,
          duration: 0.4,
          type: 'spring',
        },
      })
    }
  }, [inView, animation])

  return products.map((product) => {
    const base = `md:col-start-${product.left ? `1` : `2`} md:col-end-${
      product.left ? `2` : `3`
    } justify-self-${product.left ? `end` : `start`}`

    const { left } = product

    const logo = {
      zIndex: '1000',
      backgroundImage: `url('/images/Logo/${
        left ? 'LogoFreshco.svg' : 'degaLogo.svg'
      }')`,
      backgroundOrigin: 'border',
      backgroundClip: 'border',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    }

    return (
      <article
        ref={ref}
        key={product.id}
        className={`${base} md:h-full md:w-full max-h-[100vh] min-h-[50vh] overflow-scroll md:overflow-visible`}
      >
        <motion.div
          animate={animation}
          className={`group transition-d h-full w-full grid ${
            left
              ? 'grid-cols-1 md:grid-cols-[1.3fr_0.7fr]'
              : 'grid-cols-1 md:grid-cols-[0.7fr_1.3fr]'
          } grid-rows-[min-content_min-content_min-content_1fr]`}
        >
          <figure
            className={`transition-d overflow-hidden peer filter brightness-75 blur-none group-hover:brightness-50 group-hover:blur-sm col-start-1 col-end-3 row-span-full transition-d relative peer hover:z-10 w-full h-full`}
          >
            <Image
              src={left ? img1 : img2}
              alt={left ? 'freshco' : 'dega'}
              className={`transition-d w-full h-full block object-cover justify-self-center self-stretch group-hover:scale-105`}
            />
          </figure>
          <div
            className={`${
              left ? 'border-[#FFF1C9]' : 'border-[#DAF4F6]'
            } z-50 hover:z-50 bg-white my-6 transition-d filter brightness-100 peer-hover:brightness-110 lg:-translate-y-[50%] border-2 md:border-4 shadow-md md:shadow-lg lg:shadow-xl rounded-full relative w-48 h-24 md:w-52 md:h-28 lg:w-[290px] lg:h-[144px] text-center col-start-1 col-end-3 row-start-1 row-end-2 justify-self-center bg-center bg-no-repeat bg-cover grid grid-cols-1 grid-rows-1`}
          >
            <figure
              style={logo}
              className={`${
                left
                  ? 'w-[80px] h-[50px] sm:w-[125px] sm:h-[75px] md:w-[175px] md:h-[93px]  lg:w-[196px] lg:h-[100.98px]'
                  : 'w-[115px] h-[55px] sm:w-[118px] sm:h-[65px] md:w-[123px] md:h-[75px] lg:w-[135px] lg:h-[88px]'
              } bg-white z-50 hover:z-50 justify-self-center self-center`}
            />
          </div>
          <div
            className={`z-10 ${
              left
                ? 'col-start-1 col-end-2 justify-self-center md:justify-self-end'
                : 'col-start-2 col-end-3 justify-self-center md:justify-self-start'
            } transition-d filter brightness-100 peer-hover:brightness-200 row-start-2 row-span-1 self-start  text-white -mt-12`}
          >
            <h2
              className={`font-bold ${
                left
                  ? 'mt-14 md:mt-0 text-center md:text-right'
                  : 'mt-14 md:mt-0 text-center md:text-left'
              } transition-d filter brightness-100 peer-hover:brightness-200 text-white font-lato-n900 text-[50px] sm:text-[45px] md:text-[60px]  lg:text-[65px]`}
            >
              {product.title}
            </h2>
          </div>
          <div
            className={`z-10 md:w-[385px] md:h-[206px] ${
              left
                ? 'col-start-1 col-end-2 justify-self-center md:justify-self-end md:pr-0'
                : 'col-start-2 col-end-3 justify-self-center md:justify-self-start md:pl-0'
            } transition-d filter brightness-100 peer-hover:brightness-200 row-start-3 row-span-1 self-start text-white px-9 py-3 `}
          >
            <p
              className={`transition-d filter brightness-100 peer-hover:brightness-200 ${
                left ? 'text-center md:text-right ' : 'text-center md:text-left'
              } pt-14 md:pt-0 text-[19.7px] sm:text-[19.8px]  md:text-[19.9px] lg:text-[20px] leading-[31px] sm:leading-[32px] md:leading-[33px] lg:leading-[34.84px]`}
            >
              {product.text}
            </p>
          </div>
          <div
            className={`justify-self-center ${
              left
                ? 'text-center md:text-right col-start-1 col-end-2 md:justify-self-end'
                : 'text-center md:text-left col-start-2 col-end-3 md:justify-self-start'
            } filter brightness-100 peer-hover:brightness-200 z-10 col-start-1 col-end-2 row-start-4 row-span-1   text-white self-center mt-9 mb-12`}
          >
            <Button
              to={2}
              link={`${left ? '#' : '/brands/dega'}`}
              className={`capitalize px-6 py-2 border-[3px] lg:w-[195px] lg:h-[57px] ${
                left ? 'border-[#00D1FF]' : 'border-[#FFC107]'
              } bg-transparent  text-white text-base md:text-[16px] lg:text-[25px] text-center font-roboto-n500`}
              title="Learn More"
            />
          </div>
        </motion.div>
      </article>
    )
  })
}
export default ProductItem
