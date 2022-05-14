import { ProductItem, Loading } from "../components/componentsExport"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAllProducts } from "../features/products/productSlice"
import { STATUS } from "../constants/status"
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const { products, status } = useSelector((state) => state.product)
  // const products = []

  return status === STATUS.LOADING ? (
    <Loading />
  ) : status === STATUS.ERROR ? (
    <h1>Something went wrong</h1>
  ) : (
    <div className="text-3xl text-center container mx-auto px-4 mt-16">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {products.map((product) => {
          return <ProductItem product={product} key={product._id} />
        })}
      </div>
    </div>
  )
}
export default Home
