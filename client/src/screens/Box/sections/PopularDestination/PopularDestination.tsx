import React from "react";
import { FaBus, FaHotel } from "react-icons/fa";
import {
  GiVideoCamera,
  GiMeal,
  GiSightDisabled,
  GiMedicalPackAlt,
} from "react-icons/gi";
import { FiStar } from "react-icons/fi";
import { CardType } from "../../types/card";

interface Props {
  cards: CardType[];
}

export const PopularDestination: React.FC<Props> = ({ cards }) => {
  cards = cards.filter((card) => card.popular);
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="font-bold text-[#333333] text-[40px] sm:text-[35px] leading-tight text-center mb3">
        POPULAR DESTINATIONS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card._id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
          >
            {card.popular && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
                <FiStar className="text-white" />
                Popular
              </div>
            )}

            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
            </div>

            <div className="p-5">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-600">
                  <FaBus className="text-sm" />
                  <span className="text-sm font-medium">{card.location}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                  Features:
                </h4>
                <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                  {card.features?.video && (
                    <div className="flex items-center gap-2">
                      <GiVideoCamera className="text-blue-500" />
                      Video
                    </div>
                  )}
                  {card.features?.meals && (
                    <div className="flex items-center gap-2">
                      <GiMeal className="text-green-500" />
                      Meals
                    </div>
                  )}
                  {card.features?.stay && (
                    <div className="flex items-center gap-2">
                      <FaHotel className="text-purple-500" />
                      Stay
                    </div>
                  )}
                  {card.features?.sightseeing && (
                    <div className="flex items-center gap-2">
                      <GiSightDisabled className="text-orange-500" />
                      Tours
                    </div>
                  )}
                  {card.features?.medical && (
                    <div className="flex items-center gap-2">
                      <GiMedicalPackAlt className="text-red-500" />
                      Medical
                    </div>
                  )}
                  {card.features?.transport && (
                    <div className="flex items-center gap-2">
                      <FaBus className="text-teal-500" />
                      Transport
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};