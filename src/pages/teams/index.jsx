import React from 'react';
import { Link } from 'react-router-dom';

import CardTeam from '../../components/CardTeam';
import FilterItem from '../../components/FilterItem';
import Header from '../../components/Header';
import PaginationElem from '../../components/PaginationElem';
import style from './Teams.module.scss';

function TeamsPage() {
  const listArr = [
    {
      id: 1,
      name: 'Название лиги1',
    },
    {
      id: 2,
      name: 'Название лиги2',
    },
    {
      id: 3,
      name: 'Название лиги3',
    },
    {
      id: 4,
      name: 'Название лиги4',
    },
    {
      id: 5,
      name: 'Название лиги5',
    },
    {
      id: 6,
      name: 'Название лиги6',
    },
    {
      id: 7,
      name: 'Название лиги7',
    },
    {
      id: 8,
      name: 'Название лиги8',
    },
    {
      id: 9,
      name: 'Название лиги9',
    },
    {
      id: 10,
      name: 'Название лиги10',
    },
  ];
  return (
    <>
      <Header />
      <FilterItem />
      <div className={style.card}>
        {listArr.map((item) => (
          <Link to="/teams/1">
            <CardTeam
              key={item.id}
              name={item.name}
            />
          </Link>
        ))}
      </div>
      <PaginationElem />
    </>
  );
}

export default TeamsPage;
