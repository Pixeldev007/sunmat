import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSco1cEB4Kem39douDmw4zIg1318RlCm9P8ADVPT04r6GqYXuw/viewform?usp=sharing";

export default function Form2() {
  const [phone, setPhone] = useState("");
  const [qfLoading, setQfLoading] = useState(false);
  const [qfMsg, setQfMsg] = useState("");

  // Pixel is globally installed in index.html. No per-page injection here.

  const savePhoneIfValid = async () => {
    // Require a 10-digit number
    setQfMsg("");
    const trimmed = (phone || "").trim();
    if (!trimmed) {
      setQfMsg("Please enter your 10-digit phone number.");
      return false;
    }
    const digits = trimmed.replace(/\D/g, "");
    const isValid = /^\d{10}$/.test(digits);
    if (!isValid) {
      setQfMsg("Please enter a valid 10-digit phone number");
      return false;
    }
    try {
      setQfLoading(true);
      const res = await fetch('/.netlify/functions/quick-fill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: digits, page: 'Form2' })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Request failed');
      }
      setQfMsg("Saved! We will contact you shortly.Kindly fill the Google Form for more details.");
      return true;
    } catch (err) {
      setQfMsg("Could not save right now. Please try again.");
      return false;
    } finally {
      setQfLoading(false);
    }
  };

  const openForm = () => {
    window.open(FORM_URL, "_blank", "noopener,noreferrer");
  };

  const handleRegister = async () => {
    // 1) Save phone first; if invalid/missing, do NOT fire pixels or open form
    const ok = await savePhoneIfValid();
    if (!ok) return;

    // 2) After successful save, fire Form2 pixel events
    if (window.fbq) {
      const PIXEL = '2082411969167840';
      window.fbq('trackSingleCustom', PIXEL, 'RegisterCTAClick', { page: 'Form2', value: 800.00, currency: 'INR' });
      window.fbq('trackSingle', PIXEL, 'CompleteRegistration');
    }
    // After showing success, open the Google Form after 2 seconds
    setTimeout(() => {
      openForm();
    }, 2000);
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
            src="/images/logo.png"
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
          <span style={{ color: "#1e40af", fontSize: "clamp(lam, 4.5vw, 36px)" }}>சன் மேட்ரிமோணி</span>
          <br />
          <span style={{ color: "#b91c1c", fontSize: "clamp(16px, 4vw, 32px)" }}>[அனைத்து சமூகத்திற்கும்]</span>
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
            src="/images/image1.png"
            alt="Matrimony Service"
            className="rounded-lg shadow-md"
            style={{ maxHeight: "200px", maxWidth: "45%" }}
          />
          <img
            src="/images/image2.png"
            alt="Matrimony Service 2"
            className="rounded-lg shadow-md"
            style={{ maxHeight: "200px", maxWidth: "45%" }}
          />
        </div>
        
        {/* Phone capture First. Register will submit this then open form */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center">
          <div className="w-full max-w-md flex flex-col gap-3">
            <input
              type="tel"
              inputMode="tel"
              placeholder="Please Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl border border-pink-300 px-4 py-3 text-base focus:outline-none focus:ring-4 focus:ring-pink-200"
            />
            {qfMsg && (
              <div className="text-sm font-semibold text-blue-900 bg-white/70 rounded-lg px-3 py-2 text-center">
                {qfMsg}
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 sm:mt-9 flex justify-center">
          <button
            onClick={handleRegister}
            disabled={qfLoading}
            className="rounded-full bg-pink-600 text-white font-extrabold shadow-xl hover:bg-pink-700 active:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-transform duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              padding: "14px 22px",
              fontSize: "clamp(16px, 4vw, 22px)",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
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

      {/* Form2-only noscript fallback for Meta Pixel PageView */}
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=2082411969167840&ev=PageView&noscript=1" alt="" />
      </noscript>
    </div>
  );
}
