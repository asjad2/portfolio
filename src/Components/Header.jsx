import React from "react";
import reactbackground from "./../Images/reactbackground.svg";

import { MdLabelImportant } from "react-icons/md";

function Header(props) {
  return (
    <section
      className={` text-${props.txtcolor} body-font font-Roboto  body-font rounded-3xl shadow-lg shadow-[#000000]  p-8`} id="about"
    >
      <div className=" mx-auto flex px-5 py-6 md:flex-row flex-col items-center space-x-5 ">
        <div className="lg:flex-grow  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center bg-[#7ff0ce] p-6 rounded-3xl">
          <h1 className={`font-Poppins title-font sm:text-4xl text-3xl mb-4 font-medium text-black  `}>
           Who I am?
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-4 leading-relaxed">
          I am a Full-Stack MERN developer with a degree in Computer Engineering. The current status of my career is freelancing, and I am looking for an environment that can assist me in the development of my knowledge and experience.
          </p>
          <p className="mb-2 leading-relaxed ">
            <h2 className="font-Poppins mb-1 leading-relaxed  text-lg font-bold text-black">
              Technologies used for building this Website:
            </h2>
            <p className="mt-2">
              <MdLabelImportant className="inline-flex" /> Frontend:React JS /
              Hooks
            </p>
            <p className="mt-2">
              <MdLabelImportant className="inline-flex" />
              Languages: JavaScript / HTML / CSS
            </p>
            <p className="mt-2">
              <MdLabelImportant className="inline-flex" />
              Backend: Node JS / Express JS
            </p>
            <p className="mt-2">
              <MdLabelImportant className="inline-flex" />
              Database: Mongo DB
            </p>
            <p className="mt-2">
              <MdLabelImportant className="inline-flex" />
              API's
            </p>
            <p className="mt-2">
              <MdLabelImportant className="inline-flex" />
              Frameworks: Bootstrap / Tailwind CSS
            </p>

            <p className="mt-2">
              <MdLabelImportant className="inline-flex" />
              Hard Work and Passion
            </p>
          </p>
          <div className="flex justify-center">
        
          </div>
        </div>
        <div className="justify-between lg:max-w-lg lg:w-full lg:mt-10 md:w-1/2 w-[90%]">
          <img
            className="mr-10 p-3  object-center"
            alt="hero"
            src={reactbackground}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
