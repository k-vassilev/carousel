import React, { useState } from "react";

interface ImageSliderProps {
  slides: {
    url: string;
  }[];
}

const slideStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const sliderStyles: React.CSSProperties = {
  position: "relative",
  height: "100%",
};

const ImageSlider = ({ slides }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchX = e.touches[0].clientX;
    const deltaX = touchX - touchStartX;
    const threshold = 50;

    if (deltaX > threshold) {
      goToPrevious();
      setTouchStartX(null);
    } else if (deltaX < -threshold) {
      goToNext();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || touchStartX === null) return;

    const mouseDeltaX = e.clientX - touchStartX;
    const threshold = 50;

    if (mouseDeltaX > threshold) {
      goToPrevious();
      setIsDragging(false);
    } else if (mouseDeltaX < -threshold) {
      goToNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={sliderStyles}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{
          ...slideStyles,
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      ></div>
    </div>
  );
};

export default ImageSlider;
