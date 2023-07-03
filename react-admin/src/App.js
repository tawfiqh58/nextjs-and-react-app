import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
