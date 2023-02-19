
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {

  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Skills />
       <Projects />
       <Contact />
       {/* <Footer /> */}
    </div>
  );
}

export default App;
