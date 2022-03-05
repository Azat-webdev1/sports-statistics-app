import React from 'react';
import { Link } from 'react-router-dom';

import CardLeague from '../../components/CardLeague';
import FilterItem from '../../components/FilterItem';
import Header from '../../components/Header';
import PaginationElem from '../../components/PaginationElem';
import style from './Leagues.module.scss';

function LeaguesPage() {
  const listArr = [
    {
      id: 1,
      name: 'Название лиги1',
      country: 'Страна1',
    },
    {
      id: 2,
      name: 'Название лиги2',
      country: 'Страна2',
    },
    {
      id: 3,
      name: 'Название лиги3',
      country: 'Страна3',
    },
    {
      id: 4,
      name: 'Название лиги4',
      country: 'Страна4',
    },
    {
      id: 5,
      name: 'Название лиги5',
      country: 'Страна5',
    },
    {
      id: 6,
      name: 'Название лиги6',
      country: 'Страна6',
    },
  ];
  return (
    <>
      <Header />
      <div className={style.filter}>
        <FilterItem />
      </div>
      <div className={style.card}>
        {listArr.map((item) => (
          <Link to="/competitions/1">
            <CardLeague
              key={item.id}
              name={item.name}
              country={item.country}
            />
          </Link>
        ))}
      </div>
      <PaginationElem />
    </>
  );
}

export default LeaguesPage;
