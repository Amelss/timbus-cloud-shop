import { useEffect, useState } from "react";

import ProductCard from "./ProductCard"; 

export default function Cart() {

  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`./data.json`)
        .then((res) => res.json())
        .then((data) => setSimilarProducts(data))
        .catch((err) => console.error("Error fetching data:", err));
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div className="block xl:flex items-center justify-between">
        <div>
          <p>Home \ Cart</p>
          <div className="flex items-center">
            <img src="" alt="" />
            <div>
              <h1>Albus Medium - $650</h1>
              <p>
                Comfort and functionality combined. this chair promotes the back
                health an beautifies the office environment
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Quantity</p>
            <button>Remove</button>
          </div>
        </div>

        <div>
          <div className="bg-white">
            <h1>Cart Summary</h1>
            <p>Complete your purchase...</p>
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>$650</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Discount</p>
              <p>$0</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Total</p>
              <p>$650</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>

      <h1>Similar to this Product</h1>
      <div className="block xl:flex items-center justify-center">
        {similarProducts.slice(1, 4).map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
