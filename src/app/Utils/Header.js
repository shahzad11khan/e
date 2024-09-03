// Header.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [tabOpened, setTabOpened] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
  };
  const closeProjectsDropdown = () => {
    setProjectsDropdownOpen(false);
  };

  return (
    <div>
      <nav
        className={`bg-gray-800 fixed top-0 md:top-0 left-0 w-full  z-50 h-20 transition-all duration-300 opacity-90 ${
          isSticky ? "py-2 top-0" : "p-2 lg:mt-9 mt-0 "
        }`}
      >
        <div className="flex justify-between items-center w-5/6 m-auto py-2">
          {/* Left Side: Logo */}
          <div className="flex justify-center items-center">
            <Image
              src="/logos/logo.png"
              alt="Logo"
              className="w-25 h-auto"
              width={200}
              height={200}
            />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex flex-grow justify-center text-md gap-3">
            <Link
              onClick={() => {
                setTabOpened("Home");
                setProjectsDropdownOpen(false);
              }}
              href="/"
              // className="text-white mr-4 hover:text-gray-300 hover:border-b hover:border-custom-blue"
              className={`mr-4 hover:border-b hover:border-custom-blue ${
                tabOpened === "Home" ? "text-blue-700" : "text-white"
              }`}
            >
              HOME
            </Link>
            <Link
              onClick={() => {
                setTabOpened("About");
                setProjectsDropdownOpen(false);
              }}
              href="/About"
              className={`mr-4 hover:border-b hover:border-custom-blue ${
                tabOpened === "About" ? "text-blue-700" : "text-white"
              }`}
              // className="text-white mr-4 hover:text-gray-300 hover:border-b hover:border-custom-blue"
            >
              ABOUT
            </Link>
            <Link
              onClick={() => {
                setTabOpened("Projects");
                setProjectsDropdownOpen(false);
              }}
              href="/Projects"
              // className="text-white mr-4 hover:text-gray-300 hover:border-b hover:border-custom-blue"
              className={`mr-4 hover:border-b hover:border-custom-blue ${
                tabOpened === "Projects" ? "text-blue-700" : "text-white"
              }`}
            >
              PROJECTS
            </Link>
            <div className="relative">
              <button
                onClick={toggleProjectsDropdown}
                className="text-white mr-4 relative"
              >
                SERVICES
                <span className="ml-1">&#9662;</span>
              </button>

              {isProjectsDropdownOpen && (
                <div
                  className="absolute left-0 mt-5 border rounded-md shadow-lg z-10 bg-custom-blue"
                  onClick={closeProjectsDropdown}
                >
                  <div
                    className="p-2 mt-1 fixed left-0 w-full pb-6 h-[400px]"
                    style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
                  >
                    <div className="flex w-4/6 m-auto mt-10 text-2xl font-bold text-white">
                      <Link href="/Services">
                        <span className="border-b-2 border-custom-blue">
                          SERVICES WE
                        </span>
                        <span> &nbsp;PROVIDE</span>
                      </Link>
                    </div>
                    <div className="flex w-4/6 justify-between m-auto mt-16">
                      <div className="text-start p-3">
                        <div className="font-bold text-white">
                          <Link
                            href="/Mobile"
                            className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue text-xl"
                          >
                            MOBILE APP DEVELOPMENT
                          </Link>
                        </div>
                        <div className="text-white text-sm mt-3 leading-7">
                          <ul>
                            <li>
                              <Link
                                href="/Mobile/#mobilesection3"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                DEVELOPMENT SERVICES
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Mobile/#mobilesection4"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                SERVICES FOR DIFF INDUSTRIES
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Mobile/#mobilesection5"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                DEVELOPMENT PROCESS
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Mobile/#mobilesection6"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                DEVELOPMENT COST
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Mobile/#mobilesection7"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                TOOLS & TECHNOLOGIES
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-start p-3">
                        <div className="font-bold text-white">
                          <Link
                            href="/WebApp"
                            className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue text-xl"
                          >
                            WEB DEVELOPMENT
                          </Link>
                        </div>
                        <div className="text-white text-sm mt-3 leading-7">
                          <ul>
                            <li>
                              <Link
                                href="/WebApp/#section3"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                DEVELOPMENT SERVICES
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/WebApp/#section4"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                WHAT&apos;S IMPORTANT
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/WebApp/#section5"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                INTELLECTUAL PROPERTY PROTECTION
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/WebApp/#section6"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                DEVELOP FOR VARIETY OF INDUSTRIES
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/WebApp/#section7"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                TOOLS & TECHNOLOGIES
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-start p-3">
                        <div className="font-bold text-white">
                          <Link
                            href="/Ai"
                            className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue text-xl"
                          >
                            ARTIFICIAL INTELLIGENCE
                          </Link>
                        </div>
                        <div className="text-white text-sm mt-3 leading-7">
                          <ul>
                            <li>
                              <Link
                                href="/Ai/#section3"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                DEVELOPMENT SERVICES
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Ai/#section4"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                TOOLS & TECHNOLOGIES
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-start p-3">
                        <div className="font-bold text-white">
                          <Link
                            href="/Uiux"
                            className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue text-xl"
                          >
                            UI / UX
                          </Link>
                        </div>
                        <div className="text-white text-sm mt-3 leading-7">
                          <ul>
                            <li>
                              <Link
                                href="#"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                DESIGN PROCESS
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                              >
                                TOOLS & TECHNOLOGIES
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/Blog"
              onClick={() => {
                setTabOpened("Blog");
                setProjectsDropdownOpen(false);
              }}
              className={`mr-4 hover:border-b hover:border-custom-blue ${
                tabOpened === "Blog" ? "text-blue-700" : "text-white"
              }`}
            >
              BLOG
            </Link>
            <Link
              href="/How_we_Work"
              onClick={() => {
                setTabOpened("How_we_Work");
                setProjectsDropdownOpen(false);
              }}
              className={`mr-4 hover:border-b hover:border-custom-blue ${
                tabOpened === "How_we_Work" ? "text-blue-700" : "text-white"
              }`}
            >
              HOW WE WORK
            </Link>
            <Link
              href="/Career"
              // className="text-white mr-4 hover:text-gray-300 hover:border-b hover:border-custom-blue"
              onClick={() => {
                setTabOpened("Career");
                setProjectsDropdownOpen(false);
              }}
              className={`mr-4 hover:border-b hover:border-custom-blue ${
                tabOpened === "Career" ? "text-blue-700" : "text-white"
              }`}
            >
              CAREER
            </Link>
          </div>

          {/* Right Side: Contact Us Button */}
          <div className="hidden md:flex justify-between">
            <Link href="#form">
              <button className="border-2 hover:bg-custom-blue text-white font-semibold py-2 px-4 rounded-md shadow-md">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden justify-between">
            <button
              id="mobile-menu-button"
              className="text-white hover:text-gray-300"
              onClick={toggleMobileMenu}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="menu w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H3zm0 6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "" : "hidden"
          } bg-gray-700`}
          id="mobile-menu"
        >
          <Link
            href="/"
            className="block text-white py-2 px-4 hover:bg-gray-700 hover:border-b hover:border-custom-blue"
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            HOME
          </Link>
          <Link
            href="/About"
            className="block text-white py-2 px-4 hover:bg-gray-700 hover:border-b hover:border-custom-blue"
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            ABOUT
          </Link>
          <Link
            href="/Projects"
            className="block text-white py-2 px-4 hover:bg-gray-700 hover:border-b hover:border-custom-blue"
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            PROJECTS
          </Link>
          <div className="relative">
            <button
              onClick={toggleProjectsDropdown}
              className="text-white mr-4 relative"
            >
              SERVICES
              <span className="ml-1">&#9662;</span>
            </button>

            {isProjectsDropdownOpen && (
              <div
                className="absolute left-0 mt-5 w-full border rounded-md shadow-lg z-10 bg-custom-blue"
                onClick={() => {
                  closeProjectsDropdown();
                  setMobileMenuOpen(!isMobileMenuOpen);
                }}
              >
                <div className="p-2 mt-1 w-full pb-6 bg-black bg-opacity-80 md:max-h-none md:overflow-visible max-h-96 overflow-y-auto">
                  <div className="flex w-4/6 m-auto mt-10 text-2xl font-bold text-white">
                    <span className="border-b-2 border-custom-blue">
                      SERVICES WE
                    </span>
                    <span>&nbsp;PROVIDE</span>
                  </div>
                  <div className="flex flex-col md:flex w-4/6 justify-between m-auto mt-2">
                    <div className="text-start p-3">
                      <div className="font-bold text-white">
                        <Link href="/Mobile">MOBILE APP DEVELOPMENT</Link>
                      </div>
                      <div className="text-white text-sm mt-3">
                        <ul>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection3"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              DEVELOPMENT SERVICES
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection4"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              SERVICES FOR DIFF INDUSTRIES
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection5"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              DEVELOPMENT PROCESS
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection6"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              DEVELOPMENT COST
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection7"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              TOOLS & TECHNOLOGIES
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-start p-3">
                      <div className="font-bold text-white">
                        <Link href="/WebApp">WEB DEVELOPMENT</Link>
                      </div>
                      <div className="text-white text-sm mt-3">
                        <ul>
                          <li>
                            <Link
                              href="/WebApp/#section3"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              DEVELOPMENT SERVICES
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section4"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              WHAT&apos;S IMPORTANT
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section5"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              INTELLECTUAL PROPERTY PROTECTION
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section6"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              DEVELOP FOR VARIETY OF INDUSTRIES
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section7"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              TOOLS & TECHNOLOGIES
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-start p-3">
                      <div className="font-bold text-white">
                        <Link href="/Ai">ARTIFICIAL INTELLIGENCE</Link>
                      </div>
                      <div className="text-white text-sm mt-3">
                        <ul>
                          <li>
                            <Link
                              href="/Ai/#section3"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              DEVELOPMENT SERVICES
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Ai/#section4"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              TOOLS & TECHNOLOGIES
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-start p-3">
                      <div className="font-bold text-white">
                        <Link href="/Uiux">UI / UX</Link>
                      </div>
                      <div className="text-white text-sm mt-3">
                        <ul>
                          <li>
                            <Link
                              href="#"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              DESIGN PROCESS
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              TOOLS & TECHNOLOGIES
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            href="#"
            className="block text-white py-2 px-4 hover:bg-gray-700 hover:border-b hover:border-custom-blue"
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            BLOG
          </Link>
          <Link
            href="/How_we_Work"
            className="block text-white py-2 px-4 hover:bg-gray-700 hover:border-b hover:border-custom-blue"
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            HOW WE WORK
          </Link>
          <Link
            href="/Career"
            className="block text-white py-2 px-4 hover:bg-gray-700 hover:border-b hover:border-custom-blue"
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            CAREER
          </Link>
          <Link href="#form">
            <button className="bg-blue-500 hover:bg-custom-blue text-white font-semibold py-2 px-4 rounded-md shadow-md w-full text-left">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
