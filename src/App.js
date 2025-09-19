import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import { useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();

  const cambioIdioma = (idioma) => {
    i18n.changeLanguage(idioma);
  }
  return (
    <main>
      <Navbar />
      <Home />
      <AboutMe />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
