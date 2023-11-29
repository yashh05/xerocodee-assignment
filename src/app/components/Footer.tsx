import {  Poppins } from "next/font/google";
import githubPng from "../assets/landing/landing/Github.png"
import mailPng from "../assets/landing/landing/mail.png"
import linkedinPng from "../assets/landing/landing/Linkedin.png"
import Image from "next/image";
import logo from "../assets/landing/landing/logo.png"

const poppins= Poppins({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className={`${poppins.className} w-full md:bg-[#F7F9FF] py-10 `}>
      <div className="flex flex-col md:flex-row gap-10 items-center md:justify-around text-gray-600">
        <div className=" flex flex-col gap-4 w-4/5 md:w-4/12">
          <Image src={logo} alt="" className=" md:hidden" />
          <p>
            You get just what you need to run your cloud workloads--no more, no
            less. Deploy from our single pane of glass, manage them with ease
            and scale up as fast as your workload grows
          </p>
          <div className="flex mt-5 gap-5">
            <a href=""><Image src={githubPng} alt="" /></a>
            <a href=""><Image src={linkedinPng} alt="" /></a>
            <a href=""><Image src={mailPng} alt="" /></a>
          </div>
        </div>
        <div className=" grid grid-cols-2 px-2 md:flex">
        <div className="flex flex-col gap-4 md:gap-8">
            <h1 className=" text-gray-900 text-lg md:text-2xl font-semibold">Our Links</h1>
            <ul className=" flex flex-col justify-between gap-3">
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Integrations</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
            <h1 className=" text-gray-900 text-2xl font-semibold">Other Services</h1>
            <ul className=" flex flex-col justify-between gap-3">
                <li><a href="">Infrastructure provisioning</a></li>
                <li><a href="">Network infrastructure automation</a></li>
                <li><a href="">Cost optimization</a></li>
                <li><a href="">Cloud migration</a></li>
                <li><a href="">Kubernetes at scale</a></li>
            </ul>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
            <h1 className=" text-gray-900 text-2xl font-semibold">Other Links</h1>
            <ul className=" flex flex-col justify-between gap-3">
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Integrations</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
      </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between w-4/5 m-auto mt-10 text-gray-600 font-sans">
      <p> Terms & Condition  |   Privacy Policy </p>
      <p className="text-center md:text-start">Copyright © 2023 <span className=" font-semibold"> EXOCODE TECHNOLOGIES</span> | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
