import Layout from "../Layout/Layout";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { ToastContainer, toast } from "react-toastify";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
} from "react-spinners";
import { useEffect, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { FaProjectDiagram, FaShip, FaSitemap, FaTruck } from "react-icons/fa";
import { MdMergeType } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const notify = () => toast.success("✅ Saved successfully!");
  const [loading, setLoading] = useState();
  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const abouts = [
    {
      shipmentType: "Truck",
      category: "Inter State Delivery",
      description:
        "Efficient transport of goods within the same country using reliable trucking networks for short- and mid-range deliveries.",
      image:
        "https://res.cloudinary.com/de3iibogu/image/upload/v1754216654/2150172446_zz9jfu.jpg",
    },
    {
      shipmentType: "Truck",
      category: "Intra Africa shipment",
      description:
        "Cross-border trucking that connects land-accessible continents, handling customs and long-distance logistics over land routes.",
      image:
        "https://res.cloudinary.com/de3iibogu/image/upload/v1754216654/2151919263_h4zeo2.jpg",
    },
    {
      shipmentType: "Truck",
      category: "Logistic Delvery",
      description:
        "Rapid and recurring delivery of consumer essentials like food, beverages, and personal care items to retail outlets widthin a state.",
      image:
        "https://res.cloudinary.com/de3iibogu/image/upload/v1754217202/1070589_OMR0530_kzpz0d.jpg",
    },
    {
      shipmentType: "Truck",
      category: "Inter State",
      description: "Delivery from state to state within a country country.",
      image:
        "https://res.cloudinary.com/de3iibogu/image/upload/v1754217202/1070589_OMR0530_kzpz0d.jpg",
    },
    {
      shipmentType: "Ship",
      category: "Intercontinental shipment",
      description:
        "Global sea freight service for transporting industrial equipment and heavy machinery across continents using cargo ships.",
      image:
        "https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1370_mdxvhg.jpg",
    },
    {
      shipmentType: "Ship",
      category: "International",
      description:
        "Export and import of cars, motorcycles, and trucks via roll-on/roll-off (RORO) ships and container vessels form country to country.",
      image:
        "https://res.cloudinary.com/de3iibogu/image/upload/v1754216655/1372_halbs9.jpg",
    },
  ];

  return (
    <Layout>
      <div className="bg-main p-4 main">
        <div className="mt-2">
          <p className="text-2xl text-white font-semibold">
            Smarter logistics through shared cargo solutions.
          </p>
        </div>
        <div className="  w-full flex flex-col justify-center items-center section1 ">
          {/* <div>
          <button
            className="bg-white text-black p-4 rounded-md"
            onClick={notify}
          >
            Show Toast
          </button>
          <ToastContainer />
        </div> */}

          {/* <div>
          <MoonLoader loading={loading} size={50} color="#36d7b7" />
          {!loading && <p>Data is ready!</p>}
        </div> */}

          {/* <p className="text-blue-500 max-w-[300px]">
          <LinesEllipsis
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nostrum, praesentium veritatis amet adipisci sed unde eveniet veniam distinctio accusamus mollitia laboriosam debitis quibusdam? Aliquam at iure modi laborum unde?"
            maxLine="2"
            ellipsis="... 👀"
            trimRight
            basedOn="letters"
          />
        </p> */}

          <Swiper
            direction="horizontal"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-[100%]   bg-dry my-4 cursor-pointer font-lato"
          >
            {abouts.map((post) => (
              <SwiperSlide key={post.id}>
                <div
                  style={{
                    backgroundImage: `url(${post?.image})`,
                  }}
                  className={`w-full  bg-center bg-cover h-[400px] bg-white rounded shadow  border border-gray-200  text-logotext relative`}
                >
                  <div className=" absolute left-0 top-0 right-0 bottom-0 bg-trans2  w-full h-full p-4">
                    <h2 className="text-5xl font-semibold mb-2">
                      {post.category}
                    </h2>
                    <p className="font-semibold  text-2xl mb-2">
                      {post.shipmentType}
                    </p>
                    <p className="text-sm font-semibold  line-clamp-3">
                      {post.body}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full flex justify-center mt-28 flex-col lg:flex-row gap-12">
            <div className="py-6 flex flex-col gap-20 text-white w-full lg:w-1/2">
              <div className="w-full">
                <p className="font-lato text-2xl font-bold  pb-6">
                  CargoMerge – Smart Logistics for Everyone
                </p>
                <p className="font-lato text-lg ">
                  CargoMerge is an innovative logistics platform designed to
                  democratize cargo transportation. By leveraging smart shipment
                  merging, we enable users who cannot afford full-capacity
                  freight to combine loads with others, optimizing cost, space,
                  and efficiency. From individual shipments to multi-user cargo
                  merges,CargoMerge bridges the gap between capacity and
                  affordability.
                </p>
              </div>

              <div className="w-full ">
                <p className="font-lato text-2xl font-bold  pb-6">
                  CargoMerge – Smart Management
                </p>
                <p className="font-lato text-lg ">
                  Our system supports both admin-managed and user-initiated
                  merge requests — whether a transporter invites multiple users
                  to share space or a user requests to join an available
                  shipment, CargoMerge ensures flexible collaboration. Every
                  merge is tracked, every request is recorded, and every
                  delivery is transparent. Whether by truck or ship, within
                  borders or across continents, we provide an organized, fair,
                  and scalable logistics solution for cargo owners,
                  transporters, and recipients alike.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 rounded-md h-[500px] lg:h-auto  bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754426996/ai-generated-boat-picture_hgh5kl.jpg')] bg-center bg-cover"></div>
          </div>
        </div>
        <div className="section2 mt-28">
          <p className="text-3xl font-bold text-center text-white">
            Our Services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ">
            <div className="service">
              <div className="flex flex-col justify-center items-center">
                <p className=" par">
                  <FaShip className="w-16 h-16 icon" />
                </p>
                <p className="text-lg font-semibold">Sea Freight</p>
              </div>

              <p>
                We provide smart sea freight services by enabling multiple
                clients to share cargo space, significantly reducing shipping
                costs while ensuring safe and timely delivery — whether shipping
                by container or breakbulk.
              </p>
            </div>
            <div className="service">
              <div className="flex flex-col justify-center items-center">
                <p className="par">
                  <FaTruck className="w-16 h-16 icon" />
                </p>
                <p className="text-lg font-semibold ">Land transportation</p>
              </div>

              <p>
                Our land transportation service connects cargo owners with
                trusted transporters, enabling cost-effective and flexible
                truck-based shipping within regions or across borders. With
                CargoMerge, users can join or request logistics collaborations,
                making inland freight more accessible and efficient.
              </p>
            </div>
            <div className="service">
              <div className="flex flex-col justify-center items-center">
                <p className=" par">
                  <FaSitemap className="w-16 h-16 icon" />
                </p>
                <p className="text-lg font-semibold">Merging</p>
              </div>

              <p>
                At CargoMerge, we revolutionize inland freight by enabling
                collaborative shipment merging. Our platform empowers cargo
                owners to join forces, combining compatible shipments into a
                single delivery route — reducing costs, minimizing empty truck
                space, and improving overall efficiency.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Link
              to={`/services`}
              className=" border-2  border-white text-white p-4 rounded-sm hover:border-logotext transition ease-in-out duration-500 hover:bg-opa"
            >
              Our Service
            </Link>
          </div>
        </div>

        <div className="w-full section3 flex justify-center mt-28 flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 rounded-md h-[500px] lg:h-auto  bg-[url('https://res.cloudinary.com/de3iibogu/image/upload/v1754641839/2151998707_1_pjs0yl.jpg')] bg-center bg-cover"></div>
          <div className="py-6 flex flex-col gap-20 text-white w-full lg:w-1/2">
            <div className="w-full">
              <p className="font-lato text-2xl font-bold  pb-6">
                Why Cargomerger?
              </p>
              <p className="font-lato text-lg ">
                At CargoMerge, we make connections happen. Our platform links
                transporters with cargo owners and consolidation specialists,
                ensuring every load finds the right partner. Whether you need to
                move goods alone in a single shipment or combine your cargo with
                others, CargoMerge brings the right people together—faster,
                easier, and more efficiently. We don’t just move cargo—we move
                opportunities.
              </p>
            </div>

            <div className="w-full ">
              <p className="font-lato text-2xl font-bold  pb-6">
                Real-Time Updates on Transporter Availability
              </p>
              <p className="font-lato text-lg ">
                Stay informed with real-time notifications whenever a
                transporter becomes available. No more waiting in
                uncertainty—get instant updates so you can book your shipment at
                the perfect time. Our system connects you directly with trusted
                transporters, ensuring you never miss an opportunity to move
                your goods efficiently. Whether you’re shipping within the city
                or across regions, you’ll have complete visibility into
                availability, helping you plan ahead and save valuable time.
              </p>
            </div>
            <div className="w-full ">
              <p className="font-lato text-2xl font-bold  pb-6">
                Track Your Goods, Anytime, Anywhere
              </p>
              <p className="font-lato text-lg ">
                Stay in control with live shipment tracking right from your
                dashboard. Watch your goods move in real time, from pickup to
                delivery, with accurate location updates at every stage. Our
                tracking system gives you full visibility and peace of mind,
                ensuring you always know exactly where your shipment is and when
                it will arrive. No guesswork—just complete transparency every
                step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
