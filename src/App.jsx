import './reset.css';
import 'style/animations.scss';
import './App.scss';


import Home from './pages/Home/Home';
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/cv" element={<Home />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
