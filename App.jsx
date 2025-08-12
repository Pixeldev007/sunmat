import React from "react";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdJ1Z_3ro-65crWt3o9sP-E613A31IhB_Rgimg0wKgVQ89ZRQ/viewform?usp=dialog";

function App() {
  const openForm = () => {
    window.open(FORM_URL, "_blank", "noopener,noreferrer");
  };

  // Outline effect using multi-layered text-shadow (works cross-browser better than text-stroke)
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
      className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-10"
      style={{
        background:
          "linear-gradient(135deg, #ff8a00 0%, #ffc107 50%, #ffe082 100%)",
      }}
    >
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/60 p-5 sm:p-8 md:p-10">
        {/* Title */}
        <h1
          className="text-center font-black tracking-tight"
          style={{
            color: "#1e40af", // blue
            ...whiteOutline,
            fontSize: "clamp(28px, 7vw, 56px)",
            lineHeight: 1.1,
          }}
        >
          Sun Matrimony
        </h1>

        {/* Subheadline */}
        <p
          className="text-center font-extrabold mt-3 sm:mt-4"
          style={{
            color: "#b91c1c", // red
            ...whiteOutline,
            fontSize: "clamp(18px, 4.5vw, 36px)",
            lineHeight: 1.2,
          }}
        >
          விரைவில் திருமணம் நடத்த வேண்டுமா?
        </p>

        {/* Description like matrimonial ad */}
        <p
          className="mt-5 sm:mt-6 text-center mx-auto max-w-2xl"
          style={{
            color: "#6b0f1a", // dark maroon
            fontSize: "clamp(14px, 2.8vw, 18px)",
          }}
        >
          உங்கள் கனவு திருமணத்தை சிறப்பாகவும் சுருக்கமாகவும் நடத்த உதவ தயாராக உள்ளோம்! 
          இடம் தேர்வு முதல் அலங்காரம், நிச்சயதார்த்தம் முதல் மாப்பிள்ளை அழைப்பிதழ் வரை —
          அனைத்தும் ஒரே இடத்தில், உங்கள் பட்ஜெட்டுக்கு ஏற்ப. உங்கள் விவரங்களை வழங்குங்கள்; 
          எங்கள் குழு உடனடியாக தொடர்பு கொள்ளும்.
        </p>

        {/* Contacts panel */}
        <div className="mt-6 sm:mt-8">
          <div className="bg-blue-900 text-white rounded-2xl px-4 sm:px-6 py-4 sm:py-5 text-center shadow-lg">
            <div className="text-lg sm:text-xl md:text-2xl font-bold">தொடர்பு எண்கள்</div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-extrabold">
              <div>+91 98765 43210</div>
              <div>+91 91234 56789</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
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
            Google Form பூர்த்தி செய்யவும்
          </button>
        </div>

        {/* Small note */}
        <p className="text-center text-sm text-gray-700 mt-4">
          தமிழ் எழுத்துரு: Noto Sans Tamil · பக்கம் கைப்பேசி மற்றும் கணினி இரண்டுக்கும் பொருந்தும்
        </p>
      </div>
    </div>
  );
}

export default App;
