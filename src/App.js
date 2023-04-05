import React from "react";
// import Home from "./views/user/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./views/user/Login/Login";
import AboutLoading from "./components/AboutLoading";
import SignUp from "./views/user/SignUp/SignUp";
import WhishList from "./views/user/Whishlist/Whishlist";
import Cart from "./views/user/Cart/Cart";
import Account from "./views/user/Account/Account";

const LazyHome = React.lazy(() => import("./views/user/Home/Home"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<AboutLoading />}>
            <LazyHome />
          </React.Suspense>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/whish-list" element={<WhishList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
