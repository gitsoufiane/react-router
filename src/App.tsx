import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/ OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import FeaturedProduct from "./components/FeaturedProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
