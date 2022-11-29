import ProductItem from './ProductItem'

const Product = () => {
  return (
    <section className="z-50 h-[132vh] mb-9 md:max-h-[75vh] md:min-h-[450px] grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] md:grid-rows-[1fr]">
      <ProductItem />
    </section>
  )
}

export default Product
