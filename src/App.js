import Header from "./components/navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
      <main>
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Courses />
        <Contact />
      </main>
    </div>
  );
}

export default App;
