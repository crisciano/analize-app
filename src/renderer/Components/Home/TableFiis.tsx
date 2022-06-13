import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { THEME_GREEN, THEME_RED } from 'renderer/Theme';
import { LoadingCutom } from '../Utils/LoadingCutom';
import { Search } from './Search';

type Props = {
  fiis: [any];
  handleClickOpen: any;
};

const setColorLiquidez = (value: number) =>
  value >= 200.0 ? { background: THEME_GREEN } : { background: THEME_RED };
const setColorPvpa = (value: number) =>
  value >= 1.2 ? { background: THEME_RED } : { background: THEME_GREEN };
const setColorCagr = (value: number) =>
  value > 0.01 ? { background: THEME_GREEN } : { background: THEME_RED };
const setColorDy = (value: number) =>
  value >= 6.0 ? { background: THEME_GREEN } : { background: THEME_RED };
const setColorDyMedio = (value: number) =>
  value >= 0.55 ? { background: THEME_GREEN } : { background: THEME_RED };
const setColorSetor = (value: string) =>
  value === 'Residencial'
    ? { background: THEME_RED }
    : { background: THEME_GREEN };
const setColorVacancia = (value: number) =>
  value > 15.0 ? { background: THEME_RED } : { background: THEME_GREEN };

export function TableFiis(props: Props) {
  const [data, setData] = useState([]);
  const { fiis, handleClickOpen } = props;

  useEffect(() => setData(fiis), [fiis]);

  const handleFilter = (result: []) => setData(result);

  return fiis.length ? (
    <>
      <Search id={'id'} data={fiis} handleFilter={handleFilter} />
      <TableContainer component={Paper} style={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>P/VPA</TableCell>
              <TableCell>Liquidez</TableCell>
              <TableCell>CAGR</TableCell>
              <TableCell>DY Médio</TableCell>
              <TableCell>DY ano </TableCell>
              <TableCell>DY</TableCell>
              <TableCell>Vacância Fís</TableCell>
              <TableCell>Setor</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Cotistas</TableCell>
              <TableCell>Ativos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((fii: any) => (
              <TableRow key={fii.id}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => handleClickOpen(fii.id, 2)}
                  style={{ cursor: 'pointer' }}
                >
                  {fii.id}
                </TableCell>
                <TableCell style={setColorPvpa(fii.P_VPA)}>
                  {Number(fii.P_VPA).toFixed(2)}%
                </TableCell>
                <TableCell style={setColorLiquidez(fii.liquidez)}>
                  R${Number(fii.liquidez).toFixed(2)}
                </TableCell>
                <TableCell style={setColorCagr(fii.cagr)}>
                  {Number(fii.cagr).toFixed(2)}%
                </TableCell>
                <TableCell style={setColorDyMedio(fii.DY_medio_12m)}>
                  {Number(fii.DY_medio_12m).toFixed(2)}%
                </TableCell>
                <TableCell style={setColorDy(fii.DY_ano)}>
                  {Number(fii.DY_ano).toFixed(2)}%
                </TableCell>
                <TableCell>R${Number(fii.dividendo).toFixed(2)}</TableCell>
                <TableCell style={setColorVacancia(fii.vacancia_fisica)}>
                  {fii.vacancia_fisica === '-9999999999' ||
                  fii.vacancia_fisica === '0.0'
                    ? 'N/A'
                    : `${Number(fii.vacancia_fisica).toFixed(2)}%`}
                </TableCell>
                <TableCell style={setColorSetor(fii.setor)}>
                  {fii.setor}
                </TableCell>
                <TableCell>R${Number(fii.preco).toFixed(2)}</TableCell>
                <TableCell>{fii.numero_cotistas}</TableCell>
                <TableCell>{fii.quantidade_ativos}</TableCell>
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
