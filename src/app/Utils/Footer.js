// "use client";
import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-custom-blue h-auto pt-10 pb-5 ">
        <div className="flex justify-center md:flex-row items-center flex-col w-5/6 m-auto gap-x-2">
          <div className="flex flex-col justify-center items-center md:items-start w-full p-5 ">
            <div>
              <Image
                src="/logos/logo.png"
                className="mx-auto md:ml-0"
                alt="Logo"
                width={200}
                height={100}
              />
            </div>
            <p className="text-white text-sm text-center md:text-left mt-3 w-5/6">
              Encoder Bytes is on a mission to provide the highest level of
              quality software products and services across the globe.
            </p>
            <div className="flex gap-2 justify-center md:justify-start items-center mt-3">
              <Link href="#" className="hover:text-gray-700">
                <FaFacebookSquare color="white" size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/encoderbytes/mycompany/"
                className="hover:text-gray-700"
              >
                <FaLinkedin color="white" size={20} />
              </Link>
              <Link
                href="https://github.com/EncoderBytes"
                className="hover:text-gray-700"
              >
                <FaGithubSquare color="white" size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-700">
                <FaTwitterSquare color="white" size={20} />
              </Link>
            </div>
          </div>
          <div className="flex w-full  items-center  md:items-start justify-start  h-52 flex-col">
            <div className="text-white text-xl font-black mt-5">Explore</div>
            <div className="text-white text-sm ml-4 mt-3 ">
              <ul>
                <Link href="/" className="hover:text-gray-700">
                  <li>Home</li>
                </Link>
                <Link href="/About" className="hover:text-gray-700">
                  <li>About Us</li>
                </Link>
                <Link href="/Services" className="hover:text-gray-700">
                  <li>Services</li>
                </Link>
                <Link href="/How_we_Work" className="hover:text-gray-700">
                  <li>How Do We Work</li>
                </Link>
                <Link href="/Bolg" className="hover:text-gray-700">
                  <li>Blog</li>
                </Link>
                <Link href="/Career" className="hover:text-gray-700">
                  <li>Career</li>
                </Link>
                <Link href="/Projects" className="hover:text-gray-700">
                  <li>Protfolio</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex w-full  items-center md:items-start justify-start  h-52 flex-col">
            <div className="text-white text-xl font-black mt-5">Contact</div>
            <div className="text-white text-sm  mt-3  w-full h-full">
              <ul className=" flex flex-col justify-center items-center md:items-start gap-2">
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  <Link href="#" className="hover:text-gray-600">
                    <span>+92 333 9921398</span>
                  </Link>
                </li>

                <li className="flex justify-center items-center gap-2">
                  <span>
                    <IoMdMail />
                  </span>{" "}
                  <Link href="#" className="hover:text-gray-600">
                    <span>info@encoderbytes.com</span>
                  </Link>
                </li>

                <li className="flex justify-center items-center gap-2">
                  <span>
                    <TbWorld />
                  </span>{" "}
                  <Link href="#" className="hover:text-gray-700">
                    <span>iwww.encoderbytes.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full  items-center md:items-start justify-start  h-52 flex-col">
            {/* <div className="flex flex-col justify-center items-start md:items-start w-full p-5 border-2 border-red-300 h-52"> */}
            <div className="text-white text-xl font-black mt-5">Address</div>
            <div className="text-white text-sm mt-4 w-4/6 md:w-full h-full flex text-center md:text-start md:justify-start md:items-start">
              EncoderBytes, IT Park, PTCL Training Center, Peshawar, KP,
              Pakistan
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center text-white bg-custom-color text-sm p-4">
        © Copyright 2022, EncoderBytes
      </div>
    </>
  );
};

export default Footer;
