import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useLang } from './lang/useLang.js';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import langIcon from './assets/material_lang_black_24dp.svg';
import homeIcon from './assets/material_home_black_24dp.svg';
import appsIcon from './assets/material_apps_black_24dp.svg';
import './App.css';

export default function App() {
  const location = useLocation();
  const lang = useLang();
  return (
    <>
      <div className="layout debug">
        <header>
          <nav>
            {getNavContent(location, lang)}
          </nav>
          <aside>
            <img src={langIcon} alt="lang-icon" />
            <button type="button" onClick={() => lang.change('en')}>EN</button>
            <button type="button" onClick={() => lang.change('de')}>DE</button>
          </aside>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer>
          {getFooterContent(location, lang)}
        </footer>
      </div>
    </>
  );
}

function getNavContent(location, lang) {
  if (location.pathname === '/contact' || location.pathname === '/about') {
    // In JSX multiple HTML lines have to be wrapped into a JSX fragment (<>)
    return (
      <>
        <img src={homeIcon} alt="home-icon" />
        <Link to="/">{lang.entries.home}</Link>
      </>
    );
  }
  return (
    <>
      <img src={appsIcon} alt="apps-icon" />
      <a href="https://github.com/mbodm">GitHub</a>
      <Link to="/contact">{lang.entries.contact}</Link>
      <Link to="/about">{lang.entries.about}</Link>
    </>
  );
}

function getFooterContent(location, lang) {
  if (location.pathname !== '/') {
    // In JSX the JS "null" value means "render nothing"
    return null;
  }
  // In JSX a single HTML line needs no JSX fragment wrapper (<>)
  return <span>{lang.entries.footer}</span>;
}
