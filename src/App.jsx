import React, { useEffect, useRef } from "react";
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

function App() {
  const location = useLocation();
  const isFirstLoadRef = useRef(true);

  useEffect(() => {
    if (!window.fbq) return;
    // Skip initial load because index.html already fired PageView
    if (isFirstLoadRef.current) {
      isFirstLoadRef.current = false;
      return;
    }
    // Track virtual pageviews on subsequent route changes
    window.fbq('track', 'PageView');
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
