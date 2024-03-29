import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
//import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSlide,setCurrentSlide] = useState(0)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
        <Works currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
        {/*<Testimonials/>*/}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
