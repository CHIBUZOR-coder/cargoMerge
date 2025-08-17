import { MdConnectWithoutContact } from "react-icons/md";
import { FaCodeMerge } from "react-icons/fa6";
import Layout from "../Layout/Layout";
import { RiShip2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className=" text-3xl flex justify-center items-center font-bold ">
        <div className=" relative bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754495652/service-min_ojwx4r.jpg')] bg-center bg-cover h-[40vh] w-full flex justify-center items-center">
          <div className="flex justify-between flex-col lg:flex-row gap-8 items-center w-[70%] z-20">
            <div className="flex justify-center items-center gap-2 text-white">
              <p className="text-white text-4xl font-bold  font-lato">
                CONNECT
              </p>
              <span className="animate-bounce">
                <MdConnectWithoutContact />
              </span>
            </div>

            <div className="flex justify-center items-center gap-4 text-white">
              <p className="text-white text-4xl font-bold  font-lato">MERGE</p>
              <span className="animate-pulse">
                <FaCodeMerge />
              </span>
            </div>

            <div className="flex justify-center items-center gap-4 text-white">
              <p className=" text-4xl font-bold  font-lato">DELIVER</p>
              <span className="animate-pulse">
                <RiShip2Fill />
              </span>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-blacktra"></div>
        </div>
      </div>

      <div className="flex p-4 gap-4 flex-col lg:flex-row">
        <div className="about w-full lg:w-1/2 bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754495652/service-min_ojwx4r.jpg')] bg-center bg-cover rounded-sm h-[400px] lg:h-auto "></div>
        <div className="about w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-[22px]">
            CargoMerge is a dynamic logistics platform that connects
            transporters with cargo owners, enabling efficient single or shared
            shipments to reduce costs and maximize delivery efficiency
            worldwide.
          </p>
          <p className="text-5xl font-lato font-semibold text-main  leading-large">
            We understand that every shipper has unique cargo and delivery
            needs.
          </p>
          <p className="text-[22px]">
            Our platform is designed to seamlessly connect cargo owners and
            transporters, supporting both solo and shared shipments. With a
            diverse network of verified transporters across sea, land, and air,
            CargoMerge enables cost-effective, flexible, and reliable logistics
            partnerships—without the complexity of traditional freight
            forwarding.
          </p>
        </div>
      </div>

      <div className="bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1380_kkilw9.jpg')] bg-center bg-cover h-[50vh] lg:h-[100vh] w-full mt-28 relative flex justify-center items-center">
        <Link className="bg-logotext hover:bg-white transition ease-in-out duration-500 p-4 inline-block rounded-md text-main md:text-xl  lg:text-2xl font-semibold z-20 absolute bottom-10 md:bottom-20">
          Contact Us
        </Link>

        <p className=" text-xl md:text-2xl lg:text-5xl font-lato font-semibold text-white z-20  leading-big text-center absolute top-20">
          Empowering businesses through digital logistics
        </p>
        <div className="w-full h-full absolute top-0 left-0 bg-blacktra"></div>
      </div>
    </Layout>
  );
};

export default About;
