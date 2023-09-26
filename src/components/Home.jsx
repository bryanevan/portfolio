import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import backk from "../assets/back.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#000c12] bg-center bg-cover bg-no-repeat bg-origin-border"
      style={{ backgroundImage: `url(${backk})` }}
    >
      <div className="h-screen w-full bg-slate-900/40 bg-center bg-cover bg-origin-border">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              <div>
                I'm A<br></br>
                <TypeAnimation
                  sequence={[
                    "_Web Developer",
                    1000,
                    "_Thinker",
                    1000,
                    "_Programmer",
                    1000,
                    "_Traveler",
                    1000,
                    "_Technophile",
                    1000,
                  ]}
                  cursor={false}
                  speed={40}
                  repeat={Infinity}
                  deletionSpeed={90}
                />
              </div>
            </h2>
            <p className="text-gray-300 py-4 max-w-md">
              I love working with technology and exploring new ways to build
              cool stuff. When I'm not in front of my computer, you can find me
              on a beach in Oahu.
            </p>
            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className="shadow-2xl shadow-[#4d004d] border border-sky-950 text-white bg-gradient-to-r from-slate-900 to-fuchsia-900 group w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer"
              >
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
