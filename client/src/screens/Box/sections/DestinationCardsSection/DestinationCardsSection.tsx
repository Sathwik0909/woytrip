// import { MapPinIcon } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { Separator } from "../../../../components/ui/separator";
// import { motion } from "framer-motion";
// import WhatsAppButton from "../../../../components/ui/whatsappButton";
// import { CardType } from '../../types/card';
// import api from "../../../../api";

// // Import your icons
// import collousium from "../../../../assets/images/collousium.png";
// import vedio_icon from "../../../../assets/images/vedio_icon.png";
// import game from "../../../../assets/images/game-icons-meal.svg";
// import stay from "../../../../assets/images/stay.png";
// import sightseeing from "../../../../assets/images/sighseeing.png";


// // Define icon mapping
// const FEATURE_ICONS: { [key: string]: string } = {
//   video: vedio_icon,
//   meals: game,
//   stay: stay,
//   sightseeing: sightseeing,

// };

// interface Props {
//   cards: CardType[];
// }

// export const DestinationCardsSection: React.FC<Props> = () => {
//   const [cards, setCards] = useState<CardType[]>([]);

//   const fetchCards = async () => {
//     try {
//       const response = await api.get("/cards");
//       setCards(response.data);
//     } catch (error) {
//       console.error("Error fetching cards:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCards();
//   }, []);

//   return (
//     <section className="py-12 w-full bg-gray-50">
//       {/* Title Section */}
//       <div className="text-center">
//         <h2 className="font-bold text-[#333333] text-[50px] sm:text-[67.6px] leading-tight">
//           Our Destinations
//         </h2>
//         <p className="mt-2 opacity-80 text-[#333333] text-[24px] sm:text-[30.4px]">
//           We Organize Your Trip
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <motion.div
//         className="flex flex-wrap justify-center gap-8 px-6 mt-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: { opacity: 0, y: 50 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
//         }}
//       >
//         {cards.map((card, index) => (
//           <motion.div 
//             key={card._id} 
//             variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
//           >
//             <div className="relative rounded-lg shadow-lg items-center overflow-hidden w-[320px]">
//               {/* Background Image */}
//               <div
//                 className="w-full h-[450px] bg-cover bg-center rounded-b-2xl"
//                 style={{ backgroundImage: `url(${card.imageUrl})` }}
//               >
//                 {/* Popular Badge */}
//                 {card.popular && (
//                   <div className="absolute top-2 right-2 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs">
//                     Popular
//                   </div>
//                 )}

//                 {/* Card Overlay */}
//                 <Card className="absolute bottom-0 w-full rounded-t-3xl bg-white shadow-lg">
//                   <CardContent className="p-4">
//                     {/* Card Title */}
//                     <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
//                     <div className="flex items-center mt-1 text-gray-600">
//                       <MapPinIcon className="w-5 h-5 text-blue-600" />
//                       <span className="ml-2 text-lg">{card.location}</span>
//                     </div>

//                     <Separator className="my-4" />

//                     {/* Features */}
//                     <div className="flex justify-center gap-6">
//                       {Object.entries(card.features)
//                         .filter(([_, value]) => value)
//                         .map(([feature], index) => (
//                           <div key={index} className="flex flex-col items-center">
//                             <img 
//                               src={FEATURE_ICONS[feature]} 
//                               alt={feature} 
//                               className="w-10 h-10"
//                             />
//                             <span className="text-xs font-medium mt-1 capitalize">
//                               {feature}
//                             </span>
//                           </div>
//                         ))}
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex justify-between mt-6">
//                       <WhatsAppButton />
//                       <Button className="w-full bg-blue-600 text-white ml-3">
//                         Get Quote
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };



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

export const DestinationCardsSection: React.FC<Props> = ({ cards }) => {
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