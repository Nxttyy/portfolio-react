import { Ultra, Inter, Jersey_10 } from "next/font/google";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


// const ultra = Ultra({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",

// });

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const micro_5 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Intro() {
  return (
    <div className="flex  justify-between border mt-10">
      <div className=" w-full">
        <h1 className={`${micro_5.className} text-9xl p-10 m-5 text-white`}>
          Natty <br /> Yirga
        </h1>

        <ul className="flex flex-row my-7 justify-center w-full">
          <li className="">
            <a href="mailto:Nathnaelyirga@gmail.com" ><MailOutlineIcon className="mx-5 fill-slate-400" /></a>
            {/* <p className={`${inter.className} text-midium font-extrabold `}>
              Nathnaelyirga
            </p>
            <p className={`${inter.className} text-large font-light text-opacity-0`}>
              @gmail.com
            </p> */}
          </li>
          <li className=" ">
            <a href="https://www.linkedin.com/in/nathnael-yirga/"  target="_blank"><LinkedInIcon className="mx-5 fill-slate-400" /></a>
            {/* <p className={`${inter.className} text-midium font-light`}>@</p>
            <p className={`${inter.className} text-midium font-bold`}> */}
              {/* Nathnaelyirga */}
            {/* </p> */}
          </li>
          <li className="">
            <a href="https://www.telegram.me/Nxtiey/" target="_blank"><TelegramIcon className="mx-5 fill-slate-400" /></a>
            {/* <p className={`${inter.className} text-midium font-light`}>t.me/</p>
            <p className={`${inter.className} text-midium font-bold`}>Nxttie</p> */}
          </li>
          <li className="">
            <a href="https://www.github.com/Nxttyy/" target="_blank"><GitHubIcon className="mx-5 fill-slate-400" /></a>
            {/* <p className={`${inter.className} text-midium font-light`}>@</p>
            <p className={`${inter.className} text-midium font-bold`}> */}
              {/* Nathnaelyirga */}
            {/* </p> */}
          </li>
          <li className="">
            <a href="https://www.twitter.com/NathnaelYirga/" target="_blank"><XIcon className="mx-5 fill-slate-400" /></a>
            {/* <p className={`${inter.className} text-midium font-light`}>@</p>
            <p className={`${inter.className} text-midium font-bold`}> */}
              {/* Nathnaelyirga */}
            {/* </p> */}
          </li>
        </ul>
      </div>

      <div className=" w-full flex items-center justify-center place-items-center place-content-center">
        <iframe
          src="/ascii-art.html"
          scrolling="no"
          frameBorder="0"
          className="w-full h-full place-self-center  m-10 py-10"
        ></iframe>
      </div>
    </div>
  );
}

export default Intro;

// portfolio/public/ascii-art .html
