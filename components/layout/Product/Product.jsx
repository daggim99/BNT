import ProductItem from './ProductItem'

const Product = () => {
  return (
    <section className="md:h-[75vh] grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] md:grid-rows-[1fr]">
      <ProductItem />
    </section>
  )
}

export default Product
