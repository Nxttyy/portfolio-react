"use client";
import { Ultra, Inter, Jersey_10 } from "next/font/google";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from '@mui/icons-material/Description';
import { PictureAsPdf } from '@mui/icons-material';
import { useEffect, useState } from "react";
import bg from '../../public/bg-grad.png'

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


  const [asciiArt, setAsciiArt] = useState("");

  useEffect(() => {
    fetch("/assets/ascii.txt") // Fetch from the public folder
      .then((res) => res.text())
      .then((text) => setAsciiArt(text))
      .catch((err) => console.error("Error loading ASCII art:", err));
  }, []);



  return (
    <div className="flex  justify-between border mt-10 " style={{ backgroundImage: `url(${bg.src}` }}>
      <div className=" w-full">
        <h1 className={`${micro_5.className} text-9xl p-10 m-5 text-white`}>
          Natty <br /> Yirga
        </h1>

        <ul className="flex flex-row my-7 justify-center w-full">
          {/* <li className="transition-transform duration-300 hover:scale-125">
            <a href="mailto:Nathnaelyirga@gmail.com" ><MailOutlineIcon className="mx-5 fill-slate-400" /></a>
          </li> */}
          <li className="relative group transition-transform duration-300 hover:scale-125">
            <a href="mailto:Nathnaelyirga@gmail.com">
              <MailOutlineIcon className="mx-5 fill-slate-400" />
              <span className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-xs text-slate-100 bg-slate-800 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                email
              </span>
            </a>
          </li>
          {/* linkdin */}
          <li className="relative group transition-transform duration-300 hover:scale-125">
            <a href="https://www.linkedin.com/in/nathnael-yirga/"  target="_blank">
              <LinkedInIcon className="mx-5 fill-slate-400" />
              <span className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-xs text-slate-100 bg-slate-800 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  linkdin
                </span>
            </a>
           
          </li>
          <li className="relative group transition-transform duration-300 hover:scale-125">
            <a href="https://www.telegram.me/Nxtiey/" target="_blank">
              <TelegramIcon className="mx-5 fill-slate-400" />
              <span className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-xs text-slate-100 bg-slate-800 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  telegram
                </span>
              </a>
          </li>
          <li className="relative group transition-transform duration-300 hover:scale-125">
            <a href="https://www.github.com/Nxttyy/" target="_blank">
            <GitHubIcon className="mx-5 fill-slate-400" />
              <span className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-xs text-slate-100 bg-slate-800 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    github
              </span>
            </a>
           
          </li>
          <li className="relative group transition-transform duration-300 hover:scale-125">
            <a href="https://www.twitter.com/NathnaelYirga/" target="_blank">
            <XIcon className="mx-5 fill-slate-400" />
              <span className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-xs text-slate-100 bg-slate-800 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                twitter
              </span>
            </a>
          </li>
          {/* CV button */}
          <li className="relative group transition-transform duration-300 hover:scale-125">
            <a href="/cv.pdf" target="_blank" download>
              <PictureAsPdf className="mx-5 fill-slate-400" />
              {/* Popup description */}
              <span className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-xs text-slate-100 bg-slate-800 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CV
              </span>
            </a>
          </li>
        </ul>
      </div>

     

      <div className="w-[400px] h-[400px] flex justify-center items-center overflow-hidden  rounded-lg m-5">
        <pre
          className="text-indigo-200 text-[6px] font-mono leading-none 
                    scale-[0.8] whitespace-pre"
          dangerouslySetInnerHTML={{ __html: asciiArt }}
        ></pre>
      </div>


    </div>
  );
}

export default Intro;

// portfolio/public/ascii-art .html
//  <div className=" w-full hidden lg:flex items-center justify-center place-items-center place-content-center ">
    //     <iframe
    //       src="/ascii-art.html"
    //       scrolling="no"
    //       frameBorder="0"
    //       className="w-full h-full place-self-center  m-10 py-10"
    //     ></iframe>
    //   </div>