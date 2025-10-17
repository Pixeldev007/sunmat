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
    const FORM2_PIXEL = '805178675775448';
    const HOME_PIXEL = '1864312051151382';

    // Normalize path: remove any trailing slashes except root
    const rawPath = location.pathname || '/';
    const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
    const isHome = path === '/';
    const isForm2 = path === '/form2' || path.startsWith('/form2/');
    // Only fire on Home and Form2
    if (!isHome && !isForm2) {
      return;
    }
    const targetPixel = isForm2 ? FORM2_PIXEL : HOME_PIXEL;

    function initAndTrack() {
      if (!window.fbq) return false;
      window.__initedPixels = window.__initedPixels || {};
      if (!window.__initedPixels[targetPixel]) {
        window.fbq('init', targetPixel);
        window.fbq('set', 'currency', 'INR');
        window.__initedPixels[targetPixel] = true;
      }
      // Ensure Meta automatic events are enabled on Home and Form2 so Event Setup Tool can detect them
      try {
        window.fbq('set', 'autoConfig', true, targetPixel);
        window.fbq('set', 'eventAutoConfig', true, targetPixel);
      } catch (_) {}
      window.fbq('trackSingle', targetPixel, 'PageView');
      return true;
    }

    // Try immediately; if fbq isn't ready, retry for up to ~2s
    if (initAndTrack()) return;
    let attempts = 0;
    const maxAttempts = 10; // 10 * 200ms = 2s
    const intervalId = setInterval(() => {
      attempts += 1;
      if (initAndTrack() || attempts >= maxAttempts) {
        clearInterval(intervalId);
      }
    }, 200);
    return () => clearInterval(intervalId);
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
