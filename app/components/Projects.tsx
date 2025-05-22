import projectsData from "@/public/assets/projects_data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="w-full">
      <p className="text-start mx-10 my-10 font-extrabold text-5xl text-white">
        Projects
      </p>
      <div className="flex flex-wrap m-5 text-center w-full gap-7">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
