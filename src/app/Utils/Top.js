import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Top = () => {
  return (
    <div className="bg-custom-blue w-full text-white text-center py-2 text-sm md:text-md lg:flex flex-col md:flex-row md:justify-center md:gap-2 hidden">
      {/* <div className="flex items"> */}
      <div className="flex flex-col md:flex-row md:gap-2">
        <div>
          IT Park, PTCL Training Center, Board Bazar, Peshawar, Khyber
          Pakhtunkhwa, Pakistan
        </div>
        <div className="flex justify-center items-center ml-10 gap-2">
          <FaPhoneSquareAlt />
          <span className="my-1 md:my-0">+92 333 9921398</span>
        </div>
        <div className="flex justify-center items-center ml-10 gap-2">
          <IoMdMail />
          <span>info@encoderbytes.com</span>
        </div>
      </div>
    </div>
  );
};

export default Top;
