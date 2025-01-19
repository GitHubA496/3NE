"use client"
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { ProjectList } from "../../components/projects";
import {projectsData} from "../../data"
import { RenderModels } from "../../components/RenderModels";
import { Staff } from "../../components/models/Staff";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background" className="h-full w-full fixed -z-50 top-0 left-0 object-cover object-center opacity-25" />
    
    <ProjectList projectsData={projectsData} />
    <div className="flex items-center justify-center fixed top-20 left-0 h-screen">

    <RenderModels>
        <Staff />
    </RenderModels>
    </div>
    </>
  );
}
