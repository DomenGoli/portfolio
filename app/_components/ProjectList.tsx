import ProjectCard from "./ProjectCard"
import { projects } from "../_lib/projects"

function ProjectList() {
    return (
        <div className="flex gap-3 pt-3">
            {projects.map((p,i) => <ProjectCard project={p} key={i}/>)}
        </div>
    )
}

export default ProjectList
