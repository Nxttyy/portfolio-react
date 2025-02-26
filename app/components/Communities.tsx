import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import { Inter} from "next/font/google";

const color = "#E84023"

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});



function Communities() {
  return (
    <div className="w-full">
      <p className="text-start mx-10 my-10 font-extrabold text-5xl text-white">
        Communities
      </p>
      <div className="flex flex-wrap m-5 text-center w-full gap-7">
        
        {/* GDSC - AASTU */}
        <div className="max-w-sm bg-black border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <a href="#">
            <Image 
              src="/gdsc.png" 
              alt="GDSC - AASTU"
              width={400} 
              height={300} 
              className="rounded-t-lg"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <p
                className="mb-2 text-2xl font-bold  text-start text-pretty"
                style={{ color: "#E84023" }}
              >
                GDSC - AASTU
              </p>
            </a>
            
            <p className="mb-3 font-normal text-gray-100 text-start ">
              Google Developer Students Club at Addis Ababa Science and Technology University.
            </p>
        <a href="https://www.linkedin.com/company/gdsc-aastu/" target="_blank" rel="noopener noreferrer" className="mt-auto">
          <div className="relative transition-all duration-200 ease-in-out transform hover:-translate-y-1">
            <div
              className="flex border w-fit py-1 px-2 rounded-sm bg-transparent border-2 shadow-[4px_4px_0px_#E84023] hover:shadow-none hover:bg-orange-700"
              style={{ borderColor: color }}
            >
              <p className={`${inter.className} pr-2 text-white`}>Learn More</p>
              <LanguageIcon className="text-white" />
            </div>
          </div>
        </a>


          </div>
        </div>

        {/* Evangadi */}
        <div className="max-w-sm bg-black border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <a href="https://www.evangadi.com/">
            <Image 
              src="/evangadi1.jpeg" 
              alt="Evangadi Networks"
              width={400} 
              height={300} 
              className="rounded-t-lg object-fill"
            />
          </a>
          <div className="p-5 flex flex-col h-80">
            <a href="https://www.evangadi.com/">
              <p
                className="mb-2 text-2xl font-bold  text-start text-pretty"
                style={{ color: "#E84023" }}
              >
                Evangadi Networks
              </p>
            </a>
            
            <p className="mb-3 font-normal text-gray-100 text-start ">
              Preparing a young kid to be competitive in the digital era involves fostering a blend of technical skills, soft skills, and a mindset geared towards continuous learning and adaptability.
            </p>
        <a href="https://www.evangadi.com/" target="_blank" rel="noopener noreferrer" className="mt-auto">
          <div className="relative transition-all duration-200 ease-in-out transform hover:-translate-y-1">
            <div
              className="flex border w-fit py-1 px-2 rounded-sm bg-transparent border-2 shadow-[4px_4px_0px_#E84023] hover:shadow-none hover:bg-orange-700"
              style={{ borderColor: color }}
            >
              <p className={`${inter.className} pr-2 text-white`}>Learn More</p>
              <LanguageIcon className="text-white" />
            </div>
          </div>
        </a>




          </div>
        </div>

      </div>
    </div>
  );
}

export default Communities;
