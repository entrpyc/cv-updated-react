import { useState } from 'react';

import css from './Sidebar.module.scss';

import PageNavigation from './components/PageNavigation/PageNavigation';
// import MainMenu from './components/MainMenu/MainMenu';

import Icon from 'elements/Icon/Icon';
import Button from 'elements/Button/Button';


function Sidebar() {
  const [menuOpened, setMenuOpened] = useState(false);

  function onMenuClick() {
    setMenuOpened(!menuOpened);
  }

  return (
    <aside className={css.sidebar}>
      <div className="aside-content">
        <div className="sidebar-content">
          {/* <div className="menu">
            <Button className="menu-button" onClick={onMenuClick}>
              <Icon name="arrow" direction="left" /> {!menuOpened ? "Show Website Navigation" : "Show Page Navigation"}
            </Button>
          </div> */}
          <PageNavigation />
          {/* <PageNavigation />
          <PageNavigation /> */}

          {/* {menuOpened ? (
            <MainMenu />
          ) : (
          )} */}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar