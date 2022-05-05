import products from "../constants/products"
import { ProductItem } from "../components/componentsExport"
import { useEffect, useState } from "react"
import axios from "axios"
const Home = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    try {
      const { data } = await axios("/api/products")
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchProducts()
    console.log("products", products)
  }, [])

  return (
    <div className="text-3xl text-center container mx-auto px-4">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {products.map((product) => {
          return <ProductItem product={product} key={product._id} />
        })}
      </div>
    </div>
  )
}

export default Home
