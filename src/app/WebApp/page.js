import React from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { Mobileapps, Webapps, WebSecapps } from "../components/Mobileapps";
import { Mobileappslogo, Webeappslogo } from "../components/Mobileapps";
import { MobileAp } from "../components/carts";
import Contactform from "../Utils/Contactform";
const WebAPP = () => {
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
        <div className="flex flex-col justify-center items-center py-32">
          <div className="text-custom-blue text-2xl md:text-5xl font-bold flex justify-center items-center">
            WEB APP DEVELOPMENT
          </div>
          <div className="flex  m-auto py-3">
            <p className="flex w-5/6 md:w-5/6 m-auto justify-center items-center text-center text-xl font-medium">
              We design and create innovative, engaging, and secure web
              applications that are built to last.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold text-center md:text-left mt-20 text-xl"
          >
            Home - Services -{" "}
            <span className="text-custom-blue">Web App Development</span>
          </a>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-1xl font-bold">
            <span className="border-b-4 border-custom-blue">w e b </span>
            <span className=""> a p p d e v e l o p m e n t.</span>
          </div>
          <div className="text-2xl font-black">
            <span className="">WE HELP BUSINESS</span>
            <span className="text-custom-blue"> BY WEB USER APPLICATION.</span>
          </div>
          <p className="text-sm md:text-xl">
            Encoderbytes delivers web based applications at every stage of the
            growth from tailored to specific needs of the company.
          </p>
          <button className=" text-white text-md p-5 font-bold  mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue">
            LET`S DISCUSS
          </button>
        </div>
        {/* iamge */}
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Rectangle29.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* section 3 */}
      <div id="section3"></div>
      <div className="bg-gray-200 p-14 md:px-20">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue text-1xl md:text-4xl font-bold flex justify-center items-center gap-2">
            <span className="text-black">WEB APP</span>
            <span className="text-custom-blue"> DEVELOPMENT SERVICES</span>
          </div>
          <div className="text-center w-4/6 mt-8 text-xl">
            As one of the best web development companies in the Peshawar
            Pakistan, EncoderBytes delivers bespoke web-based applications for
            companies at every stage of their growth, tailored to their specific
            needs.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-20 mx-16">
          {/* 1 CARD */}
          <div className="rounded-lg bg-white p-10">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 1</span>
              <Image
                src="/icons/startup.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bold">
                <span className="text-black">NEW</span>
                <span className="text-custom-blue"> STARTUP</span>
              </div>
              <p className="mt-6 text-xl text-gray-400">
                The carefully designed web application is needed for the product
                idea of your startup that helps you innovate and solve real
                business problems to disrupt established markets and gain
                sustainability.
              </p>
            </div>
          </div>
          {/* 2 card */}
          <div className="rounded-lg bg-white p-10">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 2</span>
              <Image
                src="/icons/factory.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-2xl font-bold">
                <span className="text-black">ESTABLISHED</span>
                <span className="text-custom-blue"> BUSINESS</span>
              </div>
              <p className="mt-6 text-xl text-gray-400">
                The bespoke web application greatly help you to streamline the
                operational workflows of your organisation when off-the-shelf
                solutions are too generic or rigid .
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div id="section4"></div>

      <div className="bg-red w-full">
        <div className="flex justify-center items-center  flex-col mt-32 ">
          <div className="text-3xl font-bold text-center">
            <span className="">WE UNDERSTAND </span>
            <span className="text-custom-blue">WHAT`S IMPORTANT</span>
          </div>
          <p className="w-3/5 mt-5 text-center text-xl font-normal">
            {/* <p className="flex mx-64 sm:w-4/6 mt-11 text-center border-2 border-black"> */}
            Apart from top-end software engineering, a whole lot more goes into
            developing and launching successful web applications.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-5 w-5/6 mt-10">
            {Webapps.map((items) => {
              return (
                <div
                  key={items.image}
                  className=" bg-gray-200 rounded-md border-black p-4 gap-5 text-center flex flex-col justify-center items-center"
                >
                  <Image
                    src={items.image}
                    alt="image"
                    width={200}
                    height={200}
                  />
                  <span>{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div id="section5"></div>

      <section className="mt-[5%]">
        <div className="w-full">
          <div
            className=" flex flex-col justify-center items-center  rounded-md md:h-auto md:p-20"
            style={{
              backgroundImage: "url('/backgrounds/developing-cost.png')",
              backgroundSize: "cover", // Ensure the background image covers the container
              backgroundPosition: "center", // Center the background image
            }}
          >
            {/* <div className="mt-10 text-4xl md:mt-10 text-white font-bold md:text-5xl">
              COST TO
            </div> */}

            <div className="py-10 text-white font-bold text-2xl md:text-3xl">
              INTELLECTUAL PROPERTY [IP] PROTECTION
            </div>
            <p className="mt-5 mx-4 md:mx-40 text-white text-center font-medium text-xl">
              Each phase is important in the overall success of the mobile app
              development lifecycle for that reason we ensure to break down your
              projects in different phases.
            </p>

            <p className="mt-5 mx-4 md:mx-40 text-white text-center font-medium text-xl">
              We are a Peshawar based company, serving an impressive client in
              Pakistan and all over the world. About our work clients continue
              to say positive things and that is our pride.
            </p>
            <button className="text-custom-blue hover:text-white text-md px-3 py-4 font-bold  mt-10 rounded-md bg-white hover:bg-custom-blue mb-6">
              TELL US YOUR IDEA
            </button>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <div id="section6"></div>

      <div className="bg-red w-full">
        <div className="flex justify-center items-center  flex-col mt-16 ">
          <div className="text-3xl font-bold text-center">
            <span className="">WEB APPLICATION DEVELOPMENT</span>
            <span className="text-custom-blue">
              {" "}
              FOR A WIDE VARITY OF INDUSTRIES
            </span>
          </div>
          <p className="w-3/5 mt-5 text-center  text-xl">
            Across the globe we have delivered large numbers of web applications
            to clients and web development applications are our strength .Before
            we initiate any programming work we will commit to understanding
            your industry and your project as your software partner.You can
            count on us as a web application development company.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-5 w-5/6 mt-24">
            {WebSecapps.map((items) => {
              return (
                <div
                  key={items.image}
                  className=" bg-gray-200 rounded-xl border-black p-9 text-center flex flex-col justify-between items-center gap-5"
                >
                  <Image
                    src={items.image}
                    alt="image"
                    width={200}
                    height={200}
                  />
                  <span>{items.name}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center text-center mt-10">
            <button className="bg-custom-blue hover:text-custom-blue p-3  rounded-md font-bold text-white hover:bg-transparent boder-2 border-custom-blue hover:border-2 hover:border-custom-blue">
              VIEW ALL INDUSTRIES
            </button>
          </div>
        </div>
      </div>

      {/* section 7  */}
      <div id="section7"></div>

      <div className="bg-red w-full bg-gray-300 mt-20">
        <div className="flex justify-center items-center  flex-col ">
          <div className="text-4xl font-bold text-center mt-10">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>
          <p className="w-3/5 mt-5 text-center font-medium text-xl">
            To launch and grow successful digital business as a leading web
            development company in Pakistan we cover every technology to choose
            the right platform for you that perfectly serves your requirements.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 mt-20 pb-16 w-5/6">
            {Webeappslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-400 p-14 text-center flex flex-col gap-12 justify-between items-center rounded-xl "
                >
                  <Image
                    src={items.image}
                    className="rounded-lg"
                    alt="image"
                    width={200}
                    height={200}
                  />
                  <span className="font-bold">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 8 */}
      <div id="section8"></div>

      <section className="bg-gray-200 pb-10 ">
        <div className="flex justify-center items-center pt-16 font-bold text-3xl">
          WEB &nbsp;
          <span className="text-custom-blue"> APPLICATION</span>
        </div>{" "}
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 bg-blue-300 md:w-5/6 m-auto p-8 rounded-xl">
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
              <span className="">s a v e</span>
            </div>
            <div className=" text-xl font-bold text-white">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-sm md:text-xl font-medium">
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
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 bg-pink-300 md:w-5/6 m-auto p-5 rounded-md">
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-black">
              <span className="border-b-4 border-white"> s t a t s </span>
              <span className="">s v e</span>
            </div>
            <div className=" text-xl font-bold text-white">
              STATUS DOWNLOADER
            </div>
            <p className="text-sm md:text-xl font-medium ">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white p-3 rounded-md h-10 md:mt-0 hover:text-white text-sm md:text-md border-2 hover:bg-custom-blue border-white text-center flex items-center font-bold">
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
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 bg-blue-300 md:w-5/6 m-auto p-5 rounded-md">
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
            <div className=" text-xl font-bold text-white">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-md font-medium md:text-xl">
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
          <button className="bg-custom-blue p-4 rounded-md font-bold text-white hover:bg-transparent boder-2 border-custom-blue">
            VIEW PORTFOLIO
          </button>
        </div>
      </section>
      {/* contact from */}
      <Contactform />
    </div>
  );
};

export default WebAPP;
