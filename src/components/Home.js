
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen scroll-area">
      <div className="max-w-[1000px] mx-auto px-8 pt-20 flex flex-col justify-center h-full">
        <p className="text-zinc-50 text-lg">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-zinc-50">
          Brandon Covarrubias,
        </h1>
        <span className="text-4xl sm:text-7xl font-bold text-zinc-50">
          I'm a<Typewriter options={{
                      strings: ['Front-End Developer'],
                      autoStart: true,
                      loop: true,
                      wrapperClassName:'typer'}} /> 
        </span>
        
        <div>
          <Link to="projects" smooth={true} duration={500} spy={true}>
            <button className="text-zinc-50 group border-2 px-6 py-3 my-2 flex items-center hover:bg-lemon hover:border-lemon rounded-md">
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
