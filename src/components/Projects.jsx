import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";

import ang from "../assets/angular_1.png";
import reactt from "../assets/react_1.png";
import reacttt from "../assets/react_2.png";
import react from "../assets/react_3.png";
import mdb from "../assets/mdb.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#012f45]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <Zoom cascade>
          <div className="pb-8 w-full flex justify-center items-center flex-col">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
              Projects
            </p>
            <p className="py-6 text-2xl">
              Check out what I've been working on.
            </p>
          </div>
          {/* Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${ang})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  myFlix
                </span>
                <p className="text-center">
                  Angular SPA with REST API endpoints to MongoDB
                </p>
                <div className="pt-8 text-center">
                  <a href="https://bryanevan.github.io/myFlix_Angular/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/bryanevan/myFlix_Angular">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${react})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  myCinema
                </span>
                <p className="text-center">
                  Movie catalog using React & Bootstrap with external API
                </p>
                <div className="pt-8 text-center">
                  <a href="https://my-cinema808.netlify.app/login">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/bryanevan/myCinema-client">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${mdb})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  API
                </span>
                <p className="text-center">
                  Server-side component for my Angular & React movie apps
                </p>
                <div className="pt-8 text-center">
                  <a href="https://mycinema.herokuapp.com">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/bryanevan/myCinema-server-application">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${reacttt})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  React Native
                </span>
                <p className="text-center">
                  Chat app using Expo dev platform with Firebase/Firestore
                </p>
                <div className="pt-8 text-center">
                  <a href="https://github.com/bryanevan/Chat-App">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${reactt})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  Meet
                </span>
                <p className="text-center">
                  Serverless PWA with React & AWS Lambda
                </p>
                <div className="pt-8 text-center">
                  <a href="https://bryanevan.github.io/meet_app">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/bryanevan/meet_app/tree/main">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-300 cursor-pointer"
              >
                About
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>
          <div></div>
        </Zoom>
      </div>
    </div>
  );
};
export default Projects;
