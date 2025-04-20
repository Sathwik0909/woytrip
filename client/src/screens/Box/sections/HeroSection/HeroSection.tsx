

import React from "react";
import { Navbar } from "../Navbar/Navbar";
import hero from "../../../../assets/vedios/hero_section.mp4";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 py-12">
        <div className="max-w-6xl w-full">
          {/* Subheading */}
          <p className="text-[#00c7ff] text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-['Poppins',Helvetica] mb-4">
            Best Destinations Around the World
          </p>

          {/* Main Heading */}
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight font-['Volkhov',Helvetica] mb-6">
            Travel, enjoy and live a new<br className="hidden sm:block" /> and full life
          </h1>

          
          {/* CTA Button */}
          <a href="/#destinations">
            <button className="w-56 sm:w-auto px-8 py-2 bg-[#38d4ff] rounded-lg shadow-md hover:bg-[#38d4ff]/90 transition-all">
              <span className="text-white text-lg font-medium font-['Poppins',Helvetica]">
                Find out more
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
