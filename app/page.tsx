import dynamic from 'next/dynamic';
import Content from "./components/Content";
import Techs from "./components/Techs";
import React from "react";

// Dynamically import the Intro component
const Intro = dynamic(() => import('./components/Intro'), {
  loading: () => <p>Loading...</p>, // Optional: Show a loading indicator while the component is being loaded
});

function Home() {
  return (
    <main className="relative min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto text-center w-full p-10">
        <Intro />
        <Content />
        <Techs />
      </div>
    </main>
  );
}

export default Home;