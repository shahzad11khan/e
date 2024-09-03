"use client";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import ApplyContactForm from "../Utils/ApplyContactForm";
import Link from "next/link";
import { VacancyCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
const page = () => {
  const [vacancy, setVacancy] = useState([]);
  const getVacancy = async () => {
    try {
      const response = await VacancyCount();
      const admins = response.admins;
      setVacancy(admins);
    } catch (error) {
      console.error(`Failed to fetch vacancies: ${error}`);
    }
  };
  useEffect(() => {
    getVacancy();
  }, []);
  return (
    <div className="bg-white">
      <Top />
      <div
        className="max-w-full h-auto flex justify-center items-center mt-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner-Facebook-Cover-copy.png')",
          backgroundSize: "100% 100vh", // Set background size to full width and full height of the viewport
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-36">
          <div className="text-custom-blue text-2xl md:text-6xl font-bold flex justify-center items-center">
            CAREERS
          </div>
          <div className="flex m-auto py-6">
            <p className="flex w-5/6 md:w-3/6 m-auto justify-center items-center text-center text-md font-medium">
              We are providing best jobs opportunities for people who want to
              grow their skills and career in different fields of the IT
              industry. Also we provide internship for fresh graduates.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold mt-14 text-center md:text-left text-md"
          >
            Home - <span className="text-custom-blue">Careers</span>
          </a>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-1xl font-bold text-2xl">
            <span className="border-b-4 border-custom-blue">e n c o</span>
            <span className=""> d e r b y t e s .</span>
          </div>
          <div className="text-3xl font-bold">
            <span className="text-gray-800">CAREERS AT </span>
            <span className="text-custom-blue"> ENCODERBYTES</span>
          </div>
          <p className="text-sm md:text-md">
            We strive to hire the absolute best people. As a services
            organisation, we firmly believe that it is the single most important
            reason for all the success the company has achieved to-date. And
            this is really the only way to move forward.
          </p>
        </div>
        {/* iamge */}
        <div className="mt-8 bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Rectangle-30.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-gray-200 pb-36">
        <div className="flex  flex-col justify-center items-center  w-5/6 m-auto">
          <p className="font-bold md:text-4xl text-center md:text-left mt-10">
            CAREERS AT <span className="text-custom-blue">ENCODERBYTES.</span>
          </p>
          {vacancy.map((vac) => {
            return (
              <>
                <div class="gap-4 md:gap-0 mt-20 ">
                  <div className="flex flex-col md:flex-row">
                    <div class="w-full md:w-3/4">
                      <div class="pl-2">
                        <div class="text-3xl font-bold">{vac.VacancyTitle}</div>
                        <div class="text-2xl font-bold text-custom-blue mt-4">
                          DESIRED SKILLS
                        </div>
                        <div className="pl-4 mt-4 text-md text-gray-600">
                          {vac.Requireds.split(". ").map((sentence, index) => (
                            <li key={index}>{sentence.trim()}</li>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div class="w-full md:w-1/4 flex justify-center h-80 mt-5">
                      <div class="flex flex-col gap-3 justify-center items-center border-2 rounded-xl bg-custom-blue px-12 text-white">
                        <p className="font-medium">VACANCIES</p>
                        <p>1</p>
                        ---------------------
                        <p className="font-medium">EXPERIENCE</p>
                        <p className="font-bold text-3xl text-gray-800">
                          {vac.Experience} year
                        </p>
                        <Link href="#Apply">
                          <button class="rounded-md bg-gray-600 px-5 py-3 hover:bg-custom-blue font-bold hover:border-white hover:border-2 mt-3">
                            APPLY NOW
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start font-bold w-full md:w-3/6 text-sm mt-10 border-b-4 border-dotted border-custom-blue"></div>

                  <div className="flex flex-col md:pl-5 mt-20 ">
                    <span className="text-custom-blue text-2xl font-bold">
                      WHAT WE OFFER
                    </span>
                    <ul className="mt-8 text-md text-gray-600">
                      <li> • Basic salary</li>
                      <li> • Health allowance</li>
                      <li> • Paid holidays</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center font-bold  text-custom-blue h-1 bg-black w-full my-4 mt-20"></div>
              </>
            );
          })}

          {/* 
          <div class="gap-4 md:gap-0 mt-20  ">
            <div className="flex flex-col md:flex-row">
              <div class="w-full md:w-3/4">
                <div class="pl-2">
                  <div class="text-3xl font-bold">UI/UX DESIGNER</div>
                  <div class="text-2xl font-bold text-custom-blue mt-6">
                    DESIRED SKILLS
                  </div>
                  <div class="pl-4 mt-4 text-md text-gray-600">
                    <ul>
                      <li>
                        • 2 Years of experience working on cutting edge web
                        development technologies, ideally for a product
                        development and implementation
                      </li>
                      <li>
                        • Work with the latest technologies in JavaScript Stack
                        i.e MEAN (Mongo/ MySql, Express JS, Angular JS/5, React,
                        Node JS, Socket.io) development in a fast paced, modern,
                        forward thinking environment
                      </li>
                      <li>
                        • Expected to have full stack knowledge & experience.
                        Must have working knowledge of Node JS & Angular
                      </li>
                      <li>• Should be strong with logic & algorithms</li>
                      <li>
                        • Hands on Experience in Restful API & Web Sockets
                      </li>
                      <li>
                        • Proven experience in Front end Technologies: In-depth
                        knowledge of HTML5, CSS3, and JavaScript
                      </li>
                      <li>• Experience with version control/ Git</li>
                      <li>
                        • Strong experience on AngularJS 4X plus will be an
                        added advantage
                      </li>
                      <li>
                        • Experience with CI processes like Jenkins will be an
                        added advantage
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 flex justify-center h-80 mt-5">
                <div class="flex flex-col gap-3 justify-center items-center border-2 rounded-xl bg-custom-blue px-12 text-white">
                  <p className="font-medium">VACANCIES</p>
                  <p>1</p>
                  ---------------------
                  <p className="font-medium">EXPERIENCE</p>
                  <p className="font-bold text-3xl text-gray-800">2 Years</p>
                  <Link href="#Apply">
                    <button class="rounded-md bg-gray-600 px-5 py-3 hover:bg-custom-blue font-bold hover:border-white hover:border-2 mt-3">
                      APPLY NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-start font-bold w-full md:w-3/6 text-sm mt-10 border-b-4 border-dotted border-custom-blue"></div>

            <div className="flex   flex-col md:pl-5 mt-20">
              <span className="text-custom-blue text-2xl font-bold">
                WHAT WE OFFER
              </span>
              <ul className="mt-8 text-md text-gray-600">
                <li> • Basic salary</li>
                <li> • Health allowance</li>
                <li> • Paid holidays</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center font-bold  text-custom-blue h-1 bg-black w-full my-4 mt-20 "></div> */}
        </div>
      </div>
      <ApplyContactForm />
    </div>
  );
};

export default page;
