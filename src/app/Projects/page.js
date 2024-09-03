"use client";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
// import { projects } from "../components/carts";
import Contactform from "../Utils/Contactform";
import { ProjectsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

const page = () => {
  const [Projects, setProjects] = useState([]);
  // const [category, setCategory] = useState("All");
  const [getitem, setgetitem] = useState(null);
  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = async () => {
    try {
      const { admins } = await ProjectsCount();
      setProjects(admins);
    } catch (error) {
      console.log(`Failed to fetch team: ${error}`);
    }
  };

  const handleButtonClick = (buttonValue) => {
    setgetitem(buttonValue);
  };
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
        <div className="flex flex-col justify-center items-center py-24 mt-24">
          <div className="text-custom-blue text-2xl md:text-5xl font-bold flex justify-center items-center">
            OUR PORTFOLIO
          </div>
          <div className="flex  m-auto py-3">
            <p className="flex w-5/6 md:w-5/6 m-auto justify-center items-center text-center text-md leading-4 font-medium">
              We have developed many web and mobile applications for the last
              four years. Some of them are the following.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold mt-20 text-center md:text-left text-md"
          >
            Home - <span className="text-custom-blue">Our Portfolio</span>
          </a>
        </div>
      </div>

      {/* <div className=""> */}

      <div className="mt-32 md:mt-32 w-full bg-gray-200 p-5 md:w-4/6 md:m-auto rounded-md font-bold h-auto ">
        {" "}
        <ul className="flex gap-2 md:gap-5 justify-center h-auto  ">
          <li
            className="hover:text-custom-blue text-gray-400 cursor-pointer text-sm md:text-md"
            onClick={() => {
              handleButtonClick("All");
            }}
          >
            ALL
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-gray-400 text-sm md:text-md"
            onClick={() => {
              handleButtonClick("mobileapplication");
            }}
          >
            MOBILE APP
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-sm text-gray-400 md:text-md"
            onClick={() => {
              handleButtonClick("webapplication");
            }}
          >
            WEB APP
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-sm md:text-md text-gray-400"
            onClick={() => {
              handleButtonClick("artificialintelligence");
            }}
          >
            ARTIFICIAL INTELLIGENCE
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-sm md:text-md text-gray-400"
            onClick={() => {
              handleButtonClick("blockchain");
            }}
          >
            BLOCK CHIAN
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-sm md:text-md text-gray-400"
            onClick={() => {
              handleButtonClick("uiux");
            }}
          >
            UI/UX DESIGNING
          </li>
        </ul>
      </div>
      {/* </div> */}

      {/* cards */}
      <div className="grid grid-cols-1 sm:w-5/6 md:grid-cols-2 justify-center  gap-10 mt-28 w-4/6 m-auto">
        {Projects.map((project) => {
          let searchproject = project.ProjectCategory.trim().replace(
            /\s+/g,
            ""
          );
          let LowerCase = searchproject.toLowerCase();
          console.log(LowerCase, getitem);
          if (LowerCase === getitem) {
            return (
              <div
                key={project.id}
                className=" rounded-xl overflow-hidden shadow-lg w-6/6 p-5 bg-blue-100"
              >
                <Image
                  className="w-full"
                  src={`/uploads/${project.Image}`}
                  alt="Image"
                  width={200}
                  height={200}
                />
                <div className="px-6 py-4">
                  <div className="font-semibold text-sm text-gray-600 mb-4">
                    <span className="text-2xl font-black border-b-4 border-custom-blue">
                      {project.ProjectCategory.split(" ")[0]}
                    </span>
                    <span className="text-2xl font-black pl-2">
                      {project.ProjectCategory.split(" ")[1]}
                    </span>
                  </div>
                  <div className="font-bold text-md mb-2">
                    <span className="text-2xl font-bold ">
                      {project.ProjectName.split(" ")[0]}
                    </span>
                    <span className="text-2xl font-bold  text-custom-blue pl-2">
                      {project.ProjectName.split(" ")[1]}
                    </span>
                  </div>
                  <p className="text-md text-gray-400 mt-5 w-11/12">
                    {project.ProjectDescription}
                  </p>
                  <div className="mt-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-custom-blue hover:text-custom-blue text-white font-bold p-3 rounded">
                        READ CASE STUDY
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          } else if (!getitem || getitem === "All") {
            return (
              <div
                key={project.id}
                className=" rounded-xl overflow-hidden shadow-lg w-6/6 p-5 bg-blue-100"
              >
                <Image
                  className="w-full"
                  src={`/uploads/${project.Image}`}
                  alt="Image"
                  width={200}
                  height={200}
                />
                <div className="px-6 py-4">
                  <div className="font-semibold text-sm text-gray-600 mb-4">
                    <span className="text-2xl font-black border-b-4 border-custom-blue">
                      {project.ProjectCategory.split(" ")[0]}
                    </span>
                    <span className="text-2xl font-black pl-2">
                      {project.ProjectCategory.split(" ")[1]}
                    </span>
                  </div>
                  <div className="font-bold text-md mb-2">
                    <span className="text-2xl font-bold ">
                      {project.ProjectName.split(" ")[0]}
                    </span>
                    <span className="text-2xl font-bold  text-custom-blue pl-2">
                      {project.ProjectName.split(" ")[1]}
                    </span>
                  </div>
                  <p className="text-md text-gray-400 mt-5 w-11/12">
                    {project.ProjectDescription}
                  </p>
                  <div className="mt-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-custom-blue hover:text-custom-blue text-white font-bold p-3 rounded">
                        READ CASE STUDY
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Contactform />
    </div>
  );
};

export default page;
