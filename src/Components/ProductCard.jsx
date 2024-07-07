/* eslint-disable react/prop-types */

export default function ProductCard({ item }) {
  return (
    <div className="mt-4 bg-pink-300">
      <div className="">
        <img src={item.productImage} alt="Product image" className="w-56 m-auto" />
        <hr />
        <div className="flex items-center justify-between">
          <h1 className="mt-1">{item.productName}</h1>
          <img src="./cart-icon.png" alt="Cart Icon" className="w-7" />
        </div>

        <p className="mt-1">{item.price}</p>
      </div>
    </div>
  );
}
