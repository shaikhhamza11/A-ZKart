import { useParams } from "react-router-dom"
import products from "../constants/products"
const ProductDescription = () => {
  const params = useParams()
  const product = products.find((product) => product.id === Number(params.id))
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div className="h-full bg-base-100 p-4 md:col-start-1 md:col-end-3">
        <div className="card shadow-lg p-8">
          <h1 className="card-title mb-4">{product.name}</h1>
          <figure className="md:w-2/4">
            <img
              className="object-cover w-full h-full  mb-4"
              src={product.image}
              alt="Shoes"
            />
          </figure>
          <p className="text-xs  md:text-lg leading-7">
            <span className="font-bold">Description:</span>
            {product.description}
          </p>
        </div>
      </div>
      <div className="bg-base-100 m-4">
        <div className="card text-xs md:text-lg shadow-lg p-8">
          <h1 className="font-bold my-2">Price:{product.price}</h1>
          <hr />
          <h1 className=" font-bold my-2">Select quantity</h1>
          <select className="select select-primary my-4 ">
            {[...Array(product.countInStock).keys()].map((count, i) => (
              <option value={i + 1} key={count}>
                {i + 1}
              </option>
            ))}
          </select>

          <div className="btn btn-sm md:btn-md rounded-none btn-primary mt-2">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
