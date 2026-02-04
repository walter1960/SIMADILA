import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Mission from './pages/Mission';
import About from './pages/About';
import Join from './pages/Join';
import Gallery from './pages/Gallery';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Services from './pages/Services';
import News from './pages/News';
import Publications from './pages/Publications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mission" element={<Mission />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="videos" element={<Videos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="services" element={<Services />} />
          <Route path="news" element={<News />} />
          <Route path="publications" element={<Publications />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
