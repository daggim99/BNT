import Header from '../components/layout/Header/Header'
import OurProducts from '../components/layout/Section/OurProduct/OurProduct'
import Product from '../components/layout/Product/Product'
import About from '../components/layout/Section/About/About'
import Business from '../components/layout/Section/Business/Business'

export default function Home() {
  return (
    <>
      <Header />
      <OurProducts />
      <Product />
      <About />
      <Business />
    </>
  )
}
