import React, { useEffect, useState } from "react";

import { DestinationCardsSection } from "./sections/DestinationCardsSection/DestinationCardsSection";

import { HeroSection } from "./sections/HeroSection/HeroSection";

import { NewsletterSection } from "./sections/NewsletterSection";

import { Footer } from "./sections/Footer/Fotter";

import { WhyChooseUs } from "./sections/WhyChoosenUs";

import { PopularDestination } from "./sections/PopularDestination/PopularDestination";

import { Navbar } from "./sections/Navbar";

import TestimonialCard from "./sections/Testimonials/Testimonials";

import api from "../../api";

import FaqCard from "./sections/Faq/FaqCard";

import { FaWhatsapp } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Card {
  _id: string;
  title: string;
  location: string;
  imageUrl: string;
  features: {
    [key: string]: boolean;
  };
  popular: boolean;
}

export const Box = (): JSX.Element => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await api.get("/cards");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* <Navbar /> */}

        <HeroSection />

        <PopularDestination cards={cards} />

        <WhyChooseUs />

        <DestinationCardsSection cards={cards} />

        <TestimonialCard />

        <NewsletterSection />

        <FaqCard />

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
