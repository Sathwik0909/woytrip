import { Footer } from "./sections/Footer/Fotter";
import { Navbar } from "./sections/Navbar";
import { AboutUs } from "./sections/AboutUs/AboutUs";
import { FoundersSection } from "./sections/FounderSection/FounderSection";

import { FaWhatsapp } from "react-icons/fa";

export const About = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="absolute top-[88px] left-0 w-full h-[800px] z-[-1] bg-gradient-to-b from-[#c4ebff] to-transparent" />

        <Navbar />

        <AboutUs />

        <Footer />

        <a
          href="https://wa.me/918885523545" // Replace '918885523545' with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 w-16 h-16 bg-green-500 text-white flex items-center justify-center p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={48} />
        </a>
      </div>
    </div>
  );
};
