import Layout from "../Layout/Layout";

const Services = () => {
  return (
    <Layout>
      <div className=" text-3xl flex justify-center items-center font-bold ">
        <div className=" relative bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754495652/service-min_ojwx4r.jpg')] bg-center bg-cover h-[40vh] w-full flex justify-center items-center">
          <p className="text-white text-4xl font-bold z-20  font-lato">
            Services
          </p>
          <div className="absolute top-0 left-0 w-full h-full bg-blacktra"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="serv w-full lg:h-auto h-[400px]  lg:w-[45%] bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1370_mdxvhg.jpg')] bg-center bg-cover "></div>


        <div className="serv w-full lg:w-[55%] bg-main p-4">
          <div className="flex flex-col gap-4 text-white ">
            <p className=" text-4xl font-semibold font-lato">
              Smart Cargo Connections
            </p>

            <p className="text-[22px]">
              CargoMerge transforms the way goods are shipped by linking cargo
              owners with trusted transporters for both solo and shared
              shipments. Whether you want to move a full load on your own or
              join forces to share cargo space, our platform ensures cost
              savings, faster arrangements, and reliable delivery. We make
              logistics smarter, more collaborative, and more accessible for
              everyone.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center  mt-12 gap-8 ">
            <div className=" fright ">
              <div className="h-44 w-44 rounded-full border-[10px] border-frame bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1372_halbs9.jpg')] bg-center bg-cover"></div>
              <p className="text-white text-lg font-bold">Sea Freight</p>
            </div>

            <div className="fright">
              <div className="h-44 w-44 rounded-full border-[10px] border-frame bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1372_halbs9.jpg')] bg-center bg-cover"></div>
              <p className="text-white text-lg font-bold">Merging</p>
            </div>
            <div className="fright">
              <div className="h-44 w-44 rounded-full border-[10px] border-frame bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1372_halbs9.jpg')] bg-center bg-cover"></div>
              <p className="text-white text-lg font-bold">Tracking</p>
            </div>
            <div className="fright">
              <div className="h-44 w-44 rounded-full border-[10px] border-frame bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1372_halbs9.jpg')] bg-center bg-cover"></div>
              <p className="text-white text-lg font-bold">
                Land Transportation
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
