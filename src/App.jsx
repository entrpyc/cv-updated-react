import './reset.css';
import 'style/animations.scss';
import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CV from './pages/CV/CV';
import PersonalWebsite from './pages/PersonalWebsite/PersonalWebsite';
import Resume from './pages/Resume/Resume';

import Sidebar from './components/Sidebar/Sidebar';

import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
      <div className="App">
        <div className="container">
          <div className="page-content">
            <main>
              <Routes>
                <Route path="/cv" element={<CV />} />
                <Route path="/" element={<PersonalWebsite />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
            <Sidebar />
          </div>
        </div>
      </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
