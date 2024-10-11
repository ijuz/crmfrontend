"use client";

import { useState, useEffect, useRef } from "react";

interface StatCardProps {
  title: string;
  value: string;
  color: string;
  percentage: number;
  icon: string;
}

const StatCard = ({ title, value, color, percentage, icon }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCurrentPercentage((prev) => {
          if (prev < percentage) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div className="flex flex-col items-center space-y-4" ref={cardRef}>
      <div className="text-center">
        <h2 className="text-4xl font-bold" style={{ color }}>
          {value}
        </h2>
        <p className="text-gray-600">{title}</p>
      </div>

      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform rotate-90">
          <circle
            cx="64"
            cy="64"
            r="60"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="8"
          />
          <circle
            cx="64"
            cy="64"
            r="60"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 60}`}
            strokeDashoffset={`${
              2 * Math.PI * 60 * (1 - currentPercentage / 100)
            }`}
            style={{
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center text-2xl"
          style={{ color }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
