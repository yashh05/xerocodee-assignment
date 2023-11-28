import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import paperPlane from "../../assets/landing/landing/PaperPlane.png";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const NewsLetter = () => {
  return (
    <div
      className={`flex flex-col bg-[#90BFFFB3] rounded-lg w-11/12 m-auto p-24 gap-10 items-center ${poppins.className} `}
    >
      <Image src={paperPlane} alt="" />
      <p className="text-2xl text-gray-900">
        Subscribe to Our Newsletter & get the Coupon code.
      </p>
      <p className=" text-gray-700 ">
        {" "}
        All your information is completely confidential
      </p>
      <div className="flex gap-5">
        <input
          type="text"
          className="py-5 px-3 rounded-lg focus:outline-none"
          placeholder="Type your email"
        />
        <button className=" bg-primary rounded-lg py-1 px-6 text-white ">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
