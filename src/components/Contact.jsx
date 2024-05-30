import React from "react";
import Zoom from "react-reveal/Zoom";
import resume from "../assets/Berkley-Bryan-Resume.pdf";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#000c12] text-gray-300">
      <Zoom cascade>
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-full my-5 ">
            <p className="inline text-6xl font-bold text-center border-b-4 border-fuchsia-500 ">
              Contact
            </p>
            <div className="flex flex-col my-4">
              <p className="bg-slate-800 flex justify-center text-center rounded-lg shadow-lg shadow-[#4d004d] p-3 mx-12">
                I'm open to collaborations on projects and community engagement.
                Please feel free reach out to me in any form you prefer and
                let's get to building!
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 text-center sm:grid-cols-2">
            {/* Phone */}
            <button className="bg-slate-800 h-32 rounded-lg shadow-lg shadow-[#4d004d] hover:scale-110 duration-500">
              <a
                className="flex grid items-center w-full text-gray-300"
                href="tel:6622009587"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-4xl text-gray-300 border-b-2 border-fuchsia-500">
                  Phone
                </p>
                <p className="py-2 text-2xl text-gray-300">(+1) 786 440 6080</p>
              </a>
            </button>
            {/* Email */}
            <button className="bg-slate-800 h-32 rounded-lg shadow-lg shadow-[#4d004d] hover:scale-110 duration-500">
              <a
                className="flex grid items-center w-full text-gray-300"
                href="mailto:dev@berkley.pro"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-4xl text-gray-300 border-b-2 border-fuchsia-500">
                  Email
                </p>
                <p className="py-2 text-2xl text-gray-300 break-words">
                  dev [at] berkley [dot] pro
                </p>
              </a>
            </button>
            {/* LinkedIn */}
            <button className="bg-slate-800 h-32 rounded-lg shadow-lg shadow-[#4d004d] hover:scale-110 duration-500">
              <a
                className="flex grid items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/bryan-berkley-064833191/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-4xl text-gray-300 border-b-2 border-fuchsia-500">
                  LinkedIn
                </p>
                <p className="py-2 text-2xl text-gray-300">
                  Click to Open My Profile!
                </p>
              </a>
            </button>
            {/* Resume */}
            <button className="bg-slate-800 h-32 rounded-lg shadow-lg shadow-[#4d004d] hover:scale-110 duration-500">
              <a
                className="flex grid items-center w-full text-gray-300"
                href={resume}
                download="Berkley_Bryan_Resume"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-4xl text-gray-300 border-b-2 border-fuchsia-500">
                  Resume
                </p>
                <p className="py-2 text-2xl text-gray-300">
                  Click to Download!
                </p>
              </a>
            </button>
          </div>
        </div>
      </Zoom>
    </div>
  );
};
export default Contact;
