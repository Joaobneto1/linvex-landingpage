import { useState, useEffect } from "react";

export const useRotatingText = (items: string[], interval: number = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return items[currentIndex];
};

