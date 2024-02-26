import React from 'react'
import css from './Loader.module.scss';

function Loader() {
  return (
    <section>
      <div className={css.placeholder}>
        <div className="faux-text short" />
        <div className="faux-text" />
        <div className="faux-text" />
        <div className="faux-text" />
        <div className="faux-text" />
      </div>
    </section>
  )
}

export default Loader