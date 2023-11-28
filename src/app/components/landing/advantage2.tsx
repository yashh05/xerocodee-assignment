import Image from "next/image";
import pipelinePng from "../../assets/landing/landing/pipeline.png";
import deployPng from "../../assets/landing/landing/deploy.png";
import toolPng from "../../assets/landing/landing/tools.png";
import scalePng from "../../assets/landing/landing/scale.png";
import linePng from "../../assets/landing/landing/LinePng.svg";

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
  


const Advantage2 = () => {
    return (
      <div className="flex flex-col items-center gap-20 ">
        <h1
          className={`${poppins.className} text-center text-4xl font-semibold text-gray-800`}
        >
          02
          <Image src={linePng} alt="" />
        </h1>

        <div className="text-gray-800">
          <h1 className="text-center text-3xl font-semibold ">
            Deploy applications, fast!
          </h1>
          <p className="mt-5">
            Set up automated deployments of your application in 5 minutes and
            get back to building stuff that matters.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          <div className="flex gap-20">
            <Image src={pipelinePng} alt="" className="flex-1" />

            <div className=" flex-1">
              <h1
                className={`${poppins.className} text-3xl font-semibold text-gray-900 `}
              >
                Configurable Build and Deploy pipelines
              </h1>
              <p className="text-gray-600 mt-7">
                Portable builds powered by Dagger and continuous deployments
                powered by ArgoCD - you gain more control of your pipelines with
                composable custom, build, and deploy stages.
              </p>
            </div>
          </div>
          <div className="flex gap-20">
            <div className=" flex-1">
              <h1
                className={`${poppins.className} text-3xl font-semibold text-gray-900 `}
              >
                Push to Deploy
              </h1>
              <p className="text-gray-600 mt-7">
                Just connect your repo with one click and push. Argonaut’s deep
                integration with GitHub Actions and GitLab pipelines build and
                deploy your code on every push.
              </p>
            </div>
            <Image src={deployPng} alt="" className="flex-1" />
          </div>
          <div className="flex gap-20">
            <Image src={toolPng} alt="" className="flex-1  h-auto m-auto" />
            <div className=" flex-1">
              <h1
                className={`${poppins.className} text-3xl font-semibold text-gray-900 `}
              >
                Multiple runtimes{" "}
              </h1>
              <p className="text-gray-600 mt-7">
                Quickly deploy apps to containerized or serverless runtimes on
                your cloud and customize architectures to cost and performance
                constraints. Deploy on Kubernetes using dockerfiles or
                buildpacks, AWS Lambda, or GCP Cloud Functions.
              </p>
            </div>
          </div>
          <div className="flex gap-20">
            <div className=" flex-1">
              <h1
                className={`${poppins.className} text-3xl font-semibold text-gray-900 `}
              >
                Scale infinitely
              </h1>
              <p className="text-gray-600 mt-7">
                Every deployment is a zero-downtime deployment without you
                needing to choose custom configurations. You can easily
                configure auto-scaling, resource limits, and health-check URL to
                further optimize application uptime.
              </p>
            </div>
            <Image src={scalePng} alt="" className="flex-1" />
          </div>
        </div>
      </div>
    );
  };

  export default Advantage2