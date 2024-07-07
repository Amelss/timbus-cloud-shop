// Product.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
      <h1>{product.productName}</h1>
      <img src={product.productImage} alt={product.productName} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
