import Slider from "./Slider";

export interface Slide {
    url: string;
    minified?: string;
    alt?: string;
}

export interface ImageSliderProps {
    slides: Slide[];
    width?: string;
    height?: string;
    sensitivity?: number;
  }
  
const Carousel = ({slides, width = "500px", height = "280px", sensitivity}: ImageSliderProps) => {
    const containerStyles = {
        width: width,
        height: height,
        margin: "0 auto",
        cursor: "col-resize"
      };

  return (
    <div style={containerStyles}>
        <Slider slides={slides} sensitivity = {sensitivity} height = {height}/>
    </div>
  )
}

export default Carousel