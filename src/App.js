import './reset.css';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <div className="container">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
