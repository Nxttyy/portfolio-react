import { Ultra, Inter, Jersey_10 } from "next/font/google";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    <div className="flex  justify-between border border-green-700">
      <div className="border border-blue-50 w-full">
        <h1 className={`${micro_5.className} text-9xl p-10 m-5`}>
          Natty <br /> Yirga
        </h1>

        <ul className="flex flex-col mx-10 my-10">
          <li className="flex my-3">
            <MailOutlineIcon className="mx-5" />
            <p className={`${inter.className} text-midium font-light`}>
              Nathnaelyirga
            </p>
            <p className={`${inter.className} text-large font-bold italic`}>
              @gmail.com
            </p>
          </li>
          <li className="flex my-3">
            <LinkedInIcon className="mx-5" />{" "}
            <p className={`${inter.className} text-midium font-light`}>@</p>
            <p className={`${inter.className} text-midium font-bold`}>
              Nathnaelyirga
            </p>
          </li>
          <li className="flex">
            <TelegramIcon className="mx-5" />
            <p className={`${inter.className} text-midium font-light`}>t.me/</p>
            <p className={`${inter.className} text-midium font-bold`}>Nxttie</p>
          </li>
          <li className="flex my-3">
            <XIcon className="mx-5" />{" "}
            <p className={`${inter.className} text-midium font-light`}>@</p>
            <p className={`${inter.className} text-midium font-bold`}>
              Nathnaelyirga
            </p>
          </li>
        </ul>
      </div>

      <div className="border border-red-600 w-full flex items-center justify-center">
        <iframe
          src="/ascii-art.html"
          width="100%"
          height="100%"
          // className="width-full height-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Intro;
