import Navbar from "./components/Navbar";
import BodyContent from "./components/BodyContent";


function App() {
  

  return (
    <div className= "h-screen bg-cover bg-no-repeat bg-center bg-[url('./assets/austin-schmid-0asZ7HcEHSQ-unsplash.jpg')]">
      <Navbar/>
      <BodyContent/>
    </div>
  );
}

export default App;
