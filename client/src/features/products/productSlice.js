import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../../constants/status"
import axios from "axios"

// thunk
export const fetchAllProducts = createAsyncThunk("products/fetch", async () => {
  const { data } = await axios("/api/products/getAllProducts")
  return data
})
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProducts",
  async (prodId, thunkApi) => {
    try {
      const params = new URLSearchParams({
        id: prodId,
      })
      const { data } = await axios(`/api/products/getSingleProduct?${params}`)
      console.log(data)
      return data
    } catch (e) {
      console.log(e)
      return thunkApi.rejectWithValue("Something went wrong")
    }
  }
)
// slice
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    singleProduct: {},
    status: STATUS.IDLE,
  },
  reducers: {
    removeSingleProduct(state, action) {
      state.singleProduct = {}
    },
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state) => {
      state.status = STATUS.LOADING
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload
      state.status = STATUS.IDLE
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.status = STATUS.ERROR
    },
    [fetchSingleProduct.pending]: (state, action) => {
      state.status = STATUS.LOADING
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.singleProduct = action.payload
      state.status = STATUS.IDLE
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      console.log(action)
      state.status = STATUS.ERROR
    },
  },
})

export const { removeSingleProduct } = productSlice.actions

const productReducer = productSlice.reducer

export default productReducer
