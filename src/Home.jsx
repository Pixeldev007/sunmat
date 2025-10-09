import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdJ1Z_3ro-65crWt3o9sP-E613A31IhB_Rgimg0wKgVQ89ZRQ/viewform?usp=dialog";

export default function Home() {
  const openForm = () => {
    // Prevent duplicate firing within 1.5s (guards against double-invoked handlers)
    if (window.__regFiring) return;
    window.__regFiring = true;
    setTimeout(() => { window.__regFiring = false; }, 1500);

    if (window.fbq) {
      window.fbq('trackSingle', '1864312051151382', 'Lead');
      window.fbq('trackSingleCustom', '1864312051151382', 'RegisterCTAClick', { page: 'Home', value: 800.00, currency: 'INR' });
      window.fbq('trackSingle', '1864312051151382', 'Purchase', { value: 800.00, currency: 'INR' });
    }
    window.open(FORM_URL, "_blank", "noopener,noreferrer");
  };

  const whiteOutline = {
    textShadow: `
      1px 1px 0 #fff,
      -1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px -1px 0 #fff,
      0 2px 0 #fff,
      2px 0 0 #fff,
      0 -2px 0 #fff,
      -2px 0 0 #fff
    `,
  };

  return (
    <div
      className="min-h-full flex flex-col items-center p-4 sm:p-6 md:p-10"
      style={{
        background:
          "linear-gradient(135deg, #ff8a00 0%, #ffc107 50%, #ffe082 100%)",
      }}
    >
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/60 p-5 sm:p-8 md:p-10">
        <div className="flex justify-center">
          <img
            src="./images/logo.png"
            alt="Sun Matrimony Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow"
            style={{ filter: "drop-shadow(0 1px 0 #fff)" }}
          />
        </div>
        <h1
          className="text-center font-black tracking-tight"
          style={{
            color: "#1e40af",
            ...whiteOutline,
            fontSize: "clamp(28px, 7vw, 56px)",
            lineHeight: 1.1,
          }}
        >
          Sun Matrimony
          <br />
          <span style={{ color: "#1e40af", fontSize: "clamp(lam, 4.5vw, 36px)", }}>சன் மேட்ரிமோணி</span>
          <br />
          <span style={{ color: "#b91c1c", fontSize: "clamp(16px, 4vw, 32px)", }}>[அனைத்து சமூகத்திற்கும்]</span>
        </h1>

        <p
          className="text-center font-extrabold mt-3 sm:mt-4"
          style={{
            color: "#b91c1c",
            ...whiteOutline,
            fontSize: "clamp(16px, 4vw, 32px)",
            lineHeight: 1.2,
          }}
        >
          விரைவில் திருமணம் நடைபெற வேண்டுமா?

        </p>

        <div className="mt-4 sm:mt-5 flex justify-center gap-4">
          <img
            src="./images/image1.png"
            alt="Matrimony Service"
            className="rounded-lg shadow-md"
            style={{ maxHeight: "200px", maxWidth: "45%" }}
          />
          <img
            src="./images/image2.png"
            alt="Matrimony Service 2"
            className="rounded-lg shadow-md"
            style={{ maxHeight: "200px", maxWidth: "45%" }}
          />
        </div>
        
        <div className="mt-7 sm:mt-9 flex justify-center">
          <button
            onClick={openForm}
            className="rounded-full bg-pink-600 text-white font-extrabold shadow-xl hover:bg-pink-700 active:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-transform duration-150"
            style={{
              padding: "14px 22px",
              fontSize: "clamp(16px, 4vw, 22px)",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            REGISTER / பதிவு செய்
          </button>
        </div>

        <p
          className="mt-5 sm:mt-6 text-center mx-auto max-w-2xl"
          style={{
            color: "#6b0f1a",
            fontSize: "clamp(16px, 3vw, 20px)",
            fontWeight : "bold",
          }}
        >
          1.உங்களுக்கு பொருத்தமான வரன்களை தேர்ந்தெடுத்து வரன் வீட்டாரிடம் பேசி, 
          பொருத்தமான <strong style={{ fontSize: "22px" }}>12</strong> வரன் விபரங்களை போன் நம்பருடன் தபால் மூலம் அனுப்புகிறோம்.
          <br />
          2.வரன்களை தபாலில் பெற்றபின் தபால்காரரிடம் ரூ <strong style={{ fontSize: "22px" }}>700</strong> [COD] செலுத்தினால் போதும்.
        </p>

        <div className="mt-6 sm:mt-8">
          <div className="bg-blue-900 text-white rounded-2xl px-4 sm:px-6 py-4 sm:py-5 text-center shadow-lg">
            <div className="text-lg sm:text-xl md:text-2xl font-bold">தொடர்பு எண்கள்</div>
            {/* Mobile: 2 columns x 3 rows; Tablet/Desktop: 2 columns */}
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-xl md:text-2xl font-extrabold">
              <div className="whitespace-nowrap">+91 93420 97057</div>
              <div className="whitespace-nowrap">+91 63793 99175</div>
              <div className="whitespace-nowrap">+91 81486 53302</div>
              <div className="whitespace-nowrap">+91 99942 75366</div>
              <div className="whitespace-nowrap">+91 98422 73093</div>
              <div className="whitespace-nowrap">+91 97917 81651</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons: Call and WhatsApp */}
        <div className="mt-6 flex justify-center items-center gap-4 sm:gap-6">
          <a
            href="tel:+916379399175"
            className="flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-5 sm:px-6 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-110 active:scale-100"
          >
            <FaPhoneAlt size="1.2em" />
            <span className="text-base sm:text-lg">Call</span>
          </a>
          <a
            href="https://wa.me/918640090400"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-5 sm:px-6 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-110 active:scale-100"
          >
            <FaWhatsapp size="1.4em" />
            <span className="text-base sm:text-lg">WhatsApp</span>
          </a>
        </div>

        
      </div>
      {/* Mobile-only: simple underlined links */}
      <div className="w-full max-w-3xl mx-auto mt-4 px-1 sm:px-0 sm:hidden">
        <div className="flex justify-center items-center gap-6 flex-wrap text-blue-800 font-semibold">
          <Link to="/privacy" className="underline hover:text-blue-900">Privacy</Link>
          <Link to="/terms" className="underline hover:text-blue-900">Terms & Conditions</Link>
          <Link to="/contact" className="underline hover:text-blue-900">Contact</Link>
        </div>
      </div>

      {/* Tablet/Desktop: keep boxed buttons */}
      <div className="w-full max-w-3xl mx-auto mt-4 px-1 hidden sm:block">
        <div className="grid grid-cols-3 gap-3">
          <Link to="/privacy" className="w-full text-center px-4 py-3 rounded-xl bg-white text-blue-800 font-semibold border border-blue-200 hover:bg-blue-50 shadow-sm">
            Privacy
          </Link>
          <Link to="/terms" className="w-full text-center px-4 py-3 rounded-xl bg-white text-blue-800 font-semibold border border-blue-200 hover:bg-blue-50 shadow-sm">
            Terms & Conditions
          </Link>
          <Link to="/contact" className="w-full text-center px-4 py-3 rounded-xl bg-white text-blue-800 font-semibold border border-blue-200 hover:bg-blue-50 shadow-sm">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
