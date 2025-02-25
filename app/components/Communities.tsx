import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";

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
            <a href="https://www.linkedin.com/company/gdsc-aastu/" className="mt-auto">
              <div className="flex border w-fit py-1 px-2 rounded-md"
                style={{ borderColor: "#E84023" }}
              >
                <p className="pr-2 text-white">learn more</p>
                <LanguageIcon className="text-white"/>
              </div>
            </a>

          </div>
        </div>

        {/* Evangadi */}
        <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <Image 
              src="/evangadi1.jpeg" 
              alt="Evangadi Networks"
              width={400} 
              height={300} 
              className="rounded-t-lg object-fill"
            />
          </a>
          <div className="p-5 flex flex-col border h-80">
            <a href="#">
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
            <a href="https://www.evangadi.com/" className="mt-auto">
              <div className="flex border w-fit py-1 px-2 rounded-md"
                style={{ borderColor: "#E84023" }}
              >
                <p className="pr-2 text-white">learn more</p>
                <LanguageIcon className="text-white"/>
              </div>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Communities;
