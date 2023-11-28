import { Nunito, Poppins } from "next/font/google";
import Image from "next/image";
import SelfServe from "./selfServe";
import linePng from "../../assets/landing/landing/LinePng.svg";

const nunito = Nunito({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});
const Advantage1 = () => {
  return (
    <div className="flex flex-col items-center gap-20 ">
      <h1
        className={`${poppins.className} text-center text-4xl font-semibold text-gray-800`}
      >
        01
        <Image src={linePng} alt="" />
      </h1>

      <div className="text-gray-800">
        <h1 className="text-center text-3xl font-semibold ">
          Self Serve Infrastructure
        </h1>
        <p className="mt-5">
          Accelerate by self-serving production-ready infrastructure and
          customize as you scale.
        </p>
      </div>
      <SelfServe />
    </div>
  );
};

export default Advantage1;
