import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
//import Projects from './sections/Projects/Projects';
import Projects from './sections/project/Projects';
import Skills from './sections/Skills/Skills';
import Timeline from './sections/timeline/Timeline';
import Pop from './common/Pop';

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Timeline/>
      
      <Contact />
      <Footer />
      <Pop/>
    </>
  );
}

export default App;
