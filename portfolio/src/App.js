import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Events from './components/Events';
import Projects from './components/Projects';
import Licences_Certifications from './components/Licences_Certifications';
import resume_CV from './components/resume_CV';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <WorkExperience/>
      <Projects/>
      <Education/>
      <Licences_Certifications/>
      <Skills/>
      <Events/>
      <resume_CV/>
      <Contact/>
    </main>
  );
}

export default App;
