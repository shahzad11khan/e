import React from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { Mobileapps } from "../components/Mobileapps";
import { Mobileappslogo, Aiappslogo } from "../components/Mobileapps";
import { MobileAp } from "../components/carts";
import Contactform from "../Utils/Contactform";
import Link from "next/link";

const Ai = () => {
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
          <div className="text-custom-blue text-2xl md:text-4xl font-bold flex justify-center items-center">
            ARTIFICIAL INTELLIGNECE
          </div>
          <div className="flex  m-auto py-3">
            <p className="flex   m-auto justify-center items-center text-center text-xl">
              Build and launch software platforms that bring you revenue.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold text-center md:text-left mt-20 text-xl"
          >
            Home - Services -{" "}
            <span className="text-custom-blue">Artificial-Intelligence</span>
          </a>
        </div>
      </div>
      {/* section 2 */}
      <div id="section2"></div>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-1xl font-bold text-2xl text-gray-700">
            <span className="border-b-4 border-custom-blue ">a r t i f</span>
            <span className=""> i c i a l i n t e l l e g e n c e.</span>
          </div>
          <div className="text-4xl font-black">
            <span className="">WHAT IS </span>
            <span className="text-custom-blue">ARTIFICIAL INTELLIGNECE?</span>
          </div>
          <p className="text-sm md:text-xl">
            Encoderbytes helps you by building software,AI services to your
            businesses.which help them in generating revenues for them and also
            add value to their existing product .It also helps you by enhancing
            your portfolio by making brand new software for your business.We
            have over 2 years of experience in AI.
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
            <span className="text-black">MOBILE APP</span>
            <span className="text-custom-blue"> DEVELOPMENT SERVICES</span>
          </div>
          <div className="text-center w-4/6 mt-5 text-xl leading-7">
            For over 2 years Encoderbytes is getting positive feedback from its
            clients by giving software development and AI services which is
            considered as a valuable asset of the the business.you can trust us
            for your app development because we make sure that it is user
            friendly,flexible scalable and secure as well as for hosting and
            management ,that way you will be able to focus your time and
            resources on your core business functions.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-20 mx-16">
          {/* 1 CARD */}
          <div className="rounded-lg bg-white p-8">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 1</span>
              <Image
                src="/icons/mvp-development.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-10">
              <div className="text-3xl font-bold">
                <span className="text-black">AUTOMATION </span>
                <span className="text-custom-blue">AT SCALE</span>
              </div>
              <p className="mt-6 text-xl text-gray-400">
                Our AI development services help you by avoiding biases and
                human error and also helps you by saving your money and time
                through automating and optimizing everyday processes and daily
                routine operations.
              </p>
            </div>
          </div>
          {/* 2 CARD */}
          <div className="rounded-lg bg-white p-8">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 2</span>
              <Image
                src="/icons/user-experience.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-10">
              <div className="text-4xl font-bold">
                <span className="text-black">INCREASED </span>
                <span className="text-custom-blue">PRODUCTIVITY</span>
              </div>
              <p className="mt-6 text-xl text-gray-400">
                Our skilled mobile app developers convert your ideas into
                digitized custom android app to make it enjoyable for end user
                .Our developer are committed to deliver impactful android app
                for smartphone and tablets.
              </p>
            </div>
          </div>
          {/* 3 CARD */}
          <div className="rounded-lg bg-white p-8">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 3</span>
              <Image
                src="/icons/scalable.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-10">
              <div className="text-3xl font-bold">
                <span className="text-black">BETTER DECISION</span>
                <span className="text-custom-blue"> MAKING</span>
              </div>
              <p className="mt-6 text-gray-400 text-xl">
                Grow your expertise and make faster business decision by using
                cognitive technologies and enabling analysis that offers
                intelligent advice and support.
              </p>
            </div>
          </div>
          {/* 4 CARD */}
          <div className="rounded-lg bg-white p-8">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 4</span>
              <Image
                src="/icons/cyber-security.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-10">
              <div className="text-3xl font-bold">
                <span className="text-black">SECURITY </span>
                {/* <span className="text-custom-blue">PRODUCTIVITY</span> */}
              </div>
              <p className="mt-6 text-gray-400 text-xl">
                Security and data privacy is very important to be planned from
                the very beginning to have a successful SAAS platform.Security
                is the main concern for that we have technical leads in our team
                which make sure to approve the security checklist of every
                software we deliver.
              </p>
            </div>
          </div>
          {/* 5 CARD */}
          <div className="rounded-lg bg-white p-8">
            <div className="flex justify-between">
              <span className="text-7xl font-bold text-slate-300">0 5</span>

              <div></div>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-10">
              <div className="text-3xl font-bold">
                <span className="text-black">CLOUD HOSTING </span>
                <span className="text-custom-blue">& MANAGEMENT</span>
              </div>
              <p className="mt-6 text-xl text-gray-400">
                To save your time and manage your software smoothly, we offer a
                complete range of white label softwares including cloud hosting
                and management for your SAAS platform. So you don&apos;t need to
                invest in expensive server hardware or hosting skills.
              </p>
            </div>
          </div>
          {/* 4 CARD */}
          <div className="rounded-lg bg-white p-8">
            <div className="flex justify-between">
              <span className="text-6xl font-bold text-slate-300">0 6</span>

              <div></div>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-10">
              <div className="text-3xl font-bold">
                <span className="text-black">INTELLECTUAL PROPERTY </span>
                <span className="text-custom-blue">[IP] RIGHTS</span>
              </div>
              <p className="mt-6 text-gray-400 text-xl">
                Our skilled mobile app developers convert your ideas into
                digitized custom android apps to make it enjoyable for the end
                user. Our developers are committed to deliver impactful android
                app for smartphone and tablets.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div id="section4"></div>
      <div
        className="flex flex-col md:flex-row md:h-96 bg-gradient-to-b from-black via-black to-transparent bg-no-repeat bg-cover w-full "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0,0.5)),url('/backgrounds/Rectangle2.png')",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover", // Ensure the background image covers the container
          backgroundPosition: "center", // Center the background image
        }}
      >
        <div className=" my-3  flex flex-col md:flex-row justify-between items-center  sm:flex-row md:px-15 w-10/12 m-auto ">
          <div className="flex flex-col  gap-4">
            <div className="mb-4 md:mb-0">
              <Image
                src="/Text-headings/ur-cost.png"
                className="mx-auto md:mx-0"
                alt="Logo"
                width={400}
                height={400}
              />
            </div>
            <div className="text-white text-xl font-medium w-5/6 mt-5">
              Send us the features you are looking to build and we shall advise
              on the next steps.
            </div>
          </div>
          <Link href="#form">
            <div className="">
              <button className="hover:text-custom-blue hover:bg-transparent px-5 my-2 py-4  font-bold rounded-md border-2 bg-custom-blue text-white border-custom-blue">
                LET&apos;S &nbsp; DISCUSS
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* section 5 */}
      <div id="section5"></div>
      <div className="bg-red w-full bg-gray-200">
        <div className="flex justify-center items-center  flex-col pt-20">
          <div className="text-4xl font-bold text-center">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>
          <p className="w-3/5 mt-5 text-center text-xl">
            {/* <p className="flex mx-64 sm:w-4/6 mt-11 text-center border-2 border-black"> */}
            The technology you need to launch and grow a successful business. As
            a leading web development company in Pakistan we have every
            technology and we help you to choose right platform for you that
            perfectly work for your requirements
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 mt-20 pb-20 w-5/6">
            {Aiappslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-400 p-8 text-center flex flex-col gap-20  justify-between items-center rounded-lg "
                >
                  <Image
                    src={items.image}
                    className="rounded-lg"
                    alt="image"
                    width={200}
                    height={200}
                  />
                  <span className="font-bold text-xl">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 8 */}
      <section
        className=" pb-10 pt-10"
        style={{ backgroundColor: "rgb(222,231,243)" }}
      >
        {" "}
        <div className="text-center flex justify-center text-4xl font-bold">
          AI
          <span className="text-custom-blue"> &nbsp; APPLICATION</span>
        </div>
        <div
          className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 md:w-5/6 m-auto p-14 rounded-xl"
          style={{ backgroundColor: "rgb(164,189,247)" }}
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
            <div className="text-2xl font-bold">
              <span className="border-b-4 border-white"> v i d s </span>
              <span className="">s a v e</span>
            </div>
            <div className=" text-xl font-bold text-white">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-sm md:text-xl">
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
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 bg-pink-300 md:w-5/6 m-auto p-14 rounded-xl">
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold">
              <span className="border-b-4 border-white"> s t a t s </span>
              <span className="">s v e</span>
            </div>
            <div className="text-white text-xl font-bold">
              STATUS DOWNLOADER
            </div>
            <p className="text-sm md:text-xl">
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
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8 bg-blue-300 md:w-5/6 m-auto p-14 rounded-xl">
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
            <div className="text-2xl font-bold">
              <span className="border-b-2 border-white"> v i d s </span>
              <span className="">s a v e</span>
            </div>
            <div className=" text-xl font-bold text-white">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-md md:text-xl">
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

export default Ai;
