import Navbar from "./Components/Navbar/Navbar";
import { Element } from 'react-scroll';
import {  BrowserRouter as Router } from "react-router-dom";
import Suhas from "./Components/Suhas/Suhas";
import Skills from "./Components/MySkills/skills";
import Contact from "./Components/Contact/contact";
import About from "./Components/AboutUs/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Element name="introduction"> 
          <Suhas/>
        </Element>
        <Element name="aboutme">
         <About />
        </Element>
        <Element name="skills">
         <Skills/>
        </Element>
        <Element name = "Projects">
          <Projects/>
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Element>
        <Footer/>
        </Element>
      </Router>
     
    </div>
    
  );
}

export default App;
