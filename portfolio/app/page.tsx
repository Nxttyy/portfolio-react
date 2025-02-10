import Image from "next/image";
import Intro from "./components/Intro";
import Content from "./components/Content";
import Techs from "./components/Techs";
import React from "react";
// import bg from '../public/bg-grad.png'
// function Home() {
 
//   return (
//     <main>
//       <div className="container mx-auto text-center w-full ">
//         <Intro />
//         <Content />
//         <Techs />
//       </div>
//     </main>
//   );
// }

// export default Home;


function Home() {
  return (
    <main className="relative min-h-screen bg-cover bg-center bg-no-repeat" >
      <div className="container mx-auto text-center w-full p-10">
        <Intro />
        <Content />
        <Techs />
      </div>
    </main>
  );
}

export default Home;
