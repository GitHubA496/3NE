import { ProjectLayout } from "./ProjectLayout"



export const ProjectList = ({projectsData}) => {
    return(
        <>
        <div className="w-full my-8 px-16 flex flex-col space-y-8 max-w-4xl items-center">{projectsData.map((project) => <ProjectLayout key={project.id} {...project} />)}</div>
        </>
    )
}