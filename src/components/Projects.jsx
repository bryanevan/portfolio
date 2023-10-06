import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import ang from "../assets/angular_1.png";
import mdb from "../assets/mdb.png";
import CaseModal from "./CaseModal";
import Case from "./Case";
import Navbar from "./Navbar";
import Scroll from "./Scroll";

const Projects = () => {
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);
  const [showComponents, setShowComponents] = useState(true);

  const openCaseModal = () => {
    setIsCaseModalOpen(true);
    setShowComponents(false);
  };

  const closeCaseModal = () => {
    setIsCaseModalOpen(false);
    setShowComponents(true);
  };

  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 p-2 bg-[#000c12]"
    >
      {/* Conditional rendering of Navbar */}
      {!isCaseModalOpen && <Navbar />}
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-auto h-full">
        <Zoom cascade>
          <div className="pb-2 w-full flex justify-center items-center flex-col">
            <p className="text-6xl font-bold inline border-b-4 text-gray-300 border-fuchsia-500">
              Projects
            </p>
            <p className="py-6 text-2xl">Check out what I've built</p>
          </div>
          <div className="pb-4 text-2xl">Client-side</div>
          {/* Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
            {/* myCinema */}
            <div
              style={{ backgroundImage: `url(${ang})` }}
              className="shadow-2xl shadow-[#4d004d] group container rounded-md flex justify-around content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                <div className="text-xl text-gray-300 font-bold text-white tracking-wider">
                  myCinema
                </div>
                <div className="pt-8 text-center">
                  <a href="https://my-cinema808.netlify.app/login">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-300 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/bryanevan/myCinema-client">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-300 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <button
                    onClick={openCaseModal}
                    className="text-center rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-300 font-bold text-lg"
                  >
                    Case Study
                  </button>
                  {/* Render the CaseModal component conditionally based on the state */}
                  {isCaseModalOpen && (
                    <CaseModal closeModal={closeCaseModal}>
                      {/* Render the content of your CaseModal, passing any necessary props */}
                      <Case />
                    </CaseModal>
                  )}
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                <div className="text-xl text-gray-300 font-bold text-white tracking-wider">
                  myFlix
                </div>
                <div className="pt-8 text-center">
                  <a href="https://bryanevan.github.io/myFlix_Angular/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-300 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/bryanevan/myFlix_Angular">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-300 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xl text-gray-300 flex-auto grid justify-start mx-1 self-center gap-2">
              <div className="mb-6">
                myCinema - A React and Bootstrap film catalog application with
                search functions and personal profiles
              </div>
              <div className="">
                myFlix - An Angular responsive SPA edition of myCinema with
                several views and enhanced UI with Angular Material
              </div>
            </div>
            <div className="mr-2 text-2xl col-span-2 justify-self-end">
              Server-side
            </div>
            <div className="text-xl text-gray-300 flex-auto justify-self-stretch self-center">
              Server-side component for myFlix and myCinema film catalog
              applications
            </div>
            {/* API */}
            <div
              style={{ backgroundImage: `url(${mdb})` }}
              className="shadow-2xl shadow-[#4d004d] min-w-0 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 flex justify-self-end flex-col">
                <span className="text-xl text-gray-300 font-bold text-white tracking-wider">
                  Movies API
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/bryanevan/myCinema-server-application">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-800 text-gray-300 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <Link
              to="about"
              smooth
              duration={500}
              className="shadow-2xl shadow-[#4d004d] border border-sky-950 text-white bg-gradient-to-r from-slate-900 to-fuchsia-900 group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md cursor-pointer"
            >
              About
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
};
export default Projects;
