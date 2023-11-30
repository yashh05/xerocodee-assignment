"use client";

import { useState } from "react";
import middlePng from "../../assets/landing/landing/dashboard-1.png";
import leftPng from "../../assets/landing/landing/dashboard-2.png";
import rightPng from "../../assets/landing/landing/dashboard-3.png";

import Image from "next/image";
const Savehunderedhour = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const options: string[] = [
    "Apps",
    "App Configs",
    "Pipeline",
    "Infra creation",
    "Cost",
    "Add-Ons",
    "Monitoring",
    "Connections",
  ];

  const AppsOption = () => {
    return (
      <div className="relative mt-16 mx-auto  max-w-[1050px] ">
        <Image
          src={leftPng}
          alt=""
          className=" absolute md:w-[350px] w-2/5 -bottom-8 left-0 z-10 md:h-[250px]"
        />
        <Image src={middlePng} alt="" className="mx-auto w-4/5" />
        <Image
          src={rightPng}
          alt=""
          className=" absolute -top-8 -right-6 w-2/5 md:w-[350px] md:h-[250px]"
        />
      </div>
    );
  };

  const Navbar = () => {
    return (
      <ul className="lg:flex hidden  w-10/12 m-auto lg:justify-between">
        {options.map((option, ind) => {
          return (
            <li
              key={ind}
              className={` py-2 md:w-32 text-center bg-white border border-b-4  ${
                selectedOption === ind ? "border-b-primary" : ""
              }`}
            >
              <button onClick={() => setSelectedOption(ind)}>{option}</button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className=" w-11/12">
      <Navbar />
      <AppsOption />
    </div>
  );
};

export default Savehunderedhour;
