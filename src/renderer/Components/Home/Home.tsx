import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './Home.css';
import FiisServices from '../../Service/FiisServices';
import AnalizeServices from '../../Service/AnalizeService';
import StocksServices from '../../Service/StocksServices';
import { TableStocks } from './TableStocks';
import { TableFiis } from './TableFiis';
import ModalResult from './ModalResult';
import { Search } from './Search';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className="box">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function Home() {
  const [fiis, setFiis] = useState([]);
  const [stocks, setstocks] = useState([]);
  const [open, setOpen] = useState(false);
  const [analizeId, setAnalizeId] = useState('');
  const [analizeResult, setAnalizeResult] = useState({});
  const [value, setValue] = useState(0);

  const handleClickOpen = (id: string, type: number) => {
    setAnalizeId(id);
    if (analizeId !== id) {
      setAnalizeResult({});

      AnalizeServices.analize(id, type)
        .then((res) => setAnalizeResult(res[0] || {}))
        .catch((error) => console.log(error));
    }
    setOpen(true);
  };

  const handleChange = (event: any, newValue: number) => setValue(newValue);

  useEffect(() => {
    function getContent() {
      try {
        FiisServices.getFiis()
          .then((res) => setFiis(res))
          .catch((err) => console.log(err));

        StocksServices.getStocks()
          .then((res) => setstocks(res))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
    getContent();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Fiis" {...a11yProps(0)} />
          <Tab label="Ações" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* <Search /> */}
        <TableFiis fiis={fiis} handleClickOpen={handleClickOpen} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <Search /> */}
        <TableStocks stocks={stocks} handleClickOpen={handleClickOpen} />
      </TabPanel>

      <ModalResult
        analizeResult={analizeResult}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
