import './reset.css';
import './App.scss';

import { GlobalProvider } from './context/GlobalContext'

import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Bio from './components/Bio/Bio';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="main">
          <Sidebar />
          <div className="container">
            <About />
            <Experience />
            <Portfolio />
            <Skills />
            <Bio />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
