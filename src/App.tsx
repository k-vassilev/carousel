import Carousel from "./Carousel/Carousel";
import { slides } from "./mockData";

function App() {
  return (
      <>
        <Carousel slides={slides} width={"500px"} height={"280px"} sensitivity={75}/>
      </>
  );
}

export default App;