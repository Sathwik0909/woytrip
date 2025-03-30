import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { motion } from "framer-motion"; 
import areoplane from "../../../../assets/images/choosen_us_areoplane.png"

export const NewsletterSection = (): JSX.Element => {
  // Newsletter data
  const newsletterData = {
    title: "Travel your way, not theirs.",
    subtitle: "Custom trips designed just for you.",
    inputPlaceholder: "Your email",
    buttonText: "Subscribe",
  };

  return (
    <motion.section
      className="w-full py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-full max-w-5xl mx-auto relative overflow-visible border-none shadow-lg">
        {/* Decorative Airplane Image */}
        <motion.img
          src={areoplane}
          className="absolute -top-6 right-0 w-16 sm:w-20 md:w-24"
          alt="Airplane"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        />

        <CardContent className="p-0 border-none">
          <div className="relative w-full border-none">
            {/* Background Shape */}
            <div className="w-full h-[400px] bg-[#3ca7ff75] rounded-[20px_129px_20px_129px] opacity-20 absolute -z-10" />

            {/* Content Container */}
            <div className="flex flex-col items-center justify-center py-12 px-6 relative z-10">
              {/* Heading */}
              <motion.h2
                className="font-semibold text-gray-800 text-[28px] sm:text-[33px] text-center leading-snug"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {newsletterData.title} <br />
                {newsletterData.subtitle}
              </motion.h2>

              {/* Form */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative flex-grow">
                  <Input
                    className="h-[60px] pl-14 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                    placeholder={newsletterData.inputPlaceholder}
                  />
                  <MailIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>

                <Button className="h-[60px] bg-blue-600 hover:bg-blue-700 text-white text-[16px] rounded-lg min-w-[160px] transition-all duration-300 ease-in-out">
                  {newsletterData.buttonText}
                </Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};
