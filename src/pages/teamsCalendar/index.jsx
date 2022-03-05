import React from 'react';

import BreadcrumbsItem from '../../components/BreadcrumbsItem';
import DateRange from '../../components/DateRange';
import Header from '../../components/Header';
import PaginationElem from '../../components/PaginationElem';
import TableItem from '../../components/TableItem';

function TeamsCalendarPage() {
  return (
    <>
      <Header />
      <BreadcrumbsItem
        teams="Команды"
      >
        <span>Название команды</span>
      </BreadcrumbsItem>
      <h2>Матчи</h2>
      <DateRange />
      <TableItem />
      <PaginationElem />
    </>
  );
}

export default TeamsCalendarPage;
