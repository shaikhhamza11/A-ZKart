import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../features/products/productSlice"
import cartReducer, { getTotal } from "../features/cart/cartSlice"

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
})

store.dispatch(getTotal())

export default store
