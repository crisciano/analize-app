import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { HelloPage } from './Containers/HelloPage';
import { HomePage } from './Containers/HomePage';
import { WalletPage } from './Containers/WalletPage';
import './App.css';
import { SettingsPage } from './Containers/SettingsPage';
import { Menu } from './Components/Menu/Menu';
import { Container } from '@material-ui/core';

export default function App() {
  return (
    <Router>
      <Container maxWidth="xl">
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}
