import Image from 'next/image'

import Button from '../../UI/Button/Button'

import product_1 from '../../../public/images/Products/freshcoImage.png'
import product_2 from '../../../public/images/Products/degaImage.png'

const products = [
  {
    id: 'p1',
    title: 'Freshco',
    text: 'Lorem ipsum dolor sit ament, consectetur dehiscing Elia. Quietus nill eros, pulling facility justed Hollis, Auster consent ursa. Moral a addendum meatus.',
    left: true,
  },
  {
    id: 'p2',
    title: 'Dega Water',
    text: 'Lorem ipsum dolor sit ament, consectetur dehiscing Elia. Quietus nill eros, pulling facility justed Hollis, Auster consent ursa. Moral a addendum meatus.',
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
      backgroundImage: `url('/images/Logo/${
        left ? 'freshcoLogo.svg' : 'degaLogo.svg'
      }')`,
      backgroundOrigin: 'border',
      backgroundClip: 'border',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    const style = {
      backgroundImage: `linear-gradient(rgb(28, 10, 0, 0.7), rgb(28, 10, 0, 0.7)), url('/images/Products/${
        left ? 'freshcoImage.png' : 'degaImage.png'
      }')`,
      backgroundOrigin: 'border',
      backgroundClip: 'border',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    return (
      <article
        style={style}
        key={product.id}
        className={`${base} h-[65vh] md:h-full md:w-full grid grid-cols-[1fr] grid-rows-[min-content_1fr_min-content_1fr]`}
      >
        <figure
          style={logo}
          className={`${
            left ? 'border-[#FFF1C9]' : 'border-[#DAF4F6]'
          } my-6 bg-[url("/images/Icons/WaterIcon.png")] peer-hover:blur-sm lg:-translate-y-[50%] border-2 md:border-4 shadow-md md:shadow-lg lg:shadow-xl rounded-full relative w-48 h-24 md:w-52 md:h-28 lg:w-60 lg:h-32 text-center col-start-1 col-end-3 row-start-1 row-end-2 justify-self-center bg-center bg-no-repeat bg-cover`}
        ></figure>
        <div className="row-start-2 row-span-1 justify-self-center self-center text-center  text-white">
          <h2 className="card-title text- white font-lato-n900 text-5xl">
            {product.title}
          </h2>
        </div>
        <div className="row-start-3 row-span-1 justify-self-center self-center text-center  text-white px-12 py-3">
          <p>{product.text}</p>
        </div>
        <div className="card-actions row-start-4 row-span-1 justify-self-center  text-white self-center">
          <Button
            className={`${
              left ? 'border-[#00D1FF]' : 'border-[#FFC107]'
            } bg-transparent  text-white text-base px-6 py-2`}
            title="Learn More"
          />
        </div>
      </article>
    )
  })

export default ProductItem
