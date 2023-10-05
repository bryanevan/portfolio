import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full md:h-screen bg-[#000c12] text-gray-300"
    >
      <Zoom cascade>
        <div className="flex flex-col justify-center items-center py-40 w-auto h-auto">
          <div className="shadow-2xl shadow-[#4d004d] py-16 rounded-md bg-slate-800 flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-auto gap-8 mb-4">
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-6xl font-bold inline border-b-4 border-fuchsia-500">
                  About
                </p>
              </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>
                  Aloha,
                  <br></br>
                  I'm Berkley, a Full-Stack Developer based in Honolulu.
                </p>
              </div>
              <div className="">
                <p>
                  Endlessly curious and persistent with a love for knowledge and
                  chasing elusive answers. With a background in machine learning
                  and economics, I've spent the last 3 years curating my
                  full-stack abilities to be a contributing member of a
                  development team by building web applications in React,
                  Angular and Python. As I continuously refine my skills in
                  discovering beautiful solutions to complex problems, I look
                  around to see who I can teach and bring with me in building
                  better systems, software, and practices. For me, the thrill of
                  it all comes from the progress and momentum we all create as
                  members of a community of technologists, each one of us adding
                  a bit of value in an endless pursuit of efficacy and success.
                  Mahalo nui loa for reading, and please reach out to me to
                  collaborate!
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="shadow-2xl shadow-[#4d004d] border border-sky-950 text-white bg-gradient-to-r from-slate-900 to-fuchsia-900 group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md cursor-pointer"
            >
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div></div>
      </Zoom>
    </div>
  );
};
export default About;
