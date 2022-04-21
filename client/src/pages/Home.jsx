import products from "../constants/products"
import { ProductItem } from "../components/componentsExport"
const Home = () => {
  return (
    <div className="text-3xl text-center container mx-auto px-4">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {products.map((product) => {
          return <ProductItem product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default Home
