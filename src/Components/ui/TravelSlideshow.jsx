import React, { useEffect, useState } from 'react';

const travelImages = [
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80.jpg', // Eiffel Tower
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80.jpg', // Maldives Beach
  'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80.jpg', // Tower Bridge London
  'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1200&q=80.jpg',     // Japan Temple
];
const TravelSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === travelImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
      {travelImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Travel destination ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default TravelSlideshow;
