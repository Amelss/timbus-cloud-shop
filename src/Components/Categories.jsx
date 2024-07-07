import Hero from "./Hero"
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Categories() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`./data.json`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error("Error fetching data:", err));
    };

    fetchData();
  }, []); 

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-10 gap-6">
        {product.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} >
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
