import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    cartTotalQuantity:
      JSON.parse(localStorage.getItem("cartTotalQuantity")) || 0,
    cartTotalAmount: JSON.parse(localStorage.getItem("cartTotalQuantity")) || 0,
  },
  reducers: {
    addToCart(state, action) {
      const { payload: product } = action
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === product._id
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += product.quantity
        toast.info(`${product.name}  quantity increased`, {
          position: "bottom-left",
        })
      } else {
        state.cartItems.push(product)
        toast.success(`${product.name} added to cart`, {
          position: "bottom-left",
        })
      }
      state.cartTotalQuantity += product.quantity
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      )
    },
    removeFromCart(state, action) {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      )
      state.cartItems = newCartItems
      state.cartTotalQuantity -= action.payload.quantity
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

      toast.error(`${action.payload.name} remove from cart`, {
        position: "bottom-left",
      })
    },
    clearCart(state) {
      state.cartItems = []
      state.cartTotalQuantity = 0
      state.cartTotalAmount = 0
      localStorage.removeItem("cartItems")
      localStorage.removeItem("cartTotalAmount")
      localStorage.removeItem("cartTotalQuantity")
      toast.error(`All products removed from cart`, {
        position: "bottom-left",
      })
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      )
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1

        state.cartTotalQuantity -= 1
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        localStorage.setItem(
          "cartTotalQuantity",
          JSON.stringify(state.cartTotalQuantity)
        )

        toast.info("Decrease quantity", {
          position: "bottom-left",
        })
      }
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      )
      state.cartItems[itemIndex].quantity += 1
      state.cartTotalQuantity += 1
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      )
      toast.info("Increased quantity", {
        position: "bottom-left",
      })
    },
    getTotal(state, action) {
      const subtotal = state.cartItems.reduce((cartAcc, cartItem) => {
        const { price, quantity } = cartItem
        const itemQuanity = price * quantity
        cartAcc += itemQuanity
        return cartAcc
      }, 0)
      state.cartTotalAmount = subtotal
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  getTotal,
} = cartSlice.actions
const cartReducer = cartSlice.reducer

export default cartReducer
