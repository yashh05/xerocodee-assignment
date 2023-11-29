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
      className={`flex flex-col bg-[#90BFFFB3]  text-center md:text-start rounded-lg w-11/12 m-auto py-8 px-5 md:p-24 gap-5 md:gap-10 items-center ${poppins.className} `}
    >
      <Image src={paperPlane} alt="" width={40} className="md:max-w-[100px]" />
      <p className="  font-semibold tracking-wide md:text-2xl text-gray-900">
        Subscribe To Our Newsletter & Get The Coupon Code.
      </p>
      <p className=" text-gray-700 text-xs font-sans ">
        All your information is completely confidential
      </p>
      <div className="flex w-auto gap-1 md:gap-5">
        <input
          type="text"
          className="py-2 px-3 md:py-4 md:px-3 rounded text-xs md:text-base  focus:outline-none w-40 md:w-auto"
          placeholder="Type your email"
        />
        <button className=" bg-primary rounded-lg text-xs font-bold py-1 px-3 md:px-6 text-white ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
