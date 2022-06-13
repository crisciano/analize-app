import {
  FormControlLabel,
  FormGroup,
  Switch,
  Paper,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';

export function Settings() {
  const [checked, setChecked] = useState<Boolean>(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const [age, setAge] = useState(0);

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleAge = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Paper style={{ padding: '15px' }}>
      <Typography>Settings</Typography>

      <FormGroup>
        <InputLabel id="demo-simple-select-label">Liquidez</InputLabel>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleAge}
          >
            <MenuItem value={1}>{'>'}</MenuItem>
            <MenuItem value={2}>{'>='}</MenuItem>
            <MenuItem value={3}>{'='}</MenuItem>
            <MenuItem value={4}>{'<'}</MenuItem>
            <MenuItem value={5}>{'<='}</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Switch checked={checked} onChange={toggleChecked} />}
          label="Normal"
        />

        {/* <FormControlLabel
          control={
            <Checkbox
              name="checkedA"
              checked={state.checkedA}
              onChange={handleChange}
            />
          }
          label="Ativar"
        /> */}
      </FormGroup>
    </Paper>
  );
}
