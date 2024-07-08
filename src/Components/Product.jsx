import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard"; 
import { Link } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        const selectedProduct = data.find((item) => item.id === id);
        setProduct(selectedProduct);

       
        const similarItems = data.filter((item) => item.id !== id);
        setSimilarProducts(similarItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="block xl:flex justify-between mt-5 xl:pt-10">
        <img
          src={product.productImage}
          alt={product.productName}
          className=""
        />
        <div className="bg-white xl:h-80 xl:w-[500px] pb-5  xl:pb-20 pt-6 px-6 mt-10 xl:mt-0">
          <h1 className="text-xl mb-3">{product.productName}</h1>
          <p className="text-gray-400 mb-3">{product.price}</p>
          <p className="text-gray-400 mb-6">{product.description}</p>
          <p className="bg-green-300 p-1 w-20 text-xs text-green-700 text-center mt-2 mb-8">
            Available
          </p>
          <div className="xl:flex items-center justify-between">
            <div className="flex items-center mb-4 xl:mb-0">
              <p>Quantity</p>
              <div className="flex items-center ml-3">
                <button
                  className="px-2 py-1 bg-gray-200"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <p className="px-3">{quantity}</p>
                <button
                  className="px-2 py-1 bg-gray-200"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            <Link to="/Cart">
              
             
            <div className="bg-black px-5 w-56 xl:w-auto xl:px-12 py-5 flex items-center">
              
              <button className="text-white text-sm xl:text-base text-center font-light mx-auto">
                Add To Cart
              </button>
              <img
                src="/cart-outline-white.png"
                alt="cart"
                className="w-6 xl:ml-1 mx-auto"
              />
            </div> </Link>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl mt-10 mb-5">Similar to this Product</h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {similarProducts.slice(0, 3).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
