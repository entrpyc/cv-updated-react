import './reset.css';
import 'style/animations.scss';
import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CV from './pages/CV/CV';
import Resume from './pages/Resume/Resume';
import Bio from './pages/Bio/Bio';

import Sidebar from './components/Sidebar/Sidebar';

import { InterfaceProvider } from "./context/InterfaceContext";
import { FeatureProvider } from "./context/FeatureContext";

function App() {
  return (
    <InterfaceProvider>
      <FeatureProvider>
        <Router>
        <div className="App">
          <div className="container">
            <div className="page-content">
              <main>
                <Routes>
                  <Route path="/" element={<CV />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/bio" element={<Bio />} />
                </Routes>
              </main>
              <Sidebar />
            </div>
          </div>
        </div>
        </Router>
      </FeatureProvider>
    </InterfaceProvider>
  );
}

export default App;
