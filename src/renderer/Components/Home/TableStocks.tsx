import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from '@material-ui/core';
import { THEME_GREEN, THEME_RED } from 'renderer/Theme';
import { LoadingCutom } from '../Utils/LoadingCutom';
import { useEffect, useState } from 'react';
import { Search } from './Search';

const setColorLiquidez = (value: number) =>
  value >= 200.0 ? { background: THEME_GREEN } : { background: THEME_RED };

export function TableStocks(props: any) {
  const { stocks, handleClickOpen } = props;
  const [data, setData] = useState([]);

  useEffect(() => setData(stocks), [stocks]);

  const handleFilter = (result: []) => setData(result);

  return stocks.length ? (
    <>
      <Search id={'ticker'} data={stocks} handleFilter={handleFilter} />
      <TableContainer component={Paper} style={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>PL</TableCell>
              <TableCell>EV/EBIT</TableCell>
              <TableCell>ROE</TableCell>
              <TableCell>ROIC</TableCell>
              <TableCell>Cagr 5years</TableCell>
              <TableCell>Liquidez</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((action: any) => (
              <TableRow key={action.id}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => handleClickOpen(action.ticker, 1)}
                  style={{ cursor: 'pointer' }}
                >
                  {action.ticker}
                </TableCell>
                <TableCell component="th" scope="row">
                  {action.companyName}
                </TableCell>
                <TableCell component="th" scope="row">
                  R${Number(action.price).toFixed(2)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {action.p_L}
                </TableCell>
                <TableCell component="th" scope="row">
                  {action.eV_Ebit}
                </TableCell>
                <TableCell component="th" scope="row">
                  {action.roe}
                </TableCell>
                <TableCell component="th" scope="row">
                  {action.roic}
                </TableCell>
                <TableCell component="th" scope="row">
                  {action.lucros_Cagr5}
                </TableCell>
                <TableCell style={setColorLiquidez(action.liquidezMediaDiaria)}>
                  R${Number(action.liquidezMediaDiaria).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ) : (
    <LoadingCutom />
  );
}
