import { useState } from "react";

/* eslint-disable react/prop-types */
const AmenitiesAndVicinity = ({ property }) => {
  const [showMobileDiv, setShowMobileDiv] = useState(false);

  function toggleMobileDiv() {
    setShowMobileDiv(!showMobileDiv);
  }

  const mobileDiv = (
    <>
      <div className="md:hidden flex  space-x-10 justify-start items-center">
        <ul className="flex space-x-0 font-extralight flex-wrap items-end space-y-0 gap-4 -mx-2">
          <li className="text-lg font-normal">Amenities</li>
          {property.amenities.map((amenity, index) => (
            <li
              className="rounded-3xl px-2 py-0.5 border-2 border-gray-300 self-center text-sm"
              key={index}
            >
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      <hr className="md:hidden border-1 border-gray-300 w-full my-2 -mx-3" />
      <div className="md:hidden flex space-x-10 justify-start items-center">
        <ul className="flex space-x-0 font-extralight flex-wrap items-end space-y-0 gap-4 -mx-2">
          <li className="text-lg font-normal">Vicinity</li>
          {property.vicinity.map((vicinity, index) => (
            <li
              className="rounded-3xl px-2 py-0.5 border-2 border-gray-300 self-center text-sm"
              key={index}
            >
              {vicinity}
            </li>
          ))}
        </ul>
      </div>
      <p
        onClick={toggleMobileDiv}
        className="flex md:hidden text-red-500 underline justify-center "
      >
        Show Less
      </p>
    </>
  );

  return (
    <div className="  md:block pl-5 space-y-4">
      {!showMobileDiv && (
        <div className=" flex md:hidden text-red-500 underline justify-center">
          <p onClick={toggleMobileDiv}>See amenities & Vicinity</p>
        </div>
      )}
      <div className="hidden md:flex  space-x-10 justify-start items-center">
        <ul className="flex space-x-3 font-extralight">
          <p className="text-xl font-base">Amenities</p>
          {property.amenities.map((amenity, index) => (
            <li
              className="rounded-3xl px-2 py-1 border-2 border-gray-300 self-center"
              key={index}
            >
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex space-x-10 justify-start items-center">
        <ul className="flex space-x-3 font-extralight">
          <p className="text-xl  ">Vicinity</p>
          {property.vicinity.map((vicinity, index) => (
            <li
              className="rounded-3xl px-2 py-1 border-2 border-gray-300 self-center"
              key={index}
            >
              {vicinity}
            </li>
          ))}
        </ul>
      </div>
      {/* MOBILE */}
      {showMobileDiv && mobileDiv}
    </div>
  );
};

export default AmenitiesAndVicinity;
