import logo from './assets/shared/logo.svg';
import Navbar from './components/Navbar.js'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Technology from "./pages/Technology";
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="Technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
