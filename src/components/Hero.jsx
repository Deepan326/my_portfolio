import React from "react";
import { HERO_CONTENT } from "../constants";
import PHOTO from "../assets/photo.jpeg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="py-10 lg:mb-36 mt-10" id="about">
      <div className="flex flex-wrap lg:flex-row-reverse mt-20">
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:p-8 ">
            <motion.img
              src={PHOTO}
              alt="Deepan"
              className="border border-stone-900 rounded-3xl w-[250px] lg:w-[480px]"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl font-bold">
              Deepan
            </h2>

            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent mb-4">
              I'm a
              <Typewriter
                words={[" Full Stack Developer", " Mern Stack Developer"," Web Developer"]}
                loop={5}
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </span>

            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </p>

            <div className="flex justify-center lg:justify-start w-full mt-4">
              <a
                href="https://drive.google.com/file/d/1zl0YZbs3HzkVrWUKS95pO_Dh9IhWtj1d/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-12 w-40 overflow-hidden font-bold border border-white text-white shadow-2xl transition-all 
                  before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-gray-500 
                  before:duration-500 hover:text-white hover:shadow-gray-500 hover:before:h-64 hover:before:-translate-y-32"
              >
                <span className="relative z-10 flex justify-center items-center h-full">
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
