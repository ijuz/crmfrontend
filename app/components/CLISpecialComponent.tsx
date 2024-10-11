import React from "react";
import Ticker from "./Ticker";

const CliVoiceTerminationSpecialComponent: React.FC = () => {

    const cardDataCLI = [
      {
        id: 1,
        title: "Card 1",
        content: { key1: "Name", value1: "John", key2: "Age", value2: "28" },
      },
      {
        id: 2,
        title: "Card 2",
        content: { key1: "Name", value1: "Alice", key2: "Age", value2: "34" },
      },
      {
        id: 3,
        title: "Card 3",
        content: { key1: "Name", value1: "Bob", key2: "Age", value2: "45" },
      },
      {
        id: 4,
        title: "Card 4",
        content: { key1: "Name", value1: "Emma", key2: "Age", value2: "23" },
      },
      {
        id: 5,
        title: "Card 5",
        content: { key1: "Name", value1: "Olivia", key2: "Age", value2: "30" },
      },
    ];

    
  return (
    <div className="min-h-[400px] w-full bg-gradient-to-br from-[#323F3F] to-[#83A5A5] flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-semibold text-white mb-12 mt-12">
        CLI Voice Termination
      </h1>

      <div className="flex flex-wrap justify-center gap-16 mb-12">
        <button className="px-12 py-2 bg-[#E78D44] hover:bg-[#d17c33] text-white rounded-md transition-colors duration-300 font-medium">
          FREE TEST
        </button>

        <button className="px-12 py-2 bg-[#4DA0E4] hover:bg-[#3c8fd3] text-white rounded-md transition-colors duration-300 font-medium">
          ENQUIRY
        </button>

        <button className="px-12 py-2 bg-[#7EC455] hover:bg-[#6db344] text-white rounded-md transition-colors duration-300 font-medium">
          CHAT
        </button>
      </div>

      <Ticker cards={cardDataCLI} />
    </div>
  );
};

export default CliVoiceTerminationSpecialComponent;
