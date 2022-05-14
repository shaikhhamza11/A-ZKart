import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FaArrowCircleLeft } from "react-icons/fa"
import { useDispatch } from "react-redux"
import {
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  getTotal,
} from "../features/cart/cartSlice"
import { useEffect } from "react"
const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems, cartTotalAmount } = cart
  console.log(cartTotalAmount, "cart")
  const dispatch = useDispatch()
  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeFromCart(item))
    } else {
      dispatch(decreaseQuantity(item))
    }
  }

  useEffect(() => {
    dispatch(getTotal())
  }, [cart, dispatch])

  return (
    <div className="mt-24 px-8 py-4">
      <h2 className="font-normal  md:text-3xl text-center">Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <div
          className="flex items-center justify-center flex-col gap-4 text-xl p-4 mt-4 
          md:text-3xl
          "
        >
          <h2>Your cart is empty</h2>
          <Link to="/" className="flex gap-x-2">
            <FaArrowCircleLeft className="mt-2" />
            <span>Start Shopping</span>
          </Link>
        </div>
      ) : (
        <div className="w-full">
          <div className="m-4 text-xs px-4 sm:text-lg uppercase font-normal  titles text-left ">
            <h3 className="md:pl-2">Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3 className="pr-2 justify-self-end">Total</h3>
          </div>
          <div className="cart-items mt-4">
            {cartItems?.map((item) => (
              <div
                className="cart-item border-t border-t-slate-500 border-info px-2 "
                key={item._id}
              >
                <div className="cart-product flex my-8 flex-col md:flex-row  ">
                  <img
                    className="w-24   md:w-24 md:max-w-full mr-2"
                    src={item.image}
                    alt="loading...."
                  />
                  <div>
                    <h3 className="font-normal text-xs  sm:text-sm  md:text-lg">
                      {item.name}
                    </h3>
                    <button
                      className="border-none outline-none bg-none text-gray-500 mt-2 hover:text-gray-800"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-xs md:text-lg p-4">${item.price}</div>
                <div
                  className=" flex items-center justify-center flex-col xs:flex-row  min-w-max md:w-32 h-max max-w-full border-2 border-solid border-slate-500 rounded-md p-0
                md:gap-4 md:p-4"
                >
                  <button
                    className="btn btn-ghost"
                    onClick={() => handleDecrease(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <div className="font-semi-bold">{item.quantity}</div>
                  <button
                    className="btn btn-ghost"
                    onClick={() => dispatch(increaseQuantity(item))}
                  >
                    +
                  </button>
                </div>
                <div className="cart-product-total-price justify-self-end  font-bold">
                  {item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary flex justify-between items-start border-t-2 border-t-solid border-t-slate-500 p-4">
            <button
              className=" w-16 text-sm md:text-l md:w-32 md:max-w-full md:h-10 rounded-lg tracking-wider border-2 border-solid border-slate-400 text-slate-500 bg-none outline-none cursor-pointer btn btn-ghost"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <div className="cart-checkout w-36 sm:w-72 md:max-w-full">
              <div className="subtotal flex justify-between md:text-xl">
                <span>Subtotal </span>
                <span className="font-bold">${cartTotalAmount}</span>
              </div>
              <p className="font-extralight text-xs md:text-sm my-4">
                Taxes and shipping calculated at checkout
              </p>
              <button className=" md:w-96 md:max-w-full h-10 rounded-lg tracking-wider border-2 border-solid border-slate-400 tex t-slate-500 bg-none outline-none cursor-pointer bg-primary btn text-white  ">
                Check out
              </button>
              <div
                className="flex items-center justify-center flex-col gap-4 text-xl p-4 mt-4 
          md:text-xl
          "
              >
                <Link to="/" className="flex gap-x-2">
                  <FaArrowCircleLeft className="mt-2" />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
