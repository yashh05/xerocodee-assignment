import Image from "next/image";
import logo from "../assets/landing/landing/logo.png";
const Navbar = () => {
  return (
    <div className="w-full">
      <div className=" p-3 shadow-lg  md:m-auto md: w-11/12 flex items-center justify-between ">

        <div className="flex items-center font-bold">
          <Image alt="" height={40} width={40} src={logo}></Image>
          <span className=" text-lg -ml-2">erocodee.</span>
        </div>

        <div className="flex gap-3 list-none">
            <a href=""> <li>Home</li></a>
            <a href=""><li>Team</li></a>
            <a href=""><li>Contact</li></a>
            <a href=""><li>Careers</li></a>
        </div>

        <button className="border border-primary rounded text-primary py-1 px-3 ">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
