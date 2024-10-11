import React from "react";
import styles from "./Ticker.module.css";

// Define a type for the card prop to ensure type safety
interface Card {
  id: number;
  title: string;
  content: {
    key1: string;
    value1: string;
    key2: string;
    value2: string;
  };
}

interface TickerProps {
  cards: Card[]; // Array of card objects passed as prop
}

const Ticker: React.FC<TickerProps> = ({ cards }) => {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        {/* First set of cards */}
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardContent}>
              <h2>{card.title}</h2>
              <p>
                {card.content.key1}: {card.content.value1}
              </p>
              <p>
                {card.content.key2}: {card.content.value2}
              </p>
            </div>
          </div>
        ))}
        {/* Second set of cards (duplicate) */}
        {cards.map((card) => (
          <div key={`duplicate-${card.id}`} className={styles.card}>
            <div className={styles.cardContent}>
              <h2>{card.title}</h2>
              <p>
                {card.content.key1}: {card.content.value1}
              </p>
              <p>
                {card.content.key2}: {card.content.value2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
