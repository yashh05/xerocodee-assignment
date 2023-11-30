import Image from "next/image";
import linePng from "../../assets/landing/landing/LinePng.svg";
import costPng from "../../assets/landing/landing/cost.png";
import previewPng from "../../assets/landing/landing/preview.png";
import levelsPng from "../../assets/landing/landing/levels.png";
import NetworkShareSvg from "../../assets/landing/landing/Network-share.svg";
import pieSvg from "../../assets/landing/landing/Pie-chart.svg";
import { Nunito, Poppins } from "next/font/google";

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

const Advantage3 = () => {
  return (
    <div className="flex flex-col items-center gap-20 ">
      <h1
        className={`${poppins.className} text-center text-4xl font-semibold text-gray-800`}
      >
        03
        <Image src={linePng} alt="" />
      </h1>

      <div className="text-gray-800">
        <h1 className="text-center text-cl md:text-3xl font-semibold  ">
          Visibility into costs and metrics
        </h1>
        <p className="mt-5 text-gray-600  text-center md:text-start">
          Automatically track resource costs, across clouds, on every change.
          Visualize k8s pod metrics - CPU, Network, and Memory.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1 ">
            <Image src={costPng} alt="" className="m-auto" />
          </div>
          <div className=" flex-1">
            <h1
              className={`${poppins.className}  text-center md:text-start text-xl md:text-3xl font-semibold text-gray-900 `}
            >
              Customizable cost dashboards and reports
            </h1>
            <p className="text-gray-600 mt-7  text-center md:text-start">
              Stay on top of your cloud spending with custom cost dashboards and
              reports — sort, filter, and group by your various accounts,
              resources, and cloud regions.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-20">
          <div className=" flex-1">
            <h1
              className={`${poppins.className} text-3xl  text-center md:text-start font-semibold text-gray-900 `}
            >
              Preview infra costs
            </h1>
            <p className="text-gray-600 mt-7  text-center md:text-start">
              See the cost of a specific resource while choosing it (before
              provisioning). It saves you the hassle of searching through the
              complex pricing pages of your cloud provider or tools.
            </p>
          </div>
          <div className="flex-1 ">
            <Image src={previewPng} alt="" className="m-auto" />
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-row gap-20">
          <div className="flex-1 flex ">
            <Image src={levelsPng} alt="" />
            <Image src={NetworkShareSvg} alt="" />
            <Image src={pieSvg} alt="" />
          </div>
          <div className=" flex-1">
            <h1
              className={`${poppins.className} text-xl  md:text-3xl  text-center md:text-start font-semibold text-gray-900 `}
            >
              Observability from day one
            </h1>
            <p className="text-gray-600 mt-7  text-center md:text-start">
              Comes with built-in Kubernetes pod metrics. Easily plug in
              monitoring and observability tools of your choice, such as
              Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your
              application metrics from day 1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage3;
