import NavBar from './components/NavBar';
import StartingScreen from './components/StartingScreen';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <NavBar />
      <StartingScreen />
      {/* <Welcome />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
