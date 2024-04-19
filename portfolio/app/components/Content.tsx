import Projects from "./Projects";
import Communities from "./Communities";

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
        <p className=" text-9xl  text-nowrap truncate">BACKEND DEV</p>
      </div>
    </div>
  );
}

export default Content;
