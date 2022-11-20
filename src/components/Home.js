
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen scroll-area">
      <div className="max-w-[1000px] mx-auto px-8 pt-20 flex flex-col justify-center h-full">
        <p className="text-zinc-50 text-lg">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-zinc-200">
          Brandon Covarrubias,
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-zinc-50">
          I'm a <u className="decoration-zinc-50 text-lemon">full-stack developer</u>
        </h2>
        <div>
          <Link to="projects" smooth={true} duration={500} spy={true}>
            <button className="text-zinc-50 group border-2 px-6 py-3 my-2 flex items-center hover:bg-lemon hover:border-lemon">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
