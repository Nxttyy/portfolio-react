import dynamic from 'next/dynamic';
import Content from "./components/Content";
import Techs from "./components/Techs";
import React from "react";
import Intro from "./components/Intro"


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