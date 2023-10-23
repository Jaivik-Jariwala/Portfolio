import logo from './logo.svg';
import './App.css';
import About from './components/About';
import separator from './components/separator';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <main>
      <About/>
      <separator/>
      <WorkExperience/>
      <Projects/>
      <Education/>
    </main>
  );
}

export default App;
