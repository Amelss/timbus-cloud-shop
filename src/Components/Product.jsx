import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard"; // Make sure to import your ProductCard component

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

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

        // Filter out the current product to find similar products
        const similarItems = data.filter((item) => item.id !== id);
        setSimilarProducts(similarItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
  }, [id]);

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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p>Quantity</p>
              <p className="ml-3">1</p>
            </div>
            <div className="bg-black px-12 py-5 flex items-center ">
              <button className="text-white text-center">Add To Cart</button>
              <img
                src="/cart-outline-white.png"
                alt="cart"
                className="w-6 ml-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl mt-10 mb-5">Similar to this Product</h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {similarProducts.slice(2,5).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
