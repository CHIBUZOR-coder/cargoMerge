import { Link, NavLink } from "react-router-dom";
import {
  FaInfoCircle,
  FaServicestack,
  FaShip,
  FaShippingFast,
} from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { RiAccountCircle2Fill, RiShipFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
  // const [active, setActive] = useState(0);

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
      path: "/transporterReg",
      icon: <RiShipFill />,
    },
    {
      id: 6,
      title: "",
      path: "/login",
      icon: <RiAccountCircle2Fill />,
    },
  ];

  return (
    <div className="hidden lg:block">
      <div className="p-4 bg-main sticky top-0 z-50  flex justify-between items-center">
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
              <span>{item.title ? item.title : ""}</span>
              <span>{item.icon}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
