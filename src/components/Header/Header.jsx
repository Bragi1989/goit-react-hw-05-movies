import React from 'react';
import { Link } from 'react-router-dom';
import css from '../Header/Header.module.css'

function Header() {
  return (
    <header className={css.headerForm}>
      <nav>
        <ul className={css.headerList}>
          <li className={css.headerItem}>
            <Link className={css.headerLink} to="/">Home</Link>
          </li>
          <li className={css.headerItem}>
            <Link className={css.headerLink} to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;