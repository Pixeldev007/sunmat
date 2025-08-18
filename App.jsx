import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Privacy from "./Privacy.jsx";
import Terms from "./Terms.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: "linear-gradient(135deg, #ff8a00 0%, #ffc107 50%, #ffe082 100%)",
    }}>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
