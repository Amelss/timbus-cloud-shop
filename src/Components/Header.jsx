import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"


export default function Header() {

    // const [navBarOpen, setNavBarOpen] = useState(false);
    // const [openMenu, setOpenMenu] = useState(false);

    // const handleOpen = () => {
    //   setNavBarOpen(!navBarOpen);
    // };

    // const showMenu = () => {
    //   setOpenMenu(!openMenu);
    // };
  return (
    <div className="p-4">
      <div className="xl:hidden">
        <div>
          <h1 className="font-bold text-1xl">BLUESPACE</h1>
        </div>
        <div>
          <Menu>
            <Link to={"/"} className="menu-item">
              Home
            </Link>
            <Link to={"/Categories"} className="menu-item">
              Categories
            </Link>
            <Link to={"/Help"} className="menu-item">
              Help
            </Link>
            <Link to={"/Contact"} className="menu-item">
              Contact
            </Link>
            <Link to={"/Cart"} className="menu-item">
              Cart
            </Link>
            <Link to={"/"} className="menu-item">
              Join Bluespace
            </Link>
          </Menu>
        </div>
      </div>
      <div className="hidden xl:flex">

        
        
</div>
      <div className="hidden xl:flex justify-between items-center ">
        
            <div>
          <h1>BLUESPACE</h1>
        </div>
        <div className="flex justify-between ">
          <div className="bg-white" >
          <Link to={"/"} className="menu-item">
            Home
          </Link>
          <Link to={"/Categories"} className="menu-item">
            Categories
          </Link>
          <Link to={"/Help"} className="menu-item">
            Help
          </Link>
          <Link to={"/Contact"} className="menu-item">
            Contact
          </Link>
        </div>

         <div className="flex items-center ml-20">
        <Link to={"/Cart"} className="menu-item">
          Cart
        </Link>
        <button>Join Blue Space</button>
      </div>
        </div>
        
      </div>

      
    </div>
  );
}
