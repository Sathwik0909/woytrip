import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

import hosplital from "../../../../assets/images/twemoji-hospital.svg";
import areoplane from "../../../../assets/images/areoplane.png";
import hotel from "../../../../assets/images/hotel.png";
import luggage from "../../../../assets/images/luggage.png";
import logo from "../../../../assets/images/why_choosen.png"

export const WhyChooseUs = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "24/7 Doctor Support",
      description: "Instant medical help for minor health issues.",
      icon: hosplital,
      isHighlighted: false,
    },
    {
      id: 2,
      title: "Trip Video",
      description: "Capture memories with a short trip highlight video.",
      isHighlighted: true,
      icon: areoplane,
    },
    {
      id: 3,
      title: "Best Stay Options",
      description: "Handpicked stays for easy exploration.",
      isHighlighted: false,
      icon: hotel,
    },
    {
      id: 4,
      title: "Affordable Prices",
      description: "Premium trips at budget-friendly rates.",
      isHighlighted: false,
      icon: luggage,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section */}
        <div className="">
          <img src={logo} alt="Why Choose Us" className="w-full" />
        </div>

        {/* Right Section */}
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-lg">
              Enjoy different experiences in every place you visit and discover
              new and affordable adventures.
            </p>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-6">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className={`flex items-center gap-6 p-4 rounded-xl transition-all duration-300 ${
                  feature.isHighlighted
                    ? "bg-white shadow-lg border border-gray-200"
                    : "bg-gray-100"
                }`}
              >
                <CardContent className="p-0 flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-md">
                    <img className="w-10 h-10" alt={feature.title} src={feature.icon} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-md">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
