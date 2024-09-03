import Image from "next/image";
import { Cartobj } from "./components/carts";
import Carousal from "./Utils/Carousal";
import Top from "./Utils/Top";
import Contactform from "./Utils/Contactform";
import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <Top />
      <div
        className="flex h-[760px] flex-col bg-cover relative "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 1, 1), rgba(0, 0, 1,1)), url('/backgrounds/background-image.png')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 md:left-auto md:right-auto md:top-96 md:ml-32 text-center md:text-left px-6 md:px-0">
          <span className="text-white text-2xl block md:inline">A bespoke</span>
          <div>
            <Image
              src="/Text-headings/Software-evelopment-Company.png"
              className="mt-3"
              alt="Logo"
              width={700}
              height={100}
            />
          </div>
          <p className="text-white text-2xl mt-3 font-medium">
            Software Development That Ensures Growth Of Your{" "}
            <br className="hidden md:inline" /> Business.
          </p>
          <div className=" text-white text-md rounded-md hover:bg-transparent py-3 px-2 mt-16 bg-custom-blue hover:border-white hover:border-2 w-[150px] flex items-center gap-2">
            <button className="">Let`s Discuss</button>
            <FaArrowCircleRight />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:px-10 bg-gray-200 pb-12 ">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:ml-20 md:mt-10 md:justify-between items-center w-5/7">
          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold">WE PROVIDE THE EXEMPLARY</p>
            <p className="text-4xl text-custom-blue font-bold">
              IT SOLUTIONS<span className="text-black">.</span>
            </p>
          </div>

          {/* Button */}
          <div className="mt-5 md:mt-0 mr-10">
            <Link href="/Services">
              <button className="text-custom-blue font-bold border-2 border-custom-blue py-3 px-6 rounded-md hover:text-white hover:bg-custom-blue">
                VIEW ALL SERVICES
              </button>
            </Link>
          </div>
        </div>
        {/* Description 1st*/}

        <div className="mt-4 ml-4 md:ml-20 md:w-4/6 font-medium text-md ">
          {/* Added conditional width for laptop screens */}

          <p>
            Encoder Bytes (Pvt.) Ltd. is a leading software development company
            based stationed in <br></br> Peshawar, Pakistan. We build robust
            software for startups and established businesses since<br></br>{" "}
            2019.
          </p>
        </div>
        {/* First Cards */}
        <div className="flex flex-col md:flex-row justify-around mt-8 md:mt-24 w-11/12 gap-5 m-auto ">
          {/* Feature 1 */}
          <div className="rounded-2xl bg-slate-50  px-8 py-3 md:mb-0 mt-4 md:mt-0 md:w-80">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-slate-300">
                01
              </span>
              <Image src="/icons/mob.png" alt="Logo" width={80} height={80} />
            </div>
            <div className="flex flex-col ml-2 mt-4 md:mt-10">
              <div className="text-center md:text-left">
                <Image
                  src="/Text-headings/mobapp.png"
                  alt="Logo"
                  width={190}
                  height={190}
                />
              </div>
              <p className="text-md mt-5 font-normal text-gray-400 leading-6">
                We are building stunning Mobile Apps that work across a variety
                of devices to increase and engage audiences - having security,
                scalability and usability features.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl bg-slate-50  px-8 py-3 md:mb-0 mt-4 md:mt-0 md:w-80">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-slate-300">
                02
              </span>
              <Image
                src="/icons/website.png"
                alt="Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col ml-2 mt-4 md:mt-10">
              <div className="text-center md:text-left">
                <Image
                  src="/Text-headings/webapp.png"
                  alt="Logo"
                  width={210}
                  height={210}
                />
                {/* <p className="text-lg md:text-3xl font-bold w-full">
                  WEB APPLICATION
                </p>
                <span className="text-lg md:text-3xl text-custom-blue font-bold">
                  DEVELOPMENT
                </span> */}
              </div>
              <p className="text-md mt-5 pb-28 font-normal text-gray-400 leading-6">
                By Utilizing the latest technologies, we build web applications
                that deliver remarkable functionality and user engagement .
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl bg-slate-50  px-8 py-3 md:mb-0 mt-4 md:mt-0 md:w-80">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-slate-300">
                03
              </span>
              <Image
                src="/icons/artificial.png"
                alt="Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col ml-2 mt-4 md:mt-10">
              <div className="text-center md:text-left">
                <Image
                  src="/Text-headings/AI.png"
                  alt="Logo"
                  width={190}
                  height={190}
                />
              </div>
              <p className="text-md mt-5 pb-5 font-normal text-gray-400 leading-6">
                We have a rich background in Artificial intelligence software
                development, with a hands-on AI expert team. AI software
                enhances the processes and operational efficiency of businesses
                and organizations. We integrate AI models to Mobile and Web
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl bg-slate-50  px-8 py-3 md:mb-0 mt-4 md:mt-0 md:w-80">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-slate-300">
                04
              </span>
              <Image
                src="/icons/user-experience.png"
                alt="Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col ml-2 mt-4 md:mt-10">
              <div className="text-center md:text-left">
                <p className="text-lg md:text-3xl font-bold w-full">UI/UX</p>
                <span className="text-lg md:text-3xl text-custom-blue font-bold">
                  DESIGN
                </span>
              </div>
              <p className="text-md mt-5 font-normal text-gray-400 leading-6">
                Our UI/UX designs are focused on efficient solutions to user
                problems. We apply design thinking to product design, therefore
                we categorize the UX process to 5 key phases : Product
                definition, Research, Analysis, Design and validation
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}
        {/* Description */}
      </div>
      {/* number banners */}
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: "url('/backgrounds/Group32.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full md:w-5/6  md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            <div className="py-5 md:py-12 flex flex-col justify-center items-center mt-3 border-r-0 md:border-r-2 border-white">
              <span className="text-4xl md:text-6xl text-white font-bold">
                100+
              </span>
              <p className="text-lg md:text-md text-white">
                Projects Delivered
              </p>
            </div>
            <div className="py-5 md:py-12 flex flex-col justify-center items-center mt-3 border-r-0 md:border-r-2 border-white">
              <span className="text-4xl md:text-6xl text-white font-bold">
                300
              </span>
              <p className="text-lg md:text-md text-white">Happy Clients</p>
            </div>
            <div className="py-5 md:py-12 flex flex-col justify-center items-center mt-3 border-r-0 md:border-r-2 border-white">
              <span className="text-4xl md:text-6xl text-white font-bold">
                01
              </span>
              <p className="text-lg md:text-md text-white">Global Office</p>
            </div>
            <div className="py-5 md:py-12 px-5 flex flex-col justify-center items-center mt-3 border-r-0 md:border-r-2 border-white">
              <span className="text-4xl md:text-6xl text-white font-bold">
                04
              </span>
              <p className="text-lg md:text-md text-white">
                Years In the Business
              </p>
            </div>
            <div className="py-5 md:py-12 flex flex-col justify-center items-center mt-3">
              <span className="text-4xl md:text-6xl text-white font-bold">
                50
              </span>
              <p className="text-lg md:text-md text-white">Expert Team</p>
            </div>
          </div>
        </div>
      </div>

      {/* End of numbers banner */}
      {/* 3 section */}
      <div className="md:px-10  w-full">
        <div className="flex flex-col md:flex-row md:mt-10 md:justify-between items-center ">
          {/* Text */}
          <div className="px-4 md:px-20">
            <p className="text-md md:text-3xl font-bold text-center md:text-left">
              RECENT PROJECTS
            </p>
            <p className="text-md md:text-3xl text-custom-blue font-bold text-center md:text-left">
              FROM OUR PORTFOLIO<span className="text-black">.</span>
            </p>
          </div>

          {/* Button */}
          {/* Button */}
          <div className="mt-5 md:mt-0 mr-10">
            <Link href="/Projects">
              <button className="text-custom-blue font-bold border-2 border-custom-blue py-3 px-6 rounded-md hover:text-white hover:bg-custom-blue">
                VIEW ALL PROJECTS
              </button>
            </Link>
          </div>
        </div>
        {/* Description 2nd*/}
        <div className="mt-4 w-full md:w-5/6 md:ml-20">
          {/* Added conditional width for laptop screens */}
          <p className="text-sm md:text-md font-normal">
            As we have delivered so many web, mobile and AI projects in the
            recent past but, the recent <br className="hidden md:inline"></br>{" "}
            most project we have completed is given below.
          </p>
        </div>
      </div>
      {/* 4 section */}
      {/* done responsive */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8">
        <div className="bg-yellow w-full md:w-[70%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/induz-a-industrial-category-wordpress-theme.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-2xl font-bold">
            <span className="border-b-2 border-black"> I n d </span>
            <span> u z .</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl md:text-3xl font-semibold text-center md:text-left">
              AN INDUSTRY&apos;S EMPLOYEES
            </div>
            <div className="flex items-center gap-2 text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-custom-blue">
                MANAGEMENT APPLICATION{" "}
                <span className="text-black text-lg md:text-2xl">.</span>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-md text-gray-400">
            As we have delivered so many web, mobile and AI projects in the
            recent past but, the recent most project we have completed is given
            below.
          </p>
          <div className="flex gap-3">
            <div className="border-2 border-custom-blue p-3 rounded-md bg-custom-blue text-white font-bold hover:bg-white hover:text-custom-blue">
              <button className="">READ CASESTUDY</button>
            </div>
            <div className="border-2 border-custom-blue p-3 rounded-md hover:bg-custom-blue hover:text-white font-bold text-custom-blue">
              <button className="">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>

      {/* 5 section  */}
      <div className="md:px-10 mt-32 bg-gray-200 pb-14">
        <div className="px-4 md:px-10 mt-10 md:mt-32 bg-gray-200 pb-14 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Text */}
            <div className="px-4 md:px-0 mt-8 md:mt-0 md:ml-20 md:w-[50%]">
              <p className="text-md md:text-4xl font-bold">OUR APPROACHES</p>
              <p className="text-md md:text-4xl text-custom-blue font-bold">
                TO SOLVE A PROBLEM<span className="text-black">.</span>
              </p>
            </div>

            {/* Button */}
            <div className="mt-5 md:mt-0 mr-10">
              <Link href="#">
                <button className="text-custom-blue font-bold border-2 border-custom-blue py-3 px-6 rounded-md hover:text-white hover:bg-custom-blue">
                  READ DETAILS
                </button>
              </Link>
            </div>
          </div>
          {/* Description 2nd*/}
          <div className="mt-4 md:mt-8 ml-4 md:ml-20 md:w-[60%] text-md">
            <p>
              We here in Encoderbytes follow every possible method to solve a
              problem for our clients and help them in their businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-20 w-5/6 m-auto">
          {Cartobj.map((cart) => {
            return (
              <div className="rounded-lg bg-white p-7" key={cart.no}>
                <div className="flex justify-between">
                  <span className="text-7xl font-bold text-slate-300">
                    {cart.no}
                  </span>
                  <Image src={cart.image1} alt="Logo" width={70} height={70} />
                </div>
                <div className="flex flex-col md:w-full ml-2 mt-6">
                  <Image
                    src={cart.image2}
                    alt="Logo"
                    width={130}
                    height={100}
                    className="mx-auto md:mx-0"
                  />
                  <p className="mt-6 text-md text-gray-400">
                    {cart.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 7 section */}
      <div className="flex h-10 bg-white mt-5"></div>
      <div
        className="flex flex-col md:flex-row md:h-80 bg-gradient-to-b from-black via-black to-transparent bg-no-repeat bg-cover w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0,0.5)),url('/backgrounds/Rectangle2.png')",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover", // Ensure the background image covers the container
          backgroundPosition: "center", // Center the background image
        }}
      >
        <div className=" my-10  flex flex-col md:flex-row justify-between items-center  sm:flex-row md:px-16 w-9/12 m-auto ">
          <div className="flex flex-col  gap-4">
            <div className="mb-4 md:mb-0">
              <Image
                src="/Text-headings/ur-cost.png"
                className="mx-auto md:mx-0"
                alt="Logo"
                width={300}
                height={900}
              />
            </div>
            <div className=" m-auto text-white text-md w-5/6  md:flex md:justify-start   md:w-96 ">
              Send us the features you are looking to build and we shall advise
              on the next steps.
            </div>
          </div>
          <div className="">
            <button className="hover:text-custom-blue hover:bg-transparent px-3 my-2 py-2 font-bold rounded-md border-2 bg-custom-blue text-white border-custom-blue">
              LET&apos;S DISCUSS
            </button>
          </div>
        </div>
      </div>
      {/* 8 section */}
      <div className="flex flex-col">
        <div className="flex flex-col items-center mt-10 md:mt-24 px-6">
          <div className="font-bold text-center text-4xl">
            INDUSTRIES WE <span className="text-custom-blue">ARE SERVING</span>
          </div>
          <div className="mt-5 md:mt-7  text-center text-md w-3/6">
            <p>
              We are working with several with industries to improve thier
              businesses and experiences through technology. We have build many
              web and mobile applications for them.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col px-6 md:px-32 mt-10 md:mt-28 gap-y-8 md:gap-x-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8">
            <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
              <div className="text-2xl font-bold">
                <span className="border-b-2 border-black"> I n d u </span>
                <span className="">s t r y .</span>
              </div>
              <div className="text-custom-blue text-4xl font-bold">HEALTH</div>
              <p className="text-sm md:text-md text-gray-400">
                We are helping and educating doctors and other people through
                our applications. Our app is ranked in top five in health
                category in Pakistan.We provide management systems to health
                industry.
              </p>
              <div className="text-md rounded-md text-custom-blue py-4 px-3 mt-8  border-custom-blue hover:bg-custom-blue hover:text-white  border-2 w-[150px] flex items-center gap-3">
                <button className="">READ MORE</button>
                <FaArrowCircleRight />
              </div>
            </div>
            <div className="bg-yellow w-full md:w-[50%]">
              <Image
                src="/backgrounds/Mask-group1.png"
                alt="Logo"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 9 section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8">
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Mask-group2.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-2xl font-bold">
            <span className="border-b-2 border-black"> I n d u </span>
            <span className="">s t r y .</span>
          </div>
          <div className="text-custom-blue text-4xl font-bold">EDUCATION</div>
          <p className="text-sm md:text-md text-gray-400">
            We provide training and workshops in different IT skills in
            collaboration with KPIT Board. We have trained thousands of trainees
            through online and physical classes. Also, we develop software for
            different educational institutes.
          </p>
          <div className="  text-md rounded-md text-custom-blue py-4 px-3 mt-8  border-custom-blue hover:bg-custom-blue hover:text-white  border-2 w-[150px] flex items-center gap-3">
            <FaArrowAltCircleLeft />
            <button className="">READ MORE</button>
          </div>
        </div>
      </div>

      {/* 10 section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-2xl font-bold">
            <span className="border-b-2 border-black"> I n d u </span>
            <span className="">s t r y .</span>
          </div>
          <div className="text-custom-blue text-4xl font-bold">BUSINESS</div>
          <p className="text-sm md:text-md text-gray-400">
            We are working with new business and and startups. We provide IT
            solutions for businesses to get more income. We have developed
            several E-commerce web and mobile applications for them.
          </p>
          <div className="  text-md rounded-md text-custom-blue py-4 px-3 mt-8  border-custom-blue hover:bg-custom-blue hover:text-white  border-2 w-[150px] flex items-center gap-3">
            <button className="">READ MORE</button>
            <FaArrowCircleRight />
          </div>
        </div>

        {/* iamge */}
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Mask-group3.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* Slider */}
      <Carousal />
      <Contactform />
      {/* <Contactform /> */}
    </div>
  );
}
