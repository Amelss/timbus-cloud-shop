import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="block md:flex items-center justify-between bg-white p-4 mt-6">
        <div>
          <h1 className="font-bold text-1xl">BLUESPACE</h1>
        </div>

        <div>
          <Link to="/Categories" className="">
            Categories
          </Link>
          <Link to="/" className="ml-5">
            Contact
          </Link>
          <Link to="/" className="ml-5">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}
