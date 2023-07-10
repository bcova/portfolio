import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import self from "../assets/self.jpg";

const Home = () => {

  return (
    <div  name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 pt-20 flex flex-col justify-center h-full snap-start">
        <img
          className="w-48 rounded-full relative bottom-20 left-[90px] shadow-md shadow-black -z-10"
          src={self}
          alt="selfie"
        />
        <p className="text-zinc-50 text-lg">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-zinc-50">
          Brandon Covarrubias,
        </h1>
        <span className="text-4xl sm:text-7xl font-bold text-zinc-50">
          I'm a
          <Typewriter
            options={{
              strings: ["Front-End Developer","Drummer","Photographer"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typer",
            }}
          />
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
          <a href="https://docs.google.com/document/d/1IP_cM-MVuT-8KUx91ZAcNedn5Rwliog_/edit?usp=sharing&ouid=117350159220233205710&rtpof=true&sd=true"><button className="text-zinc-50 group border-2 px-6 py-3 my-2 flex items-center hover:bg-lemon hover:border-lemon rounded-md">
              Download Resume
            </button></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
