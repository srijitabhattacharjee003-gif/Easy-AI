import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Research from './pages/Research.jsx';
import Methodology from './pages/Methodology.jsx';
import Design from './pages/Design.jsx';
import Comparison from './pages/Comparison.jsx';
import ABTesting from './pages/ABTesting.jsx';
import Results from './pages/Results.jsx';
import Demo from './pages/Demo.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="methodology" element={<Methodology />} />
          <Route path="design" element={<Design />} />
          <Route path="comparison" element={<Comparison />} />
          <Route path="ab-testing" element={<ABTesting />} />
          <Route path="results" element={<Results />} />
          <Route path="demo" element={<Demo />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}