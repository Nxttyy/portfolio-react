import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Inter} from "next/font/google";


const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


function ProjectCard({ title, description, link, linkText, color, iconType }) {
  return (
    <div className="max-w-sm bg-gray-900 border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5 flex flex-col border border-blue-900 h-full rounded-sm">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="mb-2 text-2xl font-bold text-start text-pretty" style={{ color }}>
            {title}
          </p>
        </a>
        <p className={`${inter.className} mb-3 font-normal text-gray-100 text-start`}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto">
          <div className="relative transition-all duration-200 ease-in-out transform hover:-translate-y-1">
            <div
              className="flex border w-fit py-1 px-2 rounded-sm bg-transparent border-2 shadow-[4px_4px_0px_#E84023] hover:shadow-none hover:bg-orange-700"
              style={{ borderColor: color }}
            >
              <p className={`${inter.className} pr-2 text-white`}>{linkText}</p>
              {iconType === "github" ? <GitHubIcon className="text-white" /> : <LanguageIcon className="text-white" />}
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}

export default ProjectCard;
