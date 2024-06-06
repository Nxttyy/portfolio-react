// import Image from "next/image";
import Intro from "./components/Intro";
import Content from "./components/Content";
import Techs from "./components/Techs";
import React from "react";

function Home() {
 
  return (
    <main>
      <div className="container mx-auto text-center w-full ">
        <Intro />
        <Content />
        <Techs />
      </div>
    </main>
  );
}

export default Home;


