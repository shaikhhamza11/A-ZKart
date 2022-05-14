import { Navbar } from "./components/componentsExport"
import { Home, NotFound, ProductDescription, Cart } from "./pages/pagesExport"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/product/:id" element={<ProductDescription />} />
      </Routes>
      <ToastContainer limit={3} autoClose={200} />
    </Router>
  )
}

export default App
