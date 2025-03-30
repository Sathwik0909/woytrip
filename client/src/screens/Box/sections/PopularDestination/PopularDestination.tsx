
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { MapPinIcon } from "lucide-react";

import collousium from "../../../../assets/images/collousium.png";
import bentower from "../../../../assets/images/benTower.png";
import vedio_icon from "../../../../assets/images/vedio_icon.png";
import game from "../../../../assets/images/game-icons-meal.svg";
import stay from "../../../../assets/images/stay.png";
import sightseeing from "../../../../assets/images/sighseeing.png";
import WhatsAppButton from "../../../../components/ui/whatsappButton";
import { CardType } from '../../types/card';

interface Props {
  cards: CardType[];
}


const destinations = [
  {
    id: 1,
    image: bentower,
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    features: [
      { name: "Video", icon: vedio_icon },
      { name: "Meals", icon: game },
      { name: "Stay", icon: stay },
      { name: "Sightseeing", icon: sightseeing },
    ],
  },
  {
    id: 2,
    image: collousium,
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    features: [
      { name: "Video", icon: vedio_icon },
      { name: "Meals", icon: game },
      { name: "Stay", icon: stay },
      { name: "Sightseeing", icon: sightseeing },
    ],
  },
  {
    id: 3,
    image: bentower,
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    features: [
      { name: "Video", icon: vedio_icon },
      { name: "Meals", icon: game },
      { name: "Stay", icon: stay },
      { name: "Sightseeing", icon: sightseeing },
    ],
  },
  {
    id: 4,
    image: collousium,
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    features: [
      { name: "Video", icon: vedio_icon },
      { name: "Meals", icon: game },
      { name: "Stay", icon: stay },
      { name: "Sightseeing", icon: sightseeing },
    ],
  },
];

export const PopularDestination: React.FC<Props> = ({ cards }) => {
  return (
    <section className="py-12 w-full scale-90 items-center bg-gray-50 flex flex-col">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="font-bold text-[#333333] text-[50px] sm:text-[67.6px] leading-tight">
          Popular Destination
        </h2>
        <p className="mt-2 opacity-80 text-[#333333] text-[24px] sm:text-[30.4px]">
        Vacations to make your experience enjoyable in Indonesia!
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="flex flex-wrap justify-center scale-90 gap-8 px-6 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
        }}
      >
        {destinations.map((card, index) => (
          <motion.div key={index} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            <div className="relative rounded-lg shadow-lg scale-90 md:scale-75 items-center overflow-hidden w-[320px]">
              {/* Background Image */}
              <div
                className="w-full h-[450px] bg-cover bg-center rounded-b-2xl "
                style={{ backgroundImage: `url(${card.image})` }}
              >
                {/* Card Overlay */}
                <Card className="absolute bottom-0 w-full rounded-t-3xl bg-white shadow-lg">
                  <CardContent className="p-4">
                    {/* Card Title */}
                    <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                    <div className="flex items-center mt-1 text-gray-600">
                      <MapPinIcon className="w-5 h-5 text-blue-600" />
                      <span className="ml-2 text-lg">{card.location}</span>
                    </div>

                    <Separator className="my-4" />

                    {/* Features */}
                    <div className="flex justify-center gap-6">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex flex-col items-center">
                          <img src={feature.icon} alt={feature.name} className="w-10 h-10" />
                          <span className="text-xs font-medium mt-1">{feature.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between mt-6">
                      <WhatsAppButton/>
                      <Button className="w-full bg-blue-600 text-white ml-3">Get Quote</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
