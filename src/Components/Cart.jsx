import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"; 

export default function Cart() {

  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      fetch(`./data.json`)
        .then((res) => res.json())
        .then((data) => setSimilarProducts(data))
        .catch((err) => console.error("Error fetching data:", err));
    };

    fetchData();
  }, []); 

const handleQuantityChange = (amount) => {
  setQuantity((prevQuantity) => {
    const newQuantity = prevQuantity + amount;
    return newQuantity < 1 ? 1 : newQuantity;
  });
};
  
  return (
    <div>
      <div className="block xl:flex items-center justify-between mt-10">
        <div>
          <p className="text-xs mb-3">
            <span className="text-gray-300 mb-10">Home </span>\ Cart
          </p>
          <div className="flex items-center justify-between mb-10">
            <img
              src="/products/black-office-chairs-3.jpeg"
              alt="Product image"
              className="w-20 xl:w-24"
            />
            <div className="ml-10">
              <h1 className="mb-3">Albus Medium - $650</h1>
              <p className="text-xs xl:text-base xl:w-96">
                Comfort and functionality combined. this chair promotes the back
                health an beautifies the office environment
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center ml-3">
                <button
                  className="px-2 py-1 bg-gray-200 text-sm"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <p className="px-3 text-sm">{quantity}</p>
                <button
                  className="px-2 py-1 bg-gray-200 text-sm"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            <button className="bg-black text-white p-4 w-40 text-sm">Remove</button>
          </div>
        </div>

        <div>
          <div className="bg-white p-3">
            <h1 className="text-xl font-bold mb-3">Cart Summary</h1>
            <p className="hidden xl:block text-sm text-gray-600 mb-3">Complete your purchase by providing your payment details</p>
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-300 ">Subtotal</p>
              <p>$650</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-300">Discount</p>
              <p>$0</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="">Total</p>
              <p>$650</p>
            </div>
            <Link to={"/Checkout"}><div className="text-center mt-7">
              
              
              <button className="bg-black text-white p-4 w-full ">
                Checkout
              </button>
            </div>
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-lg xl:text-3xl mt-10 font-bold">Similar to this Product</h1>
      <div className="grid xl:grid-cols-3 gap-3 mt-5">
        {similarProducts.slice(1, 4).map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
