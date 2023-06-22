import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Intro from './components/Intro';
import "./css/app.css";


function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <Intro/>
      <Carousel/>
    </div>
  );
}

export default App;
