import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <div className="w-full">
      <p className="text-start mx-10 my-10 font-extrabold text-5xl">Projects</p>
      <div className="flex flex-wrap m-5 text-center w-full gap-7">
        {/* Campus Sync */}
        <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <div className="p-5">
            <a href="#">
              <p
                className="mb-2 text-2xl font-bold  text-start text-pretty"
                style={{ color: "#E84023" }}
              >
                CampusSync - API
              </p>
            </a>
            <p className="mb-3 font-normal text-gray-100 text-start ">
              Hackaton project built with Django REST Framework, DRF-spectacular for schema generation, JWT for authentication ...
            </p>
            <a href="https://natty.pythonanywhere.com" ><div
              className="flex border w-fit py-1 px-2 rounded-md"
              style={{ borderColor: "#E84023" }}
            >
              <p className="pr-2 text-white">site</p>
              <LanguageIcon className="text-white"/>
            </div></a>

            
          </div>
        </div>

        {/* youtube flask */}
        <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <div className="p-5">
            <a href="#">
              <p
                className="mb-2 text-2xl font-bold  text-start text-pretty"
                style={{ color: "#E84023" }}
              >
                
                YouTube-like App
              </p>
            </a>
            
            <p className="mb-3 font-normal text-gray-100 text-start ">
            Youtube-like app using Flask, integrating SQLAlchemy for database operations, WTForms for form handling, and Jinja2 for templating.
              </p>
            <a href="https://github.com/Nxttyy/YouTube-Flask" ><div
              className="flex border w-fit py-1 px-2 rounded-md"
              style={{ borderColor: "#E84023" }}
            >
              <p className="pr-2 text-white">github</p>
              <GitHubIcon className="text-white"/>
            </div></a>

          </div>
        </div>


        {/* libgen */}
        <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <div className="p-5">
            <a href="#">
              <p
                className="mb-2 text-2xl font-bold  text-start text-pretty"
                style={{ color: "#E84023" }}
              >
                
                Library-genesis
              </p>
            </a>
            
            <p className="mb-3 font-normal text-gray-100 text-start ">
            command-line interface (CLI) tool built with Python for downloading books from Library Genesis. It allows users to search for books by title, author, or ISBN and download them directly to their local system.              </p>
            <a href="https://github.com/Nxttyy/libgen-api-cli" ><div
              className="flex border w-fit py-1 px-2 rounded-md"
              style={{ borderColor: "#E84023" }}
            >
              <p className="pr-2 text-white">github</p>
              <GitHubIcon className="text-white"/>
            </div></a>

          </div>
        </div>


        {/* tele-mart */}
        <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <div className="p-5">
            <a href="#">
              <p
                className="mb-2 text-2xl font-bold  text-start text-pretty"
                style={{ color: "#E84023" }}
              >
                
                Tele-Mart
              </p>
            </a>
            
            <p className="mb-3 font-normal text-gray-100 text-start ">
            A marketplace Telegram bot built using Python and the python-telegram-bot library. with functionaliies to create, list, and purchase items, and is integrated with the Chapa payment platform for handling payments.
            </p><a href="https://github.com/Nxttyy/Tele-Mart" ><div
              className="flex border w-fit py-1 px-2 rounded-md"
              style={{ borderColor: "#E84023" }}
            >
              <p className="pr-2 text-white">github</p>
              <GitHubIcon className="text-white"/>
            </div></a>

          </div>
        </div>

        {/* amharic-dictionary */}
        <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <div className="p-5">
            <a href="#">
              <p
                className="mb-2 text-2xl font-bold  text-start text-pretty"
                style={{ color: "#E84023" }}
              >
                
                English to amharic dictionary.
              </p>
            </a>
            
            <p className="mb-3 font-normal text-gray-100 text-start ">
            Opensource english to amharic dictionary.
            </p><a href="https://github.com/Nxttyy/Tele-Mart" ><div
              className="flex border w-fit py-1 px-2 rounded-md"
              style={{ borderColor: "#E84023" }}
            >
              <p className="pr-2 text-white">github</p>
              <GitHubIcon className="text-white"/>
            </div></a>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Projects;



