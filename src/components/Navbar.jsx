import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import DLETTER from "../assets/dletter.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 fixed top-0 left-0 right-0 bg-[#F5F5F5]">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="#" aria-label="Home">
          <img
            src={DLETTER}
            alt="logo"
            className="mx-2"
            width={50}
            height={33}
          />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-15 text-xl ml-250 text-black font-semibold ">
        <a
          href="#about"
          className="text-black hover:text-blue-500 hover:underline underline-offset-4 decoration-blue-500 transition duration-300 hover:scale-130"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-black hover:text-blue-500 hover:underline underline-offset-4 decoration-blue-500 transition duration-300 hover:scale-110"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-black hover:text-blue-500 hover:underline underline-offset-4 decoration-blue-500 transition duration-300 hover:scale-110"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-black hover:text-blue-500 hover:underline underline-offset-4 decoration-blue-500 transition duration-300 hover:scale-110"
        >
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-2xl text-black ">
        <a
          href="https://www.linkedin.com/in/rdeepan326/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Deepan326"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-500 
               hover:scale-110 hover:-translate-y-1 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="http://wa.me/918248405321"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-blue-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
