import { Link, NavLink } from "react-router-dom";
import { FaInfoCircle, FaShip, FaShippingFast } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { RiAccountCircle2Fill, RiShipFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";

const Navbar = () => {
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
          <Link className="link" to={"/about"}>
            <span>About</span>
            <span>
              <RiShipFill />
            </span>
          </Link>

          <Link className="link" to={"/about"}>
            Register Cargo
            <span>
              <RiShipFill />
            </span>
          </Link>
          <Link className="link" to={"/about"}>
            Transporter
            <span>
              <RiShipFill />
            </span>
          </Link>

          <Link className="link" to={"/about"}>
            <span>Contact</span>
            <span>
              <TiContacts />
            </span>
          </Link>
          <Link className="link" to={"/about"}>
            <span> Account</span>
            <span>
              <RiAccountCircle2Fill />
            </span>
          </Link>
          {/* <Link className="link" to={"/about"}>
          <span>Alerts</span>
          <span>
            <MdMessage />
          </span>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
