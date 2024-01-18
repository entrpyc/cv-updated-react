import css from './MainNavigation.module.scss'

import Link from 'elements/Link/Link';

function MainNavigation() {
  return (
    <div className={css.mainNavigation}>
      <div className="container">
        <nav>
          <Link to="/">Personal Website</Link>
          <Link to="bio">Biography</Link>
          <Link to="resume">Blog</Link>
          <Link to="resume">Resume</Link>
        </nav>
      </div>
    </div>
  )
}

export default MainNavigation