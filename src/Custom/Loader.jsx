// Loader.jsx
import React from "react";
import { FaTruck } from "react-icons/fa";
// import { Truck, TruckElectric } from "lucide-react";
import Icon from "@mdi/react";
import { mdiTruckCargoContainer } from "@mdi/js";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center relative rounded-full  h-[250px] w-[250px] ringg ">
      {/* Animated merge circles */}
      {/* <div className="flex space-x-2">
        <div className="w-6 h-6 bg-logotext rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-logotext rounded-full animate-bounce delay-150"></div>
        <div className="w-6 h-6 bg-logotext rounded-full animate-bounce delay-300"></div>
      </div> */}

      {/* Animated Cargomerge text */}
      <div className="flex justify-center items-center">
        <p className=" text-lg font-bold text-logotext tracking-wide animate-pulse">
          CargoMerge...
        </p>
        <span className="animate-truck">
          <Icon
            path={mdiTruckCargoContainer}
            size={2} // bigger size
            color="currentColor" // or Tailwind color
            className="text-logotext animate-drive"
          />
        </span>
      </div>
    </div>
  );
}

export default Loader;
