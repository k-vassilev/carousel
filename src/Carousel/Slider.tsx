import { useState } from "react";
import { ImageSliderProps } from "./Carousel";
import "./index.css"

// const slideStyles: React.CSSProperties = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

const sliderStyles: React.CSSProperties = {
  position: "relative",
  height: "100%",
};

const Slider = ({ slides, sensitivity = 75 }: ImageSliderProps) => {
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

    if (deltaX > sensitivity) {
      goToPrevious();
      setTouchStartX(null);
    } else if (deltaX < -sensitivity) {
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

    if (mouseDeltaX > sensitivity) {
      goToPrevious();
      setIsDragging(false);
    } else if (mouseDeltaX < -sensitivity) {
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
      <div style={{
    backgroundImage: `url(${slides[currentIndex].minified})`,
    // background: "#D7FAFC",
    display: "flex",
    justifyContent: "space-evenly"


  }}className="lazy-load">
        <img
          src={slides[currentIndex].url}
          loading="lazy"
          alt={slides[currentIndex].alt}
          style={{
            maxHeight: "280px",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;