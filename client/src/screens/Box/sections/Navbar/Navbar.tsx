import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import { motion, AnimatePresence } from "framer-motion"; // For animations
import logo from "../../../../assets/images/mainLogo.png";

export const Navbar = (): JSX.Element => {
  // State to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/#contact" },
    { label: "About Us", href: "/about" },
    // {label: "Make Trip", href: "/#destinations"},
  ];

  return (
    <header className="w-full py-5 bg-inherit">
      <div className="container mx-auto flex items-center justify-between px-12">
        {/* Logo Section */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto scale-125 hover:scale-150 transition-transform duration-300 ease-in-out"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-gradient-to-r from-[#42a7c3] to-[#38d4ff] text-white font-bold px-4 py-1 rounded-lg hover:opacity-80 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button for Desktop */}
        <a href="/#destinations">

          <Button className="hidden sm:inline-flex  bg-gradient-to-r from-[#42a7c3] to-[#38d4ff] text-white font-bold px-4 py-1 rounded-lg hover:opacity-80 transition-all">
  Make Trip
</Button>


        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.3 }}
                      className="md:hidden absolute right-4 top-[70px] bg-white/90 bg-transparent rounded-lg shadow-lg p-4 w-[75%] max-w-40 flex flex-col items-end space-y-3"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm w-28  text-center bg-gradient-to-r from-[#42a7c3] to-[#38d4ff] text-white font-semibold px-3 py-1.5 z-[999] rounded-md hover:opacity-80 transition-all"
              >
                {item.label}
              </a>
            ))}
            {/* CTA Button in Mobile Menu */}
            <a href="/#destinations">
              <Button className="text-sm text-center w-28 bg-gradient-to-r from-[#42a7c3] to-[#38d4ff] text-white font-semibold px-3 py-1.5 z-[999] rounded-md hover:opacity-80 transition-all">
                Make Trip
              </Button>
            </a>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};











