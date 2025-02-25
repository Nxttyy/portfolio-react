'use client';
import { useEffect, useState } from "react";
import Projects from "./Projects";
import Communities from "./Communities";
import { Bungee_Outline } from "next/font/google";

const outlined_font = Bungee_Outline({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const sideTexts = ["BACKEND DEV", "FRONTEND DEV", "FULLSTACK DEV"];

function Content() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % sideTexts.length);
    }, 10000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="flex w-full">
      <div className="w-full">
        <Projects />
        <Communities />
      </div>
      <div
        className="w-fit hidden lg:inline height-100 rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        <p
          className={`${outlined_font.className} text-9xl p-10 m-5 text-nowrap truncate animate-text`}
          style={{ color: "#E84023" }}
        >
          {sideTexts[currentTextIndex]}
        </p>
      </div>
    </div>
    </div>
  );
}

export default Content;