import Carousel from "./Carousel/Carousel";
import { slides } from "./mockData";

function App() {
  return (
      <>
        <Carousel slides={slides} width={"300px"} height={"180px"} sensitivity={75}/>
      </>
  );
}

export default App;