import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="xl:mb-5">
      <div className="xl:hidden bg-white px-4 py-3">
        <div>
          <h1 className="font-bold text-1xl">BLUESPACE</h1>
        </div>
        <div>
          <Menu
            right
            isOpen={openMenu}
            onStateChange={({ isOpen }) => setOpenMenu(isOpen)}
          >
            {/* <Link to="/" className="menu-item" onClick={closeMenu}>
              Home
            </Link> */}
            <Link to="/Categories" className="menu-item" onClick={closeMenu}>
              Categories
            </Link>
            <Link to="/Help" className="menu-item" onClick={closeMenu}>
              Help
            </Link>
            <Link to="/Contact" className="menu-item" onClick={closeMenu}>
              Contact
            </Link>
            <Link to="/Cart" className="menu-item" onClick={closeMenu}>
              Cart
            </Link>
            <Link to="/" className="menu-item" onClick={closeMenu}>
              Join Bluespace
            </Link>
          </Menu>
        </div>
      </div>
      <div className="hidden xl:flex justify-between items-center">
        <div className="bg-white w-full py-3 px-2">
          <h1 className="ml-3 font-bold text-2xl">BLUESPACE</h1>
        </div>
        <div className="flex items-center">
          <div className="bg-white  py-3 px-6">
            {/* <Link to="/" className="">
              Home
            </Link> */}
            <Link to="/Categories" className="ml-5">
              Categories
            </Link>
            <Link to="/Contact" className="ml-5">
              Contact
            </Link>
            <Link to="/Help" className="ml-5">
              Help
            </Link>
          </div>

          <div className="flex ml-10 items-center">
            <div className="flex items-center bg-white pl-4 pr-7 py-3">
              <Link to="/Cart" className=" ">
                Cart
              </Link>
              <img src="./cart-outline.png" alt="Cart image" className="w-4 ml-2"/>
            </div>

            <div className="mr-5">
              <button className="ml-5 bg-black text-white text-xs w-full px-7 py-2 ">
                Join Blue Space
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
