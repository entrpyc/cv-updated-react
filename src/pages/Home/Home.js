import './Home.scss';

import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext'

import Sidebar from '../../components/Sidebar/Sidebar';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Portfolio from '../../components/Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';

function Home() {
  const { setPageData } = useContext(GlobalContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const application = queryParams.get('application-for');
    if(application === 'limechain') setPageData({})
  }, []);

  return (
      <div className="App">
        <div className="main">
          <Sidebar />
          <div className="container">
            <About />
            <Experience />
            <Portfolio />
            <Skills />
          </div>
        </div>
      </div>
  );
}

export default Home;
