import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for hamburger
import { motion, AnimatePresence } from "framer-motion"; // For animations

import logo from "../../../../assets/images/logo.png"

export const Navbar = (): JSX.Element => {
  // State to handle menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "About Us", href: "#" },
  ];

  return (
    <header className="w-full py-5 bg-[#7DD2FF]/45 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <img src={logo} alt="Logo" className="h-12 w-auto" />

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-medium text-[#333333] text-lg hover:text-[#42a7c3] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button (Hidden on Mobile) */}
        <Button className="hidden md:block bg-[#42a7c3] hover:bg-[#3a96af] text-white font-bold px-6 py-2 rounded-lg">
          Make Trip
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg absolute top-[70px] left-0 w-full flex flex-col items-center py-5 space-y-4 z-50"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-medium text-[#333333] text-lg hover:text-[#42a7c3] transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* CTA Button in Mobile Menu */}
            <Button className="bg-[#42a7c3] hover:bg-[#3a96af] text-white font-bold px-6 py-2 rounded-lg">
              Make Trip
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
