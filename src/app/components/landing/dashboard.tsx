import Image, { StaticImageData } from "next/image";
import withpic from "../../assets/landing/landing/with.png";
import without from "../../assets/landing//landing/without.png"
import { Nunito, Poppins } from "next/font/google";
import infrastructure from "../../assets/landing/landing/infrastructure.png";
import networking from "../../assets/landing/landing/networking.png";
import security from "../../assets/landing/landing/cyber-security.png";
import applications from "../../assets/landing/landing/development.png";
import realTime from "../../assets/landing/landing/real-time.png";
import collabPng from "../../assets/landing/landing/collaboration.png";
import Advantages from "./advantages";
import hero from "../../assets/landing/landing/hero.png";
import SuccessStories from "./successStories";
import NewsLetter from "./newsLetter";
import Savehunderedhour from "./savehunderedhour";

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

const Dashboard = () => {
  const services = [
    {
      icon: infrastructure,
      title: "Infrastucture",
      description: "Automated Cloud Infrastructure Workflow",
    },
    {
      icon: security,
      title: "Security",
      description: "Modern Secure infrastructure Approach",
    },
    {
      icon: networking,
      title: "Networking",
      description: "Flexible Secure Application Connectivity",
    },
    {
      icon: applications,
      title: "Applications",
      description: "Automate Application Deployment for Agility",
    },
  ];

  const ServiceCard = ({
    icon,
    title,
    description,
  }: {
    icon: StaticImageData;
    title: String;
    description: String;
  }) => (
    <div className="flex gap-5 items-center bg-white rounded p-5">
      <div className="p-1 bg-white rounded shadow-lg">
        <Image src={icon} alt="" width={40} />
      </div>
      <div>
        <p className="font-semibold text-lg md:text-2xl text-gray-800">
          {title}
        </p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="flex m-auto flex-col items-center mb-10 gap-16 md:gap-28">
      <div className="flex flex-col gap-5 md:gap-8 pt-16 md:pt-28 m-auto items-center">
        <p className="font-bold text-2xl w-4/5 md:w-11/12 md:text-6xl text-center text-gray-800">
          Build your audience and grow your brand
        </p>
        <p className="tracking-wide text-gray-500 w-4/5 md:w-11/12 md:text-xl text-center">
          no more,no less.Deplpoy from our single pane of glass, manage them
          with ease and scale up as fast as your workload grows.
        </p>
        <button className=" bg-primary cursor-pointer text-white py-2 px-4 rounded-lg ">
          Get Started Now
        </button>
        <Image alt="hero" src={hero} className=" w-full" />
      </div>

      <div className=" flex w-full flex-col gap-8 items-center">
        <button className=" px-7 py-4 rounded-full bg-[#4192ff4d] text-lg font-semibold  text-primary">
          Features
        </button>
        <div className=" w-11/12 text-center">
          <p className="font-bold text-2xl md:text-3xl text-gray-900 ">
            <span className=" text-primary ">Save 1000s </span>
            Of Expensive Coder Hours
          </p>
          <p className=" text-gray-600 mt-4">
            With cloud native technologies, we assist in modernising
            infrastructure and applications for resilience and scalability.
          </p>
        </div>
        <Savehunderedhour />
      </div>

      {/* with and without xerocodee */}
      <div
        className={`flex flex-col md:flex-row w-full md:text-xl font-semibold  ${nunito.className} `}
      >
        <div className=" flex items-center text-center flex-col gap-16 flex-1">
          <p>Without Xerocodee</p>
          <Image
            src={without}
            alt="withoutxerocodee"
            className=" w-[350px] h-[300px]"
          />
        </div>
        <div className=" flex items-center flex-col text-center gap-16 flex-1">
          <p>With Xerocodee</p>
          <Image
            src={withpic}
            alt="withoutxerocodee"
            className=" w-[350px] h-[300px] "
          />
        </div>
      </div>

      {/* self serve scaling infrastructure */}
      <div className="flex flex-col gap-14 w-11/12">
        <p
          className={`text-center text-2xl md:text-3xl font-semibold m-auto ${poppins.className}`}
        >
          Self-serve infrastructure platform for{" "}
          <span className="text-primary">scaling teams</span>
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-28 m-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="w-11/12 bg-primary rounded-3xl  text-white px-5 py-10 md:p-20 flex flex-col gap-24">
        <p className="font-semibold text-center text-lg md:text-4xl">
          Modernize Apps, Infrastructure With Cloud Native Tech For Resilience,
          Scalability.
        </p>

        {/* 1 */}
        <div className="flex flex-col md:flex-row gap-14 items-center">
          <Image src={realTime} alt="" className="md:w-1/2" />

          <div className="flex text-center md:text-start flex-col gap-10">
            <h1 className="font-semibold text-xl md:text-4xl">
              Real-Time Risk Monitoring
            </h1>
            <p className="md:tracking-wider md:text-xl">
              Real-time risk monitoring across your infrastructure and
              application ecosystem will help you maintain ongoing compliance
              with more than 05+ different regulatory standards.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col-reverse md:flex-row gap-14 items-center">
          <div className="flex flex-col gap-10 text-center md:text-start">
            <h1 className="font-semibold text-xl md:text-4xl">
              Collaborative workflows
            </h1>
            <p className="md:tracking-wider md:text-xl">
              Share artifacts easily and collaborate with team members,
              auditors, and pen testers via automated procedures. To manage
              daily compliance with automatic notifications and reminders,
              create, assign, and track tasks.
            </p>
          </div>
          <Image src={collabPng} alt="" className="md:w-1/2" />
        </div>
      </div>

      <Advantages />
      <SuccessStories />
      <NewsLetter />
    </div>
  );
};

export default Dashboard;
