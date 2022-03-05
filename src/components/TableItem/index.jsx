import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  data,
  time,
  status,
  teamA,
  teamB,
  score,
) {
  return {
    data,
    time,
    status,
    teamA,
    teamB,
    score,
  };
}

const rows = [
  createData('дд.мм.гггг', 'чч.мм', 'Статус', 'Команда А', 'Команда Б', 'X:Y (Z:G) (N:M)'),
  createData('дд.мм.гггг', 'чч.мм', 'Статус', 'Команда А', 'Команда Б', 'X:Y (Z:G) (N:M)'),
  createData('дд.мм.гггг', 'чч.мм', 'Статус', 'Команда А', 'Команда Б', 'X:Y (Z:G) (N:M)'),
  createData('дд.мм.гггг', 'чч.мм', 'Статус', 'Команда А', 'Команда Б', 'X:Y (Z:G) (N:M)'),
  createData('дд.мм.гггг', 'чч.мм', 'Статус', 'Команда А', 'Команда Б', 'X:Y (Z:G) (N:M)'),
  createData('дд.мм.гггг', 'чч.мм', 'Статус', 'Команда А', 'Команда Б', 'X:Y (Z:G) (N:M)'),
];

function TableItem() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.data}>
              <TableCell align="center">{row.data}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.teamA}</TableCell>
              <TableCell align="center">  -  </TableCell>
              <TableCell align="center">{row.teamB}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableItem;
