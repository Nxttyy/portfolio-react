import Projects from "./Projects";
import Communities from "./Communities";
import {Bungee_Outline}  from "next/font/google";

const outlined_font = Bungee_Outline({
  weight: "400",
  subsets: ["latin"],
});

function Content() {
  return (
    <div className="flex w-full">
      <div className="border w-full">
        <Projects />
        <Communities />
      </div>
      <div
        className=" border w-fit  height-auto rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        <p className= {`${outlined_font.className} text-9xl p-10 m-5 text-9xl  text-nowrap truncate" `}  style={{'color':"#E84023"}}><text>BACKEND DEV</text></p>
      </div>
    </div>
  );
}


export default Content;