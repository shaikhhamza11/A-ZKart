import { Link } from "react-router-dom"
const ProductItem = ({ product }) => {
  return (
    <div className="card card-normal bg-base-100 shadow-2xl p-3 my-4 ">
      <Link to={`/product/${product.id}`}>
        <figure>
          <img className="object-cover h-48" src={product.image} alt="Shoes" />
        </figure>
        <div className="card-body justify-end">
          <h1 className="card-title text-l min-w-80 ">{product.name}</h1>
          <h2 className=" font-bold text-xl self-start">
            Rating:{product.rating}
          </h2>
          <h2 className="font-bold text-xl self-start">
            Price:{product.price}
          </h2>
        </div>
      </Link>
      <div className="card-actions justify-end content-end">
        <button className=" btn  sm:btn-md md:btn-md  btn-primary">
          Buy Now
        </button>
        <button className="btn  sm:btn-md md:btn-md btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem
