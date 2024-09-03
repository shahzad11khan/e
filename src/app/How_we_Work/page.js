import React from "react";
import Top from "../Utils/Top";
import Link from "next/link";
import { Howwework } from "../components/Howwework";
import Contactform from "../Utils/Contactform";
import Image from "next/image";
const How_we_work = () => {
  return (
    <div className=" bg-white">
      <Top />
      {/* first section */}
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
          <div className="text-custom-blue text-2xl md:text-5xl font-bold flex justify-center items-center">
            HOW DO WE WORK?
          </div>
          <div className="flex  m-auto py-3">
            <p className="flex w-5/6 md:w-3/6 m-auto justify-center items-center text-center text-md ">
              We follow the state of the art software development process ,
              initiating from requirement gathering from user till completion
              and deployment. Each phase during development of a software is
              valuable for us.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold text-center md:text-left mt-20 text-md"
          >
            Home - <span className="text-custom-blue ">How We Work</span>
          </a>
        </div>
      </div>
      {/* second section */}
      <section className="  flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 md:gap-x-8 mb-32 ">
        <div className="relative w-full md:w-[50%] h-auto">
          <span className="absolute top-0 left-0 flex  w-full">
            {" "}
            <ul className="flex flex-col gap-16 text-gray-400 mt-10">
              <li>
                <div className="flex justify-start items-start font-bold ">
                  <span> •</span>
                  <span className="pl-10">
                    <Link className="" href="#">
                      {" "}
                      01. DISCUSSION & ANALYSIS{" "}
                    </Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-start font-bold ">
                  <span> •</span>
                  <span className="pl-10">
                    <Link className="" href="#">
                      {" "}
                      02. PLANNING AND DESIGN{" "}
                    </Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-start font-bold ">
                  <span> •</span>
                  <span className="pl-10">
                    <Link className="" href="#">
                      {" "}
                      03. SOFTWARE DESIGN{" "}
                    </Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-start font-bold ">
                  <span> •</span>
                  <span className="pl-10">
                    <Link className="" href="#">
                      {" "}
                      04. SOFTWARE DEVELOPMENT{" "}
                    </Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-start font-bold ">
                  <span> •</span>
                  <span className="pl-10">
                    <Link className="" href="#">
                      {" "}
                      05. QUALITY ASSURANCE{" "}
                    </Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-start font-bold ">
                  <span> •</span>
                  <span className="pl-10">
                    <Link className="" href="#">
                      {" "}
                      06. MAINTENANCE{" "}
                    </Link>
                  </span>
                </div>
              </li>
            </ul>
          </span>
          <pre className="border-gray-400 border-l-2 py-72 ml-1  "></pre>
        </div>

        {/* iamge */}
        <div className="bg-yellow w-full md:w-[100%] h-auto md:h-full relative mt-5">
          <Image
            src="/backgrounds/img1.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
          <div className="font-bold md:text-2xl text-center md:text-left mt-16 text-gray-700">
            <span className="border-b-2 border-custom-blue">d i s c u</span>
            <span className="">s s i o n & a n a n l y s i s.</span>
          </div>
          <div className="font-bold md:text-4xl text-center md:text-left mt-8">
            <span className="text-custom-blue">OBJECTIVE</span>
          </div>
          <div className="mt-8 text-start">
            <ul>
              <li>• To understand the requirements of clients.</li>
              <li>• To Finalize the budget Plan.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* part of second section */}
      <section className="flex flex-col justify-center items-center w-full md:pr-14">
        <div className="">
          <div className="font-bold md:text-4xl text-center md:text-left ">
            <span className="text-custom-blue">DELIVERABLE</span>
          </div>
          <div className="mt-8">
            <ul>
              <li>• Finalized Project Cost Sheet.</li>
              <li>• Project Timeline.</li>
              <li>• Initial infographics prototype..</li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="mt-20">
          <div className="font-bold md:text-4xl md:pl-52 md:text-left ">
            <span className="text-custom-blue">TEAM MEMBER INVOLVED</span>
          </div>
          <div className="mt-8 md:pl-52">
            <ul>
              <li>• CTO</li>
              <li>• Project Manager</li>
              <li>• Development Lead</li>
              <li>• UI & UX Lead</li>
              <li>• Client</li>
              <li>• Business Analyst</li>
            </ul>
          </div>
        </div>
      </section>
      {Howwework.map((item) => {
        return (
          <>
            <section
              key={item.image}
              className="  flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 md:gap-x-8 mb-32 "
            >
              <div className="relative w-full md:w-[50%] h-auto"></div>

              {/* iamge */}
              <div className="bg-yellow w-full md:w-[100%] h-auto md:h-full relative mt-5">
                <Image
                  src={item.image}
                  alt="Logo"
                  className="object-cover w-full h-full"
                  width={400}
                  height={400}
                />
                <div className="font-bold md:text-md text-center md:text-left mt-16 text-gray-500">
                  <span className="border-b-2 border-custom-blue">
                    {item.underlinetitile}
                  </span>
                  <span className=""> {item.simpletitle}</span>
                </div>
                <div className="font-bold md:text-4xl text-center md:text-left mt-8">
                  <span className="text-custom-blue">OBJECTIVE</span>
                </div>
                <div className="mt-8 text-start">
                  <ul>
                    <li>{item.objectivekeys1[0]}</li>
                    <li>{item.objectivekeys1[1]}</li>
                    <li>{item.objectivekeys1[2]}</li>
                    <li>{item.objectivekeys1[3]}</li>
                    <li>{item.objectivekeys1[4]}</li>
                    <li>{item.objectivekeys1[5]}</li>
                    {/* <li>• To Finalize the budget Plan.</li> */}
                  </ul>
                </div>
              </div>
            </section>
            {/* part of second section */}
            <section className="flex flex-col justify-center items-center w-full md:pr-14">
              <div className="">
                <div className="font-bold md:text-4xl text-center md:text-left ">
                  <span className="text-custom-blue">DELIVERABLE</span>
                </div>
                <div className="mt-8">
                  <ul>
                    {/* <li>• Finalized Project Cost Sheet.</li>
                    <li>• Project Timeline.</li>
                    <li>• Initial infographics prototype..</li> */}
                    <li>{item.deliverablekeys[0]}</li>
                    <li>{item.deliverablekeys[1]}</li>
                    <li>{item.deliverablekeys[2]}</li>
                    <li>{item.deliverablekeys[3]}</li>
                    <li>{item.deliverablekeys[4]}</li>
                    <li>{item.deliverablekeys[5]}</li>
                  </ul>
                </div>
              </div>
              {/*  */}
              <div className="mt-20">
                <div className="font-bold md:text-4xl md:pl-52 md:text-left ">
                  <span className="text-custom-blue">TEAM MEMBER INVOLVED</span>
                </div>
                <div className="mt-8 md:pl-52">
                  <ul>
                    <li>• CTO</li>
                    <li>• Project Manager</li>
                    <li>• Development Lead</li>
                    <li>• UI & UX Lead</li>
                    <li>• Client</li>
                    <li>• Business Analyst</li>
                  </ul>
                </div>
              </div>
            </section>
          </>
        );
      })}
      {/* 4rth section banner*/}
      <section
        class="bg-yellow-400 mt-20 md:h-[550px]"
        style={{
          backgroundImage: "url('/backgrounds/project-communication.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="text-3xl text-center font-bold pt-28 text-gray-600">
          <span>PROJECT COMMMUNICATION</span>
          <span className="text-white"> STRUCTURE.</span>
        </div>
        <div className="text-white w-4/6 text-center m-auto mt-2 text-md">
          To make sure that our progress is going to meet the deadline we
          discuss and communicate on a daily basis between our team to look over
          the progress and performance of our team to ensure timely delivery of
          a project. For smooth operations and completion of a project, we use
          uptodate project management tools like Google meet,Trello,Skype, slack
          and Microsoft 360.
        </div>
        <div className="flex flex-col md:flex-row w-5/6 m-auto gap-10 mt-10 text-white  text-md ">
          <div className="w-full py-16  border-0 md:border-r-2 border-white flex flex-col justify-center items-center">
            <span className="text-10 font-bold">DAILY SCRUM STANDUP</span>
            <p className="text-sm">monday - friday</p>
            <p className="text-sm">30 minutes</p>
          </div>
          <div className="w-full py-16  border-0 md:border-r-2 border-white flex flex-col justify-center items-center">
            <span className="text-10 font-bold">WEEKLY REVIEW</span>
            <p className="text-sm">weekly</p>
            <p className="text-sm">40-60 minutes</p>
          </div>
          <div className="w-full py-16  border-0 md:border-r-2 border-white flex flex-col justify-center items-center">
            <span className="text-10 font-bold">SPRINT DELIVERY</span>
            <p className="text-sm">2-3 - weeks</p>
            <p className="text-sm">1-2 hours</p>
          </div>
          <div className="w-full py-16   border-white flex flex-col justify-center items-center">
            <span className="text-10 font-bold">DAILY SCRUM STANDUP</span>
            <p className="text-sm">bi-weekly</p>
            <p className="text-sm">3-4 hours</p>
          </div>
        </div>
      </section>

      {/* 5th section */}
      <Contactform />
    </div>
  );
};

export default How_we_work;
