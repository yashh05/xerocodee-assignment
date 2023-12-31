import React from "react";
import Image from "next/image";
import landing from "../../assets/landing/landing/landing.svg";
import { Poppins } from "next/font/google";
import Advantage1 from "./advantage1";
import Advantage2 from "./advantage2";
import Advantage3 from "./advantage3";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const Advantages = () => {
  return (
    <div className=" flex flex-col border rounded-lg py-5 md:border-none gap-28 w-11/12 md:w-10/12 ">
      <h1
        className={`${poppins.className} text-center font-semibold text-gray-900 text-lg md:text-4xl`}
      >
        The Xerocodee way
        <span className=" inline-block ml-4">
          <Image src={landing} alt="" className="w-10 md:w-auto" />
        </span>
      </h1>

      <Advantage1 />
      <Advantage2 />
      <Advantage3 />
    </div>
  );
};

export default Advantages;
