import axios from "axios"

const API_URL = "/api/products"

const getAllProducts = async () => {
  const { data } = await axios(`${API_URL}/getAllProducts`)
  return data
}
const getSingleProduct = async (params) => {
  const { data } = await axios(`${API_URL}/getSingleProduct?${params}`)
  return data
}
const productService = {
  getAllProducts,
  getSingleProduct,
}

export default productService
