import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home.jsx";
import Privacy from "./Privacy.jsx";
import Terms from "./Terms.jsx";
import Contact from "./Contact.jsx";
import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import Form4 from "./Form4.jsx";
import Form5 from "./Form5.jsx";
import Form6 from "./Form6.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    const OLD_PIXEL = '1310288920332565';
    const NEW_PIXEL = '1864312051151382';

    // Normalize path: remove any trailing slashes except root
    const rawPath = location.pathname || '/';
    const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
    const isHome = path === '/';
    const isForm2 = path === '/form2' || path.startsWith('/form2/');
    // Only fire on Home and Form2
    if (!isHome && !isForm2) {
      return;
    }
    const targetPixel = isForm2 ? OLD_PIXEL : NEW_PIXEL;

    function initAndTrack() {
      if (!window.fbq) return false;
      window.__initedPixels = window.__initedPixels || {};
      if (!window.__initedPixels[targetPixel]) {
        window.fbq('init', targetPixel);
        window.fbq('set', 'currency', 'INR');
        window.__initedPixels[targetPixel] = true;
      }
      window.fbq('trackSingle', targetPixel, 'PageView');
      return true;
    }

    // Try immediately, then retry shortly if fbq isn't ready yet
    if (!initAndTrack()) {
      const id = setTimeout(() => { initAndTrack(); }, 150);
      return () => clearTimeout(id);
    }
  }, [location.pathname]);

  // Always scroll to top on route change so pages start at the title, not mid-way
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{
      background: "linear-gradient(135deg, #ff8a00 0%, #ffc107 50%, #ffe082 100%)",
    }}>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form4" element={<Form4 />} />
          <Route path="/form5" element={<Form5 />} />
          <Route path="/form6" element={<Form6 />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
