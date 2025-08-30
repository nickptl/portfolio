import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageCarouselProps {
  images: string[];
  autoRotate?: boolean;
  interval?: number;
}

export default function ImageCarousel({ 
  images, 
  autoRotate = true, 
  interval = 4000 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (images.length === 0) {
    return (
      <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
        <div className="text-6xl font-bold text-gray-400">👤</div>
      </div>
    );
  }

  return (
    <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl group">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Profile ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft size={20} />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight size={20} />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}