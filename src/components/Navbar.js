import React, {useState} from "react";
import { Link } from 'react-scroll'
import Weather from "./Weather";


const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full flex justify-between items-center list-none text-base py-4 bg-gray-900 text-zinc-50 z-10">
      <div>
        <img className="w-20 ml-5" src={require("../assets/logov2.png")} alt="Logo" />
      </div>
      <div className="text-center">
      Current Outside Temp:
       <Weather /> <sup>&#9675;</sup>F
      </div>
      {/* Menu */}
      <ul className="hidden text-lg md:flex cursor-pointer ">
        <li className="nav-item">
          <Link to="home" smooth={true} duration={500} spy={true}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link  to="about" smooth={true} duration={500} spy={true}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={500} spy={true}>
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500} spy={true}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500} spy={true}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <img
            src={require("../assets/burger.png")}
            className="w-9 mr-6"
            alt="burger"
          />
        ) : (
          <img
            src={require("../assets/cross.png")}
            className="w-8 mr-6 transition-all duration-300 relative left-12 -translate-x-14"
            alt="close"
          />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-80 backdrop-blur-md"
        }
      >
        <li className="py-6 text-4xl text-center w-full z-10 menu-item ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500} spy={true}>
            <p onClick={handleClick}>Home</p>
          </Link>
        </li>
        <li className="py-6 text-4xl w-full text-center z-10 menu-item ">
          <Link onClick={handleClick} to="about" smooth={true} duration={500} spy={true} >
            <p onClick={handleClick}>About</p>
          </Link>
        </li>
        <li className="py-6 text-4xl w-full text-center z-10 menu-item ">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} spy={true} offset={-110}>
            <p onClick={handleClick}>Skills</p>
          </Link>
        </li>
        <li className="py-6 text-4xl w-full text-center z-10 menu-item ">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500} spy={true}>
            <p onClick={handleClick}>Projects</p>
          </Link>
        </li>
        <li className="py-6 text-4xl w-full text-center z-10 menu-item ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} spy={true}>
            <p onClick={handleClick}>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
