import { Nunito, Poppins } from "next/font/google";

const poppins= Poppins({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className={`${poppins.className} w-full bg-[#F7F9FF] py-10 `}>
      <div className="flex gap-10 items-center text-gray-600 m-auto w-4/5">
        <div className=" w-4/12">
          <p>
            You get just what you need to run your cloud workloads--no more, no
            less. Deploy from our single pane of glass, manage them with ease
            and scale up as fast as your workload grows
          </p>
          <div>
            
          </div>
        </div>
        <div className="flex flex-col  gap-3">
            <h1 className=" text-gray-900 text-2xl font-semibold">Our Links</h1>
            <ul className=" flex flex-col justify-between gap-3">
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Integrations</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className="flex flex-col  gap-3">
            <h1 className=" text-gray-900 text-2xl font-semibold">Other Services</h1>
            <ul className=" flex flex-col justify-between gap-3">
                <li><a href="">Infrastructure provisioning</a></li>
                <li><a href="">Network infrastructure automation</a></li>
                <li><a href="">Cost optimization</a></li>
                <li><a href="">Cloud migration</a></li>
                <li><a href="">Kubernetes at scale</a></li>
            </ul>
        </div>
        <div className="flex flex-col  gap-3">
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
      <div className="flex justify-between w-4/5 m-auto mt-10 text-gray-600 font-sans">
      <p> Terms & Condition  |   Privacy Policy </p>
      <p>Copyright © 2023 <span className=" font-semibold"> EXOCODE TECHNOLOGIES</span> | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
