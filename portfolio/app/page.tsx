// import Image from "next/image";
import Intro from "./components/Intro";
import Content from "./components/Content";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto text-center w-full ">
        < Intro />
        < Content />

      </div>
    </main>
  );
}


