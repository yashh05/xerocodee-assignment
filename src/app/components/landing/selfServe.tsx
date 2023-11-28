"use client";
import { useState } from "react";
import { Nunito, Poppins } from "next/font/google";
import cloudPng from "../../assets/landing/landing/cloud.png";
import Image from "next/image";

const nunito = Nunito({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const SelfServe = () => {
  const [section, setSection] = useState(1);

  const Navbar = () => {
    return (
      <ul
        className={` text-gray-700  flex  gap-10 ${nunito.className} font-bold `}
      >
        <li
          className={`${
            section === 1 ? "  border-b-primary " : "border-b-white"
          } border-b-4 `}
        >
          <button onClick={() => setSection(1)}>Your Cloud</button>
        </li>
        <li
          className={`${
            section === 2 ? "  border-b-primary " : "border-b-white"
          } border-b-4 `}
        >
          <button onClick={() => setSection(2)}>Infra Components</button>
        </li>
        <li
          className={`${
            section === 3 ? "  border-b-primary " : "border-b-white"
          } border-b-4 `}
        >
          <button onClick={() => setSection(3)}>Self Hosted Apps</button>
        </li>
      </ul>
    );
  };

  const YourCloud = () => {
    return (
      <div className=" flex items-center ">
        <Image
          src={cloudPng}
          alt=""
          className=" flex-1 h-[350px] w-[350px]"
        ></Image>
        <div className=" flex-1">
          <h1
            className={`${poppins.className} text-3xl font-semibold text-gray-900 `}
          >
            In Your Cloud
          </h1>
          <p className="text-gray-600 mt-7">
            Your infrastructure runs on your AWS or GCP account. Never get
            locked in. Infinitely scalable.Azure support (coming soon)
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className=" m-auto">
      <Navbar />
      {section === 1 ? <YourCloud /> : section===2 ? <YourCloud /> : section===3 ? <YourCloud /> : null}
    </div>
  );
};

export default SelfServe;
