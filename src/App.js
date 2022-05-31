import './reset.css';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <div className="container"></div>
      </div>
    </div>
  );
}

export default App;
