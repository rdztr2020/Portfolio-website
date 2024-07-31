import './App.css'
import Contact from './sections/Contact/Contact.jsx';
import Hero from "./sections/Hero/Hero.jsx"
import Projects from './sections/Projects/Projects.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Footer from './sections/Footer/Footer.jsx'



function App() {
  
    return (
    <>
    <Hero/> 
    <Projects/> 
    <br />
    <Skills/>  
    <Contact/>
    <br />
    <Footer/>
    </>
  );
}

export default App;
