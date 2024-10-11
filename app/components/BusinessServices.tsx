import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const BusinessServices = () => {
  const services = [
    "Online media assistance",
    "Business consulting",
    "No spam",
    "24/7 customer support",
    "Email assistance",
    "Account manager",
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-semibold text-gray-700 mb-8">
          You are always our first priority
        </h1>

        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="text-green-500 w-5 h-5" />
              <span className="text-gray-600 text-lg">{service}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-colors">
            FREE DEMO
          </button>
          <button className="px-6 py-3 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition-colors">
            RATES
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <Image
          src="/images/BusinessServices.png"
          alt="Person sitting at desk with laptop"
          width={500}
          height={400}
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default BusinessServices;
