import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import Work from './components/Work'
import Team from './components/Team'
import People from './components/People'
import Contact from './components/Contact'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Work/>
     <Team/>
     <People/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
