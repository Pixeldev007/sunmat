import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-full flex items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(135deg, #ff8a00 0%, #ffc107 50%, #ffe082 100%)",
      }}
    >
      <div className="w-full max-w-3xl bg-amber-50 rounded-2xl shadow-2xl border border-amber-100 p-6 md:p-10">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">Contact Us</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-blue-700 hover:underline font-semibold"
          >
            ← Back to Home
          </button>
        </div>
        <p className="mt-2 text-gray-700">
          Have questions? Reach us directly using the details below.
        </p>

        {/* Phone card */}
        <div className="mt-6 bg-[#1f3b8a] text-white rounded-xl p-5 md:p-6 shadow-md">
          <div className="text-white/90 font-semibold">Phone</div>
          <div className="mt-2 space-y-1">
            <a href="tel:+919342097057" className="block text-xl md:text-2xl font-extrabold hover:underline" aria-label="Call +91 93420 97057">+91 93420 97057</a>
            <a href="tel:+916379399175" className="block text-xl md:text-2xl font-extrabold hover:underline" aria-label="Call +91 63793 99175">+91 63793 99175</a>
            <a href="tel:+918148653302" className="block text-xl md:text-2xl font-extrabold hover:underline" aria-label="Call +91 81486 53302">+91 81486 53302</a>
            <a href="tel:+919994275366" className="block text-xl md:text-2xl font-extrabold hover:underline" aria-label="Call +91 99942 75366">+91 99942 75366</a>
            <a href="tel:+919842273093" className="block text-xl md:text-2xl font-extrabold hover:underline" aria-label="Call +91 98422 73093">+91 98422 73093</a>
            <a href="tel:+919791781651" className="block text-xl md:text-2xl font-extrabold hover:underline" aria-label="Call +91 97917 81651">+91 97917 81651</a>
          </div>
        </div>

        {/* Website card */}
        <div className="mt-4 bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-gray-700 font-semibold">Website</div>
            <a
              href="https://sunmat.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-semibold hover:underline"
            >
              www.sunmat.in
            </a>
          </div>
        </div>

        <p className="mt-6 text-gray-600 text-sm">
          We respond quickly during business hours.
        </p>
      </div>
    </div>
  );
}
