/* eslint-disable react/prop-types */

export default function ProductCard({ item }) {
  return (
    <div className="mt-1 bg-white pt-5">
      <div className="">
        <img src={item.productImage} alt="Product image" className="w-full m-auto pb-2" />
        <hr className="w-80 xl:w-[600px] m-auto xl:px-4"/>
        <div className="flex items-center justify-between mt-3 px-2">
          <h1 className="mt-1">{item.productName}</h1>
          <img src="./cart-icon.png" alt="Cart Icon" className="w-7" />
        </div>

        <p className="mt-1 pt-2 pb-4 px-2">{item.price}</p>
      </div>
    </div>
  );
}
