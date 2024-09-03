import React from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { Mobileapps } from "../components/Mobileapps";
import {
  Mobileappslogo,
  Aiappslogo,
  Uiuxappslogo,
} from "../components/Mobileapps";
import { MobileAp } from "../components/carts";
import Contactform from "../Utils/Contactform";
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
            USER EXPERIENCE DESIGING
          </div>
          <div className="flex  m-auto py-3">
            <p className="flex   m-auto justify-center items-center text-center text-md">
              We design clean and asthetic user experiences for businesses.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold text-center md:text-left mt-24 text-md"
          >
            Home - Services - <span className="text-custom-blue">UI / UX</span>
          </a>
        </div>
      </div>
      {/* section 2 */}
      <div id="section2"></div>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-md font-bold text-gray-500">
            <span className="border-b-4 border-custom-blue">u s e r </span>
            <span className="">
              {" "}
              &nbsp;e x p e r i e n c e &nbsp;d e s i g n i n g.
            </span>
          </div>
          <div className="text-3xl font-black">
            <span className="">IMPOROVE YOUR </span>
            <span className="text-custom-blue">USER EXPERIENCE?</span>
          </div>
          <p className="text-sm md:text-md">
            Grabbing the market by your brands depends on the sophisticated
            aesthetic UI/UX designs of your product. One of the leading
            expertise of Encoderbytes is the strong UI/UX designing background
            with a skilled workforce. Our UI/UX designs are focused on efficient
            solutions to user problems. We apply design thinking to product
            design, therefore we categorize the UX process to 5 key phases :
            Product definition, Research, Analysis, Design and validation. Our
            systematic approach results in an unconventional UI and UX design –
            a user friendly solution.
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
      <div className="bg-white p-14 md:px-20">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue text-1xl md:text-4xl font-bold flex justify-center items-center gap-2">
            <span className="text-black">MOBILE APP</span>
            <span className="text-custom-blue"> DEVELOPMENT SERVICES</span>
          </div>
          <div className="text-center w-4/6 mt-4 text-md">
            Do you know what makes a good mobile app different from a poor one?
            It’s the UI/UX design! A well-designed user interface can raise your
            conversion rate by 200 percent. Our mobile solutions balance
            function and aesthetics to help your business maximize ROI, enhance
            user experiences, and improve customer-company relationships.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-16 mx-16">
          {/* 1 CARD */}
          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted border-gray-400">
                STRATEGY WORKSHOP
              </span>
              <span className="text-6xl font-bold text-slate-400">0 1</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                Our AI development services help you by avoiding biases and
                human error and also helps you by saving your money and time
                through automating and optimizing everyday processes and daily
                routine operations.
              </p>
            </div>
          </div>
          {/* 2 CARD */}
          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted border-gray-400">
                DEFINING USER PERSONA
              </span>
              <span className="text-6xl font-bold text-slate-400">0 2</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                As a leading UX and UI design Company, it is an utmost crucial
                responsibility for us to understand your requirements in a
                better way,for that reason we create user personas to explain
                your audiences/customers . After that ,we frame the outcome to
                do more qualitative and quantitative research and analytics.
              </p>
            </div>
          </div>
          {/* 3 CARD */}
          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted border-gray-400">
                EMPATHY MAPPING
              </span>
              <span className="text-6xl font-bold text-slate-400">0 3</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                The benefits of doing empathy mapping are manifold. We believe
                it removes bias from our designs and aligns the team on a
                single, shared understanding of the user’s empathy like what
                they head, see, do, or listen. We then discover weaknesses in
                our research, uncovers user needs that the user themselves may
                not even be aware of, understand what drives users’ behaviors
                which finally guide us towards what user is feeling or thinking.
              </p>
            </div>
          </div>
          {/* 4 CARD */}
          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted w-4/6 border-gray-400">
                ANALYZING COMPETITOR LANDSCAPE
              </span>
              <span className="text-6xl font-bold text-slate-400">0 4</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                To identify the defensive or offensive strategic context or to
                know about the opportunities and threats you must be aware of
                with whom you are competing.So that way we recognize potential
                competitors and their targeted customer,identify key matrices or
                competencies and set each one a score.In the UI and UX design
                planning ,we rate them on the basis of their defined matrices
                and a plan what we need to implement and what to extract.
              </p>
            </div>
          </div>
          {/* 5 CARD */}
          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted w-4/6 border-gray-400">
                MIND MAPPING AND CARD SORTING
              </span>
              <span className="text-6xl font-bold text-slate-400">0 5</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                In this step all the data we have collected on the wall we
                represent by engaging the product owners,developer,manager and
                designers.After that we group the collected data on the sticky
                notes/cards.The arranged map have identical and related
                components of an application in chunks to give us a whole
                structure from high ranking view. No wonder why we call
                ourselves master in user experience design.The result !! A
                flawless UX design which is approved by everyone.
              </p>
            </div>
          </div>
          {/* 6 CARD */}
          <div className="rounded-xl bg-custom-blue p-5">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted w-4/6 border-gray-400">
                ARCHITECTING INFORMATION
              </span>
              <span className="text-6xl font-bold text-slate-400">0 6</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                Prevention from findability and usability disaster -directing to
                costly redesigns we take architectural information in creating a
                plan.That is why in our UX and UI design services incorporate
                information Architecture plays a huge role.it helps us to focus
                on organizing ,structuring and effectively labeling content so
                that complete information and intended task is available for
                users.
              </p>
            </div>
          </div>
          {/* 7 CARD */}
          <div className="rounded-xl bg-custom-blue p-5">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted w-4/6 border-gray-400">
                LOW FIDELITY SKETCHES
              </span>
              <span className="text-6xl font-bold text-slate-400">0 7</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                We have an equitable understanding of how to compose a screen,
                after a detailed architectural information is out .For each user
                requirement we start to create fast and cheap on-paper
                prototypes ,incorporating navigation, content and action.To get
                an early feedback from our stakeholders ,rectifying mistakes and
                iterating to reduce rework at later stages this activity help us
                a lot.
              </p>
            </div>
          </div>
          {/* 8 CARD */}
          <div className="rounded-lg bg-custom-blue p-5">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted w-4/6 border-gray-400">
                HIGH FIDELITY WIREFRAMING
              </span>
              <span className="text-6xl font-bold text-slate-400">0 8</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                To detailing out the screens in its exact shape and style we
                further transform the paper prototype into high fidelity
                wireframes. For our visual design expert the sole reference is
                to build the click through prototype to define the flow.To
                manifest the possible outcome this is the integral step of our
                web.
              </p>
            </div>
          </div>
          {/* 8 CARD */}
          <div className="rounded-lg bg-custom-blue p-5">
            <div className="flex justify-between">
              {/* <div className=""> */}
              <span className="text-white text-2xl font-bold border-b-4 border-dotted w-4/6 border-gray-400">
                DEFINING UI GUIDELINES
              </span>
              <span className="text-6xl font-bold text-slate-400">0 9</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="mt-6 text-md">
                We carefully design your web and mobile applications by setting
                up different components like color palette,typography,the
                call-to-action buttons, notifications and alerts,icons and
                possibly every component of a user interface.in order to reduce
                frequent follow ups with designer we draft a customized UI guide
                that helps our Ux and UI developers to work independently.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div id="section4"></div>

      <div className="bg-red w-full bg-gray-200">
        <div className="flex justify-center items-center  flex-col pt-20">
          <div className="text-3xl font-bold text-center">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 mt-20 pb-20 w-5/6">
            {Uiuxappslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-400 p-14 text-center flex flex-col gap-9 justify-between items-center rounded-xl "
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

      {/* contact from */}
      <Contactform />
    </div>
  );
};

export default Ai;
