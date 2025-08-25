import { Link, NavLink } from "react-router-dom";
import {
  FaInfoCircle,
  FaServicestack,
  FaShip,
  FaShippingFast,
} from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { RiAccountCircle2Fill, RiShipFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  // const [active, setActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const navLinks = [
    {
      id: 1,
      title: "About",
      path: "/about",
      icon: <RiShipFill />,
    },
    {
      id: 2,
      title: "Services",
      path: "/services",
      icon: <FaServicestack />,
    },
    {
      id: 3,
      title: "Contact",
      path: "/contact",
      icon: <TiContacts />,
    },
    {
      id: 4,
      title: "Register Cargo",
      path: "/cargoReg",
      icon: <RiShipFill />,
    },
    {
      id: 5,
      title: "Transporter",
      path: "/addtransporter",
      icon: <RiShipFill />,
    },
    {
      id: 6,
      title: "Account",
      path: "/login",
      icon: <RiAccountCircle2Fill />,
    },
  ];




  return (
    <div className="bg-main w-full">
      <div className="hidden lg:block">
        <div className="p-4  sticky top-0 z-50  flex justify-between items-center">
          <div className="nav flex justify-between ">
            <Link
              to={"/"}
              className="logo h-24 w-24 rounded-full bg-[url('/public/images/logo.png')] bg-center bg-cover object-cover"
            ></Link>
          </div>

          <div className="links flex justify-between items-center gap-12">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `link ${
                    isActive ? "bg-logotext text-black" : "text-logotext"
                  } font-semibold flex justify-center items-center gap-[5px] hover:bg-logotext hover:text-black transition ease-in-out duration-500 rounded-lg p-2`
                }
              >
                {item.title && <span>{item.title}</span>}
                <span className="flexRow">{item.icon}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="links flex justify-between items-center p-4">
          <div className="nav flex justify-between ">
            <Link
              to={"/"}
              className="logo h-24 w-24 rounded-full bg-[url('/public/images/logo.png')] bg-center bg-cover object-cover"
            ></Link>
          </div>

          <span
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
            className="text-logotext"
          >
            <IoMenu className="h-12 w-12" />
          </span>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen === null
            ? "hidden" // no animation during initial load
            : isMenuOpen
            ? "menuDown"
            : "menuUp max-h-0 overflow-hidden"
        } transition-all`}
      >
        <div className="p-4  flexCol ">
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `link ${
                  isActive ? "bg-logotext text-black" : "text-logotext"
                } font-semibold flex justify-center items-center gap-[5px] hover:bg-logotext hover:text-black transition ease-in-out duration-500 rounded-lg p-2 w-1/2`
              }
            >
              {item.title && <span>{item.title}</span>}

              <span className="flexRow">{item.icon}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
