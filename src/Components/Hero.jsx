export default function Hero() {
  return (
    <div className="px-4 pb-10 mt-7">
      <h3 className="text-xs pt-4">
        <span className="font-light text-gray-400 ">Home \ Categories \ </span>
        <span className="">Office Seats</span>
      </h3>
      <div className="block xl:flex items-center justify-between">
        <h1 className="my-5 xl:my-0 text-3xl xl:mb-0">Office Seats Category</h1>
        <p className="xl:w-96 text-sm xl:text-lg">
          Find the perfect chair for your workspace: Ergonomic, comfortable and
          designed for your productivity
        </p>
      </div>

      <div className="block xl:flex items-center">
        <div className="flex items-center  bg-gray-200 px-3 py-2 mt-3 xl:mt-0 w-20 xl:w-auto">
          <img src="./filter-outline.png" alt="Filter" className="w-4" />
          <p className="text-xs">Filter</p>
        </div>

        <div className="flex items-center w-48 xl:w-auto bg-gray-200 mt-3 xl:mt-0 xl:ml-5 px-3 py-2">
          <p className="text-xs">Subcategory | Ergonomic</p>
          <img
            src="./chevron-down.png"
            alt="Chevron arrow down"
            className="w-4"
          />
        </div>
        <div className="flex items-center bg-gray-200 mt-3 xl:mt-0 xl:ml-5 px-3 py-2 w-40 xl:w-auto">
          <p className="text-xs">Price | Under $700</p>
          <img
            src="./chevron-down.png"
            alt="Chevron arrow down"
            className="w-4"
          />
        </div>
      </div>
    </div>
  );
}
