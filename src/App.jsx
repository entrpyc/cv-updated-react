import './reset.css';
import 'style/animations.scss';
import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CV from './pages/CV/CV';
import PersonalWebsite from './pages/PersonalWebsite/PersonalWebsite';
import Resume from './pages/Resume2/Resume';

import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/cv" element={<CV />} />
          <Route path="/" element={<PersonalWebsite />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
