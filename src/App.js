import React, { useState } from "react";
import "./App.css";
import logo from "./assets/images/logo.png";
import hero1 from "./assets/images/nolan.png";
import hero2 from "./assets/images/black-knight.png";
import heroo from "./assets/images/info6.png";
import welcomeAudio from "./assets/audio/Welcome.mp3";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handlePlayAudio = () => {
    if (!audioPlayed) {
      const audio = new Audio(welcomeAudio);
      audio.play();
      setAudioPlayed(true);
    }
  };

  const handleRegisterClick = () => {
    if (!isChecked) {
      alert("Please agree to the terms and conditions before registering.");
    } else {
      window.location.href = "https://forms.gle/your-google-form-link";
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen text-white bg-red-500"
      onClick={handlePlayAudio}
    >
      <header className="p-4 text-center">
        <img
          src={logo}
          alt="MLBB Uni Legends Logo"
          className="w-32 h-auto mx-auto"
        />
      </header>
      <main className="relative flex flex-col items-center w-full max-w-screen-lg px-4">
        <div className="relative flex justify-center w-full my-4">
          <img src={heroo} alt="Heroutama" className="w-1/2 h-auto" />{" "}
          {/* Dikecilkan dan di tengah */}
        </div>
        <div className="relative flex items-start justify-between w-full mt-8">
          {" "}
          {/* Digeser ke bawah */}
          <img
            src={hero1}
            alt="Hero 1"
            className="absolute top-0 left-0 w-48 h-auto transform -translate-y-1/2 animate-bounce" // Dibesarkan dan dibawa lebih ke bawah
          />
          <img
            src={hero2}
            alt="Hero 2"
            className="absolute top-0 right-0 w-48 h-auto transform -translate-y-1/2 animate-bounce" // Dibesarkan dan dibawa lebih ke bawah
          />
        </div>
        <div className="mt-4 text-center">
          <label>
            <input
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mr-2"
            />
            I agree to the{" "}
            <a href="/terms" className="underline">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          className={`mt-4 p-4 bg-blue-500 text-white rounded ${
            !isChecked ? "opacity-70 cursor-not-allowed" : ""
          }`}
          onClick={handleRegisterClick}
        >
          Register Now
        </button>
      </main>
    </div>
  );
};

export default App;
