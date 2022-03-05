import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';
import logo from '../../assets/sports.png';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logoBlock}>
        <img className={style.logo} src={logo} alt="logo" />
      </div>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.link}>
            <Link to="/">Лиги</Link>
          </li>
          <li className={style.link}>
            <Link to="/teams">Команды</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
