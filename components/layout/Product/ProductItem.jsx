import Image from 'next/Image'

import Button from '../../UI/Button/Button'

import img1 from '/images/Products/freshcoImage.png'
import img2 from '/images/Products//degaImage.png'

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

const ProductItem = () =>
  products.map((product) => {
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
        key={product.id}
        className={`${base} group transition-d h-[65vh] md:h-full md:w-full grid grid-cols-[1fr_1fr] grid-rows-[min-content_min-content_min-content_1fr]`}
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
        <figure
          style={logo}
          className={`${
            left ? 'border-[#FFF1C9]' : 'border-[#DAF4F6]'
          } bg-white my-6 transition-d filter brightness-100 peer-hover:brightness-110 lg:-translate-y-[50%] border-2 md:border-4 shadow-md md:shadow-lg lg:shadow-xl rounded-full relative w-48 h-24 md:w-52 md:h-28 lg:w-60 lg:h-32 text-center col-start-1 col-end-3 row-start-1 row-end-2 justify-self-center bg-center bg-no-repeat bg-cover`}
        />
        <div
          className={`z-10 ${
            left
              ? 'col-start-1 col-end-2 justify-self-end'
              : 'col-start-2 col-end-3 justify-self-start'
          } transition-d filter brightness-100 peer-hover:brightness-200 row-start-2 row-span-1 self-start  text-white -mt-12`}
        >
          <h2
            className={`${
              left ? 'text-center md:text-right' : 'text-center md:text-left'
            } transition-d filter brightness-100 peer-hover:brightness-200 w-[240px] text-white font-lato-n900 font-bold lg:text-[40px]`}
          >
            {product.title}
          </h2>
        </div>
        <div
          className={`z-10 ${
            left
              ? 'col-start-1 col-end-2 justify-self-center md:justify-self-end md:pr-0'
              : 'col-start-2 col-end-3 justify-self-center md:justify-self-start md:pl-0'
          } transition-d filter brightness-100 peer-hover:brightness-200 row-start-3 row-span-1 self-start text-white px-9 py-3 `}
        >
          <p
            className={`transition-d filter brightness-100 peer-hover:brightness-200 ${
              left ? 'text-center md:text-right ' : 'text-center md:text-left'
            } text-[15px] w-[280px]`}
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
            className={`${
              left
                ? 'border-[#00D1FF] text-center md:text-right'
                : 'border-[#FFC107]'
            } bg-transparent  text-white text-base px-6 py-2`}
            title="Learn More"
          />
        </div>
      </article>
    )
  })

export default ProductItem
