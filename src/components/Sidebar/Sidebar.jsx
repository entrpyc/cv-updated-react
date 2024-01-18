import css from './Sidebar.module.scss';

import PageNavigation from './components/PageNavigation/PageNavigation';
// import MainMenu from './components/MainMenu/MainMenu';

function Sidebar() {
  return (
    <aside className={css.sidebar}>
      <div className="aside-content">
        <div className="sidebar-content">
          <PageNavigation />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar