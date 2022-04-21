import { Navbar } from "./components/componentsExport"
import { Home, NotFound, ProductDescription } from "./pages/pagesExport"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/product/:id" element={<ProductDescription />} />
      </Routes>
    </Router>
  )
}

export default App
