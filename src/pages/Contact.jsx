import { FaAddressBook } from "react-icons/fa6";
import Layout from "../Layout/Layout";
import { IoTime } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Layout>
      <div className=" text-3xl flex justify-center items-center font-bold ">
        <div className=" relative bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754495652/service-min_ojwx4r.jpg')] bg-center bg-cover h-[40vh] w-full flex justify-center items-center">
          <p className="text-white text-4xl font-bold z-20  font-lato">
            Contact
          </p>
          <div className="absolute top-0 left-0 w-full h-full bg-blacktra"></div>
        </div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white gap-5 p-8 justify-center items-center place-items-center">
        <div className="box  flex gap-3 flex-col justify-center items-center text-center border-r-[1px] md:border-r-gray-500">
          <div>
            <span className="text-5xl text-main">
              <FaAddressBook />
            </span>
          </div>
          <p className="text-[20px] font-semibold">Our Location</p>
          <p className="text-[20px]">
            23 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
          </p>
        </div>
        <div className="box flex gap-3 flex-col justify-center items-center text-center border-r-[1px] md:border-r-gray-500">
          <div>
            <span className="text-5xl text-main">
              <FaPhoneAlt />
            </span>
          </div>
          <p className="text-[20px] font-semibold">Our Phone</p>
          <p className="text-[20px]">
            23 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
          </p>
        </div>
        <div className="box flex gap-3 flex-col justify-center items-center text-center border-r-[1px] md:border-r-gray-500 ">
          <div>
            <span className="text-5xl text-main">
              <MdOutlineAlternateEmail />
            </span>
          </div>
          <p className="text-[20px] font-semibold">Our Email</p>
          <p className="text-[20px]">
            23 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
          </p>
        </div>

        <div className="box flex gap-3 flex-col justify-center items-center text-center border-r-[1px] ">
          <div>
            <span className="text-5xl text-main">
              <IoTime />
            </span>
          </div>
          <p className="text-[20px] font-semibold">Work Hours</p>
          <p className="text-[20px]">
            23 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
