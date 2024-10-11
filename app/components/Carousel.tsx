"use client";

import React from "react";

const image1 = "/images/carousel_image.png"; 

const Carousel: React.FC = () => {
  return (
    <div className="w-full mt-16">
      <img
        src={image1}
        alt="Static Image"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default Carousel;
