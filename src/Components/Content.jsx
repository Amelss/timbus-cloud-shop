import Header from "./Header"
import Categories from "./Categories"
import Home from "./Home"
import Cart from "./Cart"
import Help from "./Help"
import Product from "./Product"
import { Routes, Route } from "react-router-dom";




export default function Content() {
  return (
      <div className="bg-backgroundGrey p-3">
          <div className="">
             <Header />
      </div>
      <div>
        <Routes >
         <Route exact path="/" element={<Home />}/> 
          <Route path="/Categories" element={<Categories /> } />
          <Route path="/Product" element={<Product /> } />
          <Route path="/Help" element={<Help /> } />
          <Route path="/Cart" element={<Cart /> } />

        </Routes>
        

      </div>
        
   

    </div>
  )
}
