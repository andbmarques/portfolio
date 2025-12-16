import { LuGithub, LuMenu } from "react-icons/lu";
import projects from "./projects";

function App() {
  return (
    <div className="p-4 md:p-8">
      <div className="w-full py-6 px-2 md:px-6 border-b-1 border-stone-500 border-solid flex justify-between align-center">
        <h1 className="text-xl">Anderson B. Marques</h1>
        <div className="hidden md:flex gap-4">
          <a href="#projetos">Projetos</a>
          <a href="https://github.com/andbmarques" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/andbmarques/" target="_blank">Linkedin</a>
        </div>
        <a className="text-2xl md:hidden">
          <LuMenu />
        </a>
      </div>
      <div className="py-8 px-2 md:px-6 flex flex-col gap-4">
        <h1 id="projetos">Projetos</h1>
        {
          projects.map((project) => (
            <div key={project.id} className="w-full border-1 border-solid border-stone-500 p-2 flex flex-col gap-2">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p>{project.description}</p>
              <a className="bg-stone-900 w-auto p-2 flex items-center gap-2 justify-center md:max-w-fit" href={project.repoLink} target="_blank" >
                <LuGithub /> Repositório 
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
