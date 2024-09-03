"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import { AboutCarts } from "../components/carts";
import Contactform from "../Utils/Contactform";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { TeamCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

const page = () => {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    getTeam();
  }, []);
  const getTeam = async () => {
    try {
      const { admins } = await TeamCount();
      setemployees(admins);
    } catch (error) {
      console.log(`Failed to fetch team: ${error}`);
    }
  };
  return (
    <div className=" bg-white">
      <Top />
      <div
        className="max-w-full h-auto flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner-Facebook-Cover-copy.png')",
          backgroundSize: "100% 100vh", // Set background size to full width and full height of the viewport
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-24">
          {/* <Image
            src="/Text-headings/All-About-encoderbytes.png"
            alt="Logo"
            width={400}
            height={700}
            className="w-full md:w-auto"
          /> */}
          <div className="text-custom-blue text-2xl md:text-4xl font-bold flex justify-center items-center">
            ALL ABOUT ENCODERBYTES
          </div>
          <div className="flex  m-auto py-3">
            <p className="flex w-5/6 md:w-3/6 m-auto justify-center items-center text-center">
              We solve real-world problems with the help of new and emerging
              technology. We strive to provide fully-fledged R&D based quality
              services and products using standard SDLC, Agile methodology and
              uptodate technology.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold text-center md:text-left mt-20"
          >
            Home - <span className="text-custom-blue">About Us</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32 ">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-1xl font-bold">
            <span className="border-b-4 border-custom-blue">e n c o</span>
            <span className=""> d e r b y t e s .</span>
          </div>
          <div className="text-4xl font-bold">
            <span className="">WHO WE</span>
            <span className="text-custom-blue"> ARE?</span>
          </div>
          <p className="text-sm md:text-md">
            Encoder Bytes Pvt. is an emerging AI first company that works in
            multiple fronts pertaining to three verticals, i-e training,
            products and services, with a focus on 4th industry.
            <br></br>
            <br></br> Our first hand goal is to be the leading tech services
            provider in 4th industrial and High-technologies such as Mobile App
            development, Web development. AI, Blockchain, AR/VR,We are on a
            mission to develop user centric products that can provide both
            economic and social benefits for the people.
          </p>
        </div>
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
      {/* section 2 */}
      <div className="bg-gray-200 p-14 px-20">
        <div className="flex justify-center items-center flex-col mt-4 ">
          <div className="text-custom-blue text-2xl md:text-4xl font-bold flex justify-center items-center gap-2">
            <span className="text-black">WHAT WE </span>
            <span className="text-custom-blue"> VALUE?</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mt-20 w-5/6 m-auto">
          <div className="flex flex-col justify-center mx-auto cardContent bg-white rounded-md">
            <div className="w-full mb-5 md:mb-0 lg:mb-5 md:mr-0 lg:mr-0 lg:ml-auto">
              <div className="card c1 shadow text-dark rounded-lg">
                <div className="card-body my-3" id="cardBody1">
                  <div className="mt-2 cardtext1 text-center p-8">
                    <h1 className="font-bold text-4xl">CLIENT</h1>
                    <p className="text-wrap card-text box-content mt-3 text-md text-custom-blue">
                      Our client-centric approach always prioritizes our clients
                      and their needs. We make sure that every decision,
                      process, and strategy we follow aligns with the goals of
                      our client and delivers results that surpass their
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto cardContent bg-white rounded-md">
            <div className="w-full mb-5 md:mb-0 lg:mb-5 md:mr-0 lg:mr-0 lg:ml-auto">
              <div className="card c1 shadow text-dark rounded-lg">
                <div className="card-body my-3" id="cardBody1">
                  <div className="mt-2 cardtext1 text-center p-8">
                    <h1 className="font-bold text-4xl">TEAM WORK</h1>
                    <p className="text-wrap card-text box-content mt-3 text-md text-custom-blue">
                      Our team consists of Super programmers. World Class
                      business analysts. Creative designers and problem solvers.
                      There&apos;s hardly a software app development challenge
                      that our team cannot tackle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto cardContent bg-white rounded-md">
            <div className="w-full mb-5 md:mb-0 lg:mb-5 md:mr-0 lg:mr-0 lg:ml-auto">
              <div className="card c1 shadow text-dark rounded-lg">
                <div className="card-body my-3" id="cardBody1">
                  <div className="mt-2 cardtext1 text-center p-8">
                    <h1 className="font-bold text-4xl">PROCESS</h1>
                    <p className="text-wrap card-text box-content mt-3 text-md text-custom-blue">
                      We use upto date agile methodology of software development
                      cycle (SDLC) to ensure clients satisfactions with
                      expeditious development and delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3rd */}
      <div className="w-full min-h-full flex justify-center items-center mt-14">
        <div className="flex justify-center items-center  flex-col mt-4 ">
          <div className="text-4xl font-bold">
            <span className="">WHY CHOOSE </span>
            <span className="text-custom-blue">US?</span>
          </div>
          <p className="w-5/6 mt-11 text-center text-md ">
            To ensure your business growth with timely delivery of your software
            with multiple revision, we are best fit for you
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pb-32 w-5/6 m-auto ">
        {AboutCarts.map((cart) => {
          return (
            <div
              className="rounded-xl bg-gray-200 p-8  mb-4 md:mb-0 h-auto "
              key={cart.no}
            >
              <div className="flex justify-between">
                <span className="text-8xl font-bold text-slate-300">
                  {cart.no}
                </span>
                <Image src={cart.image1} alt="Logo" width={70} height={60} />
              </div>
              <div className="text-2xl md:text-2xl font-bold mt-10">
                <span className="">{cart.text1} </span>
                <span className="text-custom-blue">{cart.text2}</span>
              </div>
              <p className="flex justify-center mt-6 text-gray-400 text-md">
                {cart.description}
              </p>
            </div>
          );
        })}
      </div>
      {/* section 4th */}
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
        <div className=" my-3  flex flex-col md:flex-row justify-between items-center  sm:flex-row md:px-16 w-10/12 m-auto ">
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
            <div className="text-white text-md font-medium w-5/6 mt-5">
              DM us, to Know about the Cost and Feasibility of your idea to
              shape it into a robust software .
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

      {/* section 5th */}
      <div className="w-full bg-gray-300 py-16">
        <div
          className="m-4 md:mx-20 flex flex-col justify-center items-center h-full rounded-md md:h-auto md:p-20"
          style={{
            backgroundImage: "url('/backgrounds/developing-cost.png')",
            backgroundSize: "cover", // Ensure the background image covers the container
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div className="mt-32 text-4xl md:mt-32 text-white font-bold md:text-5xl">
            HOW IS
          </div>

          <div className="py-10 text-white font-bold text-3xl md:text-7xl">
            LIFE AT ENCODERBYTES.
          </div>
          <p className="mt-5 mx-4 md:mx-40 text-white text-start w-4/6 text-md">
            Encoder Bytes is in existence since 2020, our multi talented team
            have expertise both in Development and cocurricular activities. We
            Keep our employees active and relax to ensure a healthy working
            environment while providing a career and professional growth
            ecosystem
          </p>
          <button className="text-custom-blue hover:text-white text-md px-5 py-3 font-black  mt-6 rounded-md bg-white hover:bg-custom-blue mb-6">
            E X P L O R E
          </button>
        </div>
      </div>
      {/* section 6th team */}

      <div className="w-full min-h-full flex justify-center items-center mt-14">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-md md:text-4xl font-bold">
            MEET OUR
            <span className="text-custom-blue"> TEAM.</span>
          </div>
          <p className=" mt-5 text-center w-4/6 text-md">
            Our team consists of Super programmers. World Class business
            analysts. Creative designers and problem solvers. There&apos;s
            hardly a software app development challenge that our team cannot
            tackle.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4  mt-12  pb-20 w-5/6 m-auto">
        {employees.map((team) => (
          <div key={team.image} class="px-20 mt-4 md:py-1 md:px-3">
            <div class="cardtext1 border-2 border-gray-300 rounded-xl shadow-md text-center h-[400px]  py-10 hover:border-2 hover:border-custom-blue ">
              <div class="row">
                <div class="col-md-12 flex justify-center rounded-full">
                  <Image
                    src={`/uploads/${team.image}`}
                    className="img-fluid  rounded-full  filter grayscale hover:filter-none transition duration-300"
                    alt="Logo"
                    width={170}
                    height={170}
                    style={{ backgroundSize: "cover" }}
                  />
                </div>
              </div>

              <h1 class="py-3 px-4 mt-2">
                <span class="font-bold text-custom-blue text-xl">
                  {team.username}
                </span>
                <p class="text-xs card-text box-content text-gray-400">
                  {team.email}
                </p>
                <p class="text-xs card-text box-content text-gray-400">
                  {team.designation}
                </p>
              </h1>
              <div class="social-icons mt-10 pb-10 ">
                <div className="flex justify-center bg-gray-300 w-3/6 m-auto items-center rounded-md text-gray-500 hover:bg-blue-100">
                  {team.LinkedIn && (
                    <a href={team.LinkedIn} class="px-2 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="w-6 h-6 fill-current hover:text-blue-600 text-gray-500"
                      >
                        <path d="M22,0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0ZM7.57,20H4V9H7.57ZM5.76,7.68A2.75,2.75,0,1,1,8.28,5.2,2.76,2.76,0,0,1,5.76,7.68ZM20,20H16V14c0-1.14-.42-1.91-1.52-1.91S13,12.86,13,14v6H9V9h3v1.27A4.22,4.22,0,0,1,16,8.8c3.71,0,4.52,2.44,4.52,5.6Z"></path>
                      </svg>
                    </a>
                  )}
                  {team.Github && (
                    <a href={team.Github} class="px-2 py-1 hover:text-blue-600">
                      <FaGithubSquare size={25} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  */}

      <div className="w-full min-h-full flex justify-center items-center  bg-gray-200">
        <div className="flex justify-center items-center flex-col mt-4 bg-gray-200">
          <div className="text-md md:text-4xl font-bold mt-14">
            CAREER AT
            <span className="text-custom-blue"> ENCODERBYTES.</span>
          </div>
          <div className="flex w-3/4 m-auto text-center mt-5 text-md">
            We are starving for the talented accordant, passionate who wants to
            work on real world products and acquired hands-on skills. Among
            hundreds, we chose you to be the family of Encoderbyte if you have
            experience in
          </div>
          <div className="flex justify-center items-center w-4/6 m-auto text-center mt-2 text-custom-blue font-black text-10 ">
            PROJECT MANAGEMENT, TECHNICAL/ENGINEERING, QUALITY ASSURANCE AND
            MARKETING
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9  mt-10 w-5/6 m-auto ">
          <div className="flex flex-col justify-center bg-white mx-auto cardContent rounded-xl p-6">
            <div className="w-full mb-5 md:mb-0 lg:mb-5 md:mr-0 lg:mr-0 lg:ml-auto  ">
              <div className="card-body" id="cardBody1">
                <div className="mt-2  cardtext1 text-center p-3">
                  <h1 className="font-bold text-md text-custom-blue">
                    PROJECT MANAGEMENT
                  </h1>
                  <p className="text-wrap card-text box-content mt-3 text-sm">
                    For the passionate having ability to execute and manage and
                    win projects and deal with the clients efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second cart */}
          <div className="flex flex-col justify-center mx-auto cardContent bg-white rounded-md">
            <div className="w-full mb-5 md:mb-0 lg:mb-5 md:mr-0 lg:mr-0 lg:ml-auto">
              {/* <div className="card c1 shadow text-dark rounded-lg"> */}
              <div className="card-body my-3" id="cardBody1">
                <div className="mt-2 cardtext1 text-center p-5">
                  <h1 className="font-bold text-md text-custom-blue">
                    TECHNICAL/ <br />
                    ENGINEERING
                  </h1>
                  <p className="text-wrap card-text box-content mt-3 text-sm">
                    For the aspirants of emerging technologies like AI, Data
                    Science , Block chain, Web, Mobile, Graphics and UI/UX
                    Designing.
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* 3rd cart */}
          <div className="flex flex-col justify-center mx-auto cardContent bg-white rounded-md">
            <div className="w-full mb-5 md:mb-0 lg:mb-5 md:mr-0 lg:mr-0 lg:ml-auto">
              {/* <div className="card c1 shadow text-dark rounded-lg"> */}
              <div className="card-body my-3" id="cardBody1">
                <div className="mt-2 cardtext1 text-center p-5">
                  <h1 className="font-bold text-md text-custom-blue">
                    {" "}
                    QUALITY ASSURANCE
                  </h1>
                  <p className="text-wrap card-text box-content mt-3 text-sm ">
                    For the digital passionate to upscale and rescale current
                    services using digital media
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* 4th cart */}
          <div className="flex flex-col justify-center mx-auto cardContent bg-white rounded-md">
            <div className="w-full mb-5 md:mb-0 lg:mb-5 md:mr-0 lg:mr-0 lg:ml-auto">
              {/* <div className="card c1 shadow text-dark rounded-lg"> */}
              <div className="card-body my-3" id="cardBody1">
                <div className="mt-2 cardtext1 text-center p-5">
                  <h1 className="font-bold text-md text-custom-blue">
                    MARKETING
                  </h1>
                  <p className="text-wrap card-text box-content mt-3 text-sm ">
                    For the evangelists who have a passion for telling
                    compelling stories to the world that resonate with our
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      <Contactform />
    </div>
  );
};

export default page;
