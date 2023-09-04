import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/ OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import FeaturedProduct from "./components/FeaturedProduct";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import React from "react";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
