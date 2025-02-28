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
    
    <div className="flex items-center justify-center fixed top-16 lg:translate-x-0 -translate-x-1/2 left-1/2 lg:-left-24  lg:top-20  h-screen ">

    <RenderModels>
        <Staff />
    </RenderModels>
    </div>
    <ProjectList projectsData={projectsData} />
    </>
  );
}
