import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const audio = new Audio("/path/to/welcome-to-mobile-legend.mp3");
    audio.play();
  }, []);

  return (
    <div className="min-h-screen bg-red-500 text-white">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold">MLBB Uni Legends 2024</h1>
        <p className="text-xl">RM100,000 Cash & Prizes to be won</p>
      </header>
      <main className="flex flex-col items-center">
        <img
          src="/path/to/hero-image1.png"
          alt="Hero 1"
          className="animate-bounce"
        />
        <img
          src="/path/to/hero-image2.png"
          alt="Hero 2"
          className="animate-bounce"
        />
        <div className="text-center">
          <p className="text-4xl font-bold">Champion RM30,000</p>
          <p className="text-3xl">
            2<sup>nd</sup> Place RM20,000
          </p>
          <p className="text-3xl">
            3<sup>rd</sup> Place RM15,000
          </p>
          {/* Add other prize details here */}
        </div>
        <div className="mt-4">
          <label>
            <input
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            I agree to the{" "}
            <a href="/terms" className="underline">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          className={`mt-4 p-4 bg-blue-500 text-white rounded ${
            !isChecked ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (isChecked) {
              window.location.href = "https://forms.gle/your-google-form-link";
            }
          }}
          disabled={!isChecked}
        >
          Register Now
        </button>
      </main>
    </div>
  );
};

export default App;
