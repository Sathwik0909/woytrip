import { useState } from "react";
import { Mail, MapPin, List } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { motion } from "framer-motion";
import areoplane from "../../../../assets/images/choosen_us_areoplane.png";

export const NewsletterSection = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [persons, setPersons] = useState("");
  const [amenities, setAmenities] = useState("");

  const sendWhatsAppMessage = () => {
    const phoneNumber = "916300130659"; // Replace with your WhatsApp number
    const message = `*Travel Inquiry*%0A
    *Email:* ${email}%0A
    *Location:* ${location}%0A
    *Days:* ${days}%0A
    *Persons:* ${persons}%0A
    *Amenities:* ${amenities}%0A
    *I would like to get a quote!*`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.section
      className="w-full py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-full max-w-3xl mx-auto relative overflow-visible border-none shadow-lg bg-blue-50 p-8 rounded-2xl">
        <motion.img
          src={areoplane}
          className="absolute top-[-20px] right-[-20px] w-16 sm:w-20 md:w-24"
          alt="Airplane"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        />
        <CardContent className="p-0 border-none text-center">
          <motion.h2
            className="font-semibold text-gray-800 text-[28px] sm:text-[33px] leading-snug"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Travel your way, not theirs.
            <br />
            Custom trips designed just for you.
          </motion.h2>

          <motion.div
            className="flex flex-col gap-4 w-full mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[50px] pl-12 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                placeholder="Your email"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            <div className="relative">
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-[50px] pl-12 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                placeholder="Location"
              />
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            <div className="flex gap-4">
              <Input
                type="number"
                min="1"
                max="30"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="Number of days"
                className="h-[50px] flex-grow text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500 px-4"
              />
              <Input
                type="number"
                min="1"
                max="30"
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
                placeholder="Number of persons"
                className="h-[50px] flex-grow text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500 px-4"
              />
            </div>

            <div className="relative">
              <Input
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                className="h-[50px] pl-12 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                placeholder="Amenities needed"
              />
              <List className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            <Button
              onClick={sendWhatsAppMessage}
              className="h-[50px] bg-blue-600 hover:bg-blue-700 text-white text-[16px] rounded-lg mt-4"
            >
              Get Quote
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
};
