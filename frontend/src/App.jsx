import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from "./pages/Home";
import Article from './pages/Article';
import Research from './pages/Research';
import About from './pages/About';
import './styles/App.css';
import lightLogo from './assets/logo_transparent.png';
import darkLogo from './assets/inv_t_logo.png';
import ThemeToggle from './components/Theme';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark"); // Ensure theme is initialized from localStorage
  const logoImage = theme === "dark" ? darkLogo : lightLogo;
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/article">Articles</Link>
          </li>
          <li>
            <Link to="/research">Researches</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ThemeToggle  theme={theme} setTheme={setTheme}/> {/* Pass theme and setTheme */}
      </nav>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} /> {/* Pass theme to Home */}
        <Route path="/article" element={<Article />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
