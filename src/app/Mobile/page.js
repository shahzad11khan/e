import React from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { Mobileapps } from "../components/Mobileapps";
import { Mobileappslogo } from "../components/Mobileapps";
import { MobileAp } from "../components/carts";
import Contactform from "../Utils/Contactform";
import Link from "next/link";

const MobileApp = () => {
  return (
    <div className=" bg-white">
      <Top />
      <div
        className="max-w-full h-auto flex justify-center items-center mt-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner-Facebook-Cover-copy.png')",
          backgroundSize: "100% 100vh", // Set background size to full width and full height of the viewport
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-24">
          <div className="text-custom-blue text-2xl md:text-5xl font-bold flex justify-center items-center mt-28">
            MOBILE APP DEVELOPMENT
          </div>
          <div className="flex  m-auto py-3">
            <p className="flex font-medium  m-auto justify-center items-center text-center text-xl">
              We develop user-centric mobile applications that solve real world
              problems.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold text-center md:text-left mt-20 text-xl"
          >
            Home - Services -{" "}
            <span className="text-custom-blue">Mobile App Development</span>
          </a>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-1xl font-bold">
            <span className="border-b-4 border-custom-blue">m o b i</span>
            <span className=""> l e a p p d e v e l o p m e n t.</span>
          </div>
          <div className="text-3xl font-black">
            <span className="">WE BUILD GOOD</span>
            <span className="text-custom-blue"> MOBILE USER EXPEREINCES.</span>
          </div>
          <p className="text-sm md:text-xl ">
            Encodebytes mobile application development services convert your
            mobile app ideas into feature-rich user experience.irrespective of
            the device type(phone or mobile)we provide app development services
            for both IOS and Android platform.
          </p>
          <button className=" text-white text-md p-5 font-bold  mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue">
            LET`S DISCUSS
          </button>
        </div>
        {/* iamge */}
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/unsplash1.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-gray-200 p-14 md:px-20" id="mobilesection3">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue text-1xl md:text-4xl font-bold flex justify-center items-center gap-2">
            <span className="text-black">MOBILE APP</span>
            <span className="text-custom-blue"> DEVELOPMENT SERVICES</span>
          </div>
          <div className="text-center w-4/6 mt-7 text-xl">
            Encoderbytes is a Peshawar,Pakistan based leading mobile app
            development company.We provide top grade mobile app development
            services for Andriod and IOS platforms.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-20 mx-16">
          <div className="rounded-xl bg-white p-9">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 1</span>
              <Image
                src="/icons/android.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-2xl font-bold">
                <span className="text-black">ANDROID APP</span>
                <span className="text-custom-blue"> DEVELOPMENT</span>
              </div>
              <p className="mt-6 text-xl text-gray-400">
                To meet your business requirement and need of the end user we
                develop IOS apps .To create the superior quality we use the
                latest tools,technology and user friendly mobile apps.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 2</span>
              <Image src="/icons/apple.png" alt="Logo" width={70} height={70} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-2xl font-bold">
                <span className="text-black">IOS APP</span>
                <span className="text-custom-blue"> DEVELOPMENT</span>
              </div>
              <p className="mt-6 text-xl text-gray-400">
                To deliver impactful android apps for smartphones and tablets we
                have skilled mobile app developers who convert your ideas into
                digitized custom android app that your end users will enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div id="mobilesection4"></div>
      <div className="bg-red w-full">
        <div className="flex justify-center items-center  flex-col mt-24 ">
          <div className="text-4xl font-bold text-center">
            <span className="">MOBILE SERVICES </span>
            <span className="text-custom-blue">FOR DIFFERENT BUSINESS?</span>
          </div>
          <p className="w-3/5 mt-5 text-center text-xl">
            {/* <p className="flex mx-64 sm:w-4/6 mt-11 text-center border-2 border-black"> */}
            We provide mobile application development services to different
            startups ,SMEs and large enterprises.Since 2019, from Tech to
            healthcare we have a successful record of working in different
            industries and also delivered mobile app services. No project is too
            big or too small for us.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">
            {Mobileapps.map((items) => {
              return (
                <div
                  key={items.image}
                  className=" bg-gray-200 rounded-md border-black p-10 text-center flex flex-col justify-between items-center gap-4"
                >
                  <Image src={items.image} alt="image" width={70} height={70} />
                  <span>{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div id="mobilesection5"></div>
      <div className="relative bg-gray-200  mt-20" style={{ height: "2400px" }}>
        <div className="relative " style={{ width: "100vw" }}>
          <Image
            className="w-full"
            src="/backgrounds/Rectangle-68.png"
            alt="Background"
            width={400}
            height={400}
          />
          <div className="absolute top-0 w-full text-center px-4">
            <div className="text-3xl font-bold mt-20">
              <span className="text-white">MOBILE APP DEVELOPMENT PROCESS</span>
            </div>
            <div className="mt-5 mx-auto text-xl font-medium text-white w-8/12">
              While developing a user-centric Mobile Application, we use
              up-to-date agile methodology of the software development cycle
              (SDLC) to ensure your satisfaction with expeditious development
              and delivery.
            </div>
          </div>
        </div>
        {/* <div className="bg-gray-400" style={{ height: "1200px" }}></div> */}
        <div className="absolute top-52 w-full px-4">
          <div className="mt-10 w-full md:w-5/6 bg-white rounded-2xl py-16 px-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
              {MobileAp.map((cart) => (
                <div
                  className="rounded-lg w-full bg-custom-blue p-10 mt-10"
                  key={cart.no}
                >
                  <div className="flex justify-between">
                    <span className="text-xl md:text-4xl text-white font-bold border-gray-500 border-b-4  border-dashed ">
                      {cart.title}
                    </span>
                    <span className="text-6xl font-bold text-gray-400">
                      {cart.no}
                    </span>
                  </div>
                  <div className="flex flex-col w-full mt-6 text-white text-xl leading-6">
                    <p>{cart.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 6  */}
      <div id="mobilesection6"></div>
      <section className="mt-[5%] text-2xl font-medium">
        <div className="w-full  py-16">
          <div
            className="m-4 md:mx-20 flex flex-col justify-center items-center h-full rounded-md md:h-auto md:p-20"
            style={{
              backgroundImage: "url('/backgrounds/developing-cost.png')",
              backgroundSize: "cover", // Ensure the background image covers the container
              backgroundPosition: "center", // Center the background image
            }}
          >
            <div className="mt-32 text-4xl md:mt-32 text-white font-bold md:text-5xl">
              COST TO
            </div>

            <div className="py-10 text-white font-bold text-3xl md:text-6xl">
              DEVELOP MOBILE APPS
            </div>
            <p className="mt-5 mx-4 md:mx-40 text-white text-center">
              Cost is something relative, but the quality and timely delivery is
              our value proposition in comparison to all the competitors. Yes
              offshore we use detailed and state of the art project budgets
              subject to your Apps requirements. We developed simple to complex
              mobile apps ranging from $1000 to $10,000+.
            </p>
            <button className="text-custom-blue hover:text-white font-medium px-4  py-2   mt-6 rounded-md bg-white hover:bg-custom-blue mb-6">
              LET`S DISCUSS
            </button>
          </div>
        </div>
      </section>

      {/* section 7  */}
      <div id="mobilesection7"></div>
      <div className="bg-red w-full">
        <div className="flex justify-center items-center  flex-col mt-16 ">
          <div className="text-3xl font-bold text-center">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>
          <p className="w-4/6 mt-5 text-center text-xl">
            {/* <p className="flex mx-64 sm:w-4/6 mt-11 text-center border-2 border-black"> */}
            We have a rich background in native iOS and Android mobile
            applications as well as cross-platform apps . One of our Developed
            Mobile Application, Pharmapedia, is on 5th ranking around the globe
            . For developing a mobile application we use the latest methodology
            and uptodate technologies as mentioned:
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 mt-20  w-5/6">
            {Mobileappslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-300 px-16 py-10 text-center flex flex-col gap-12 justify-between items-center rounded-lg "
                >
                  <Image
                    src={items.image}
                    className="rounded-lg"
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <span className="font-bold">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 8 */}
      <section className="bg-gray-300 pb-10 mt-20">
        {" "}
        <div className="flex pt-20 justify-center items-center text-2xl md:text-4xl font-bold">
          <span>MOBILE</span>
          <span className="text-custom-blue">&nbsp; APPLICATION</span>
        </div>
        <div
          className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 md:w-5/6 m-auto p-8 rounded-md"
          style={{ backgroundColor: "rgb(164, 189, 247)" }}
        >
          <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
            <Image
              src="/backgrounds/app2.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-black">
              <span className="border-b-4 border-white"> v i d s </span>
              <span className=" border-black">s a v e</span>
            </div>
            <div className=" text-2xl font-bold text-white">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-sm md:text-base font-medium">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white hover:text-white p-6 rounded-md h-10 md:mt-0  text-sm md:text-md border-2 hover:bg-custom-blue border-white text-center flex items-center font-bold">
              <button>READ CASESTUDY</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 bg-pink-300 md:w-5/6 m-auto p-8 rounded-md">
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-black">
              <span className="border-b-4 border-white "> s t a t s </span>
              <span className="">s v e</span>
            </div>
            <div className="text-4xl font-bold text-white">
              STATUS DOWNLOADER
            </div>
            <p className="text-sm md:text-base font-medium">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white p-6 rounded-md h-10 md:mt-0 hover:text-white text-sm md:text-md border-2 hover:bg-custom-blue border-white text-center flex items-center font-bold">
              <button className="">READ CASESTADY</button>
            </div>
          </div>

          {/* iamge */}
          <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
            <Image
              src="/backgrounds/app3.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 bg-blue-300 md:w-5/6 m-auto p-8 rounded-md">
          <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
            <Image
              src="/backgrounds/app1.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-black">
              <span className="border-b-4 border-white"> v i d s </span>
              <span className="">s a v e</span>
            </div>
            <div className=" text-3xl font-bold text-white">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-md font-medium md:text-base">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white hover:text-white p-3 rounded-md h-10 md:mt-0  text-sm md:text-md border-2 hover:bg-custom-blue border-white text-center flex items-center font-bold">
              <button>READ CASESTUDY</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center  mt-10">
          <Link href="/Projects">
            <button className="bg-custom-blue p-4 rounded-md font-bold text-white hover:bg-transparent boder-2 border-custom-blue">
              VIEW PORTFOLIO
            </button>
          </Link>
        </div>
      </section>
      {/* contact from */}
      <Contactform />
    </div>
  );
};

export default MobileApp;
