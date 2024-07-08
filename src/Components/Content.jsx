import Header from "./Header"
import Categories from "./Categories"
import Cart from "./Cart"
import Help from "./Help"
import Contact from "./Contact"
import Product from "./Product"
import Checkout from "./Checkout"
import { Routes, Route } from "react-router-dom";




export default function Content() {
  return (
    <div className="bg-backgroundGrey p-3">
      <div className="">
        <Header />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<Help />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}
