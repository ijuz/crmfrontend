import React from "react";
import styles from "./TickerImages.module.css";

// Define a type for the image prop to ensure type safety
interface ImageTickerProps {
  images: string[]; // Array of image URLs passed as prop
}

const TickerImages: React.FC<ImageTickerProps> = ({ images }) => {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        {/* First set of images */}
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}

        {/* Second set of images (duplicate) */}
        {images.map((image, index) => (
          <div key={`duplicate-${index}`} className={styles.imageContainer}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerImages;
