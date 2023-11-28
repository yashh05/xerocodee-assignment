import Image from "next/image";
import withpic from "./assets/landing/landing/with.png";
import without from "./assets/landing/landing/without.png";
import { Nunito, Poppins } from "next/font/google";
import infrastructure from "./assets/landing/landing/infrastructure.png";
import networking from "./assets/landing/landing/networking.png";
import security from "./assets/landing/landing/cyber-security.png";
import applications from "./assets/landing/landing/development.png";
import realTime from "./assets/landing/landing/real-time.png";
import collabPng from "./assets/landing/landing/collaboration.png";
import Advantages from "./components/landing/advantages";
import hero from "./assets/landing/landing/hero.png" 
import SuccessStories from "./components/landing/successStories";
import NewsLetter from "./components/landing/newsLetter";

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
  return (
    <div className="flex m-auto flex-col items-center mb-10 gap-32">
      <div className=" flex flex-col gap-8 pt-28 w-4/5 m-auto items-center">
    <p className="font-bold text-6xl text-center text-gray-800">Build your audience and grow your brand</p>
    <p className="text-xl text-center">
      no more,no less.Deplpoy from our single pane of glass, manage them
      with ease and scale up as fast as your workload grows.
    </p>
    <div>
    <button className=" bg-primary cursor-pointer text-white py-2 px-4 rounded ">
        Get Started Now
    </button>
    </div>
    
    <Image alt="hero" src={hero} className=" w-full"  />
  </div>
      <div className=" flex flex-col gap-8 items-center">
        <button className=" px-7 py-4 rounded-full bg-[#4192ff4d] text-lg font-semibold  text-primary">
          Features
        </button>
        <p className="font-bold text-5xl text-gray-900 ">
          <span className=" text-primary ">Save 1000s </span>
          of expensive coder hours
        </p>
        <p className=" text-gray-700 text-lg">
          With cloud native technologies, we assist in modernising
          infrastructure and applications for resilience and scalability.
        </p>
      </div>

      {/* with and without xerocodee */}
      <div
        className={`flex mt-32 w-full text-3xl font-semibold  gap-20 ${nunito.className} `}
      >
        <div className=" flex items-center text-center flex-col gap-16 flex-1">
          <p>Without Xerocodee</p>
          <Image
            src={without}
            alt="withoutxerocodee"
            className=" w-[450px] h-[400px]"
          />
        </div>
        <div className=" flex items-center flex-col text-center gap-16 flex-1">
          <p>With Xerocodee</p>
          <Image
            src={withpic}
            alt="withoutxerocodee"
            className=" w-[450px] h-[400px] "
          />
        </div>
      </div>

      {/* self serve scaling infrastructure */}
      <div className="flex flex-col gap-24 w-11/12">
        <p
          className={` text-center text-5xl font-semibold m-auto ${poppins.className}`}
        >
          Self serve infrastructure platform for{" "}
          <span className="text-primary">scaling teams</span>
        </p>

        <div className=" w-11/12 grid grid-cols-1 sm:grid-cols-2 gap-14 m-auto">
          {/* card */}

          <div className=" flex gap-5 bg-white rounded p-5 border ">
            <div className=" p-2 bg-white rounded shadow-[5px_22px_53px_5px_#00000024]">
              <Image src={infrastructure} alt="" width={40} />
            </div>
            <div>
              <p className=" font-semibold text-2xl text-gray-800">
                Infrastucture
              </p>
              <p className=" text-gray-700">
                Automated Cloud Infrastructure Workflow
              </p>
            </div>
          </div>

          <div className=" flex gap-5 bg-white rounded p-5 border">
            <div className=" p-2  bg-white rounded shadow-[5px_22px_53px_5px_#00000024]">
              <Image src={security} alt="" width={40} />
            </div>
            <div>
              <p className=" font-semibold text-2xl text-gray-800">Security</p>
              <p className=" text-gray-700">
                Modern Secure infrastructure Approach
              </p>
            </div>
          </div>

          <div className=" flex gap-5 bg-white rounded p-5 border">
            <div className=" p-2  bg-white rounded shadow-[5px_22px_53px_5px_#00000024]">
              <Image src={networking} alt="" width={40} />
            </div>
            <div>
              <p className=" font-semibold text-2xl text-gray-800">
                Networking
              </p>
              <p className=" text-gray-700">
                Flexible Secure Application Connectivity
              </p>
            </div>
          </div>

          <div className=" flex gap-5 bg-white rounded p-5 border">
            <div className=" p-2 bg-white rounded shadow-[5px_22px_53px_5px_#00000024]">
              <Image src={applications} alt="" width={40} />
            </div>
            <div>
              <p className=" font-semibold text-2xl text-gray-800">
                Applications
              </p>
              <p className=" text-gray-700">
                Automate Application Deployment for Agility
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-full bg-primary rounded-3xl text-white p-20 flex flex-col gap-24">
        <p
          className={`${poppins.className} font-semibold text-center text-4xl`}
        >
          Modernize Apps, Infrastructure With Cloud Native Tech For Resilience,
          Scalability.
        </p>

        {/* 1 */}
        <div className=" flex items-start gap-14">
          <Image src={realTime} alt="" width={810} />

          <div className="flex flex-col gap-10">
            <h1 className={`${poppins.className} font-semibold text-4xl`}>
              Real-Time Risk Monitoring
            </h1>
            <p className=" tracking-wider">
              Real-time risk monitoring across your infrastructure and
              application ecosystem will help you maintain ongoing compliance
              with more than 05+ different regulatory standards.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className=" flex gap-14 items-center">
          <div className="flex flex-col gap-10">
            <h1 className={`${poppins.className} font-semibold text-4xl`}>
              Collaborative workflows
            </h1>
            <p className=" tracking-wider">
              Share artefacts easily and collaborate with team members,
              auditors, and pen testers via automated procedures. To manage
              daily compliance with automatic notifications and reminders,
              create, assign, and track tasks.
            </p>
          </div>
          <Image src={collabPng} alt="" width={810} />
        </div>
      </div>

      <Advantages />
      <SuccessStories />
      <NewsLetter />
    </div>
  );
};

export default Dashboard;
