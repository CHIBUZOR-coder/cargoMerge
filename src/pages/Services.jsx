import Layout from "../Layout/Layout";

const Services = () => {
  return (
    <Layout>
      <div className="bg-main text-3xl flex justify-center items-center font-bold ">
        <div className="bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1370_mdxvhg.jpg')] bg-cover bg-center w-full h-[250px] flex justify-center items-center ">
          <p className="text-3xl relative font-bold text-center text-white z-10">
            Services
          </p>

          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 "></div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
