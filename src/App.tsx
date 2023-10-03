import ImageSlider from "./ImageSlider";

function App() {
  const slides = [
    {
      url: "https://static.scientificamerican.com/sciam/cache/file/4F73FD83-3377-42FC-915AD56BD66159FE_source.jpg",
    },
    {
      url: "https://voice.ai/hub/wp-content/uploads/2023/02/ezgif.comzzz-gif-maker-1.jpg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wVoHL1vpJ8DHBihI6-yvKzvVDKq7Q1XI1IVj1CdNAdvZuVVatGZFvuxp0XL16sYM6WQ&usqp=CAU",
    },
    {
      url: "https://images.pond5.com/random-numbers-i-generator-loop-footage-238893601_iconl.jpeg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJJRWxqQ6YwB6Ko4oGgPvwKFVf5BhaCKWpoBGRyLkIEowmKnxGeHNxoottj-Za3sCPUw&usqp=CAU",
    },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </>
  );
}

export default App;