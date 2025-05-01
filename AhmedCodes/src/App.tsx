import NavBar from './components/NavBar';
import StartingScreen from './components/StartingScreen';
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="bg-[var(--color-custom-dark)]">
      <NavBar />
      <StartingScreen />
      <Welcome />
      {/* <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer /> */}
    </main>
  );
}

export default App;
