"use client"
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import { RenderModels } from "../../components/RenderModels";
import { Hat } from "@/app/components/models/Hat";
import { AboutDetails } from "@/app/components/about";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background" className="h-full w-full fixed -z-50 top-0 left-0 object-cover object-center opacity-25" />
    
    <div className="flex w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-[40%] left-0">

    <RenderModels>
        <Hat />
    </RenderModels>
    </div>

    <div className="relative w-full flex flex-col h-screen items-center justify-center">

          <div className="absolute top-1/2 sm:top-[60%] text-center -translate-x-1/2 left-1/2 flex flex-col items-center ">
            <h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-bold text-accent">Ashish Saini</h1>
            <p className="font-light text-ls text-foreground">Meet the Wizard behind this Portfolio</p>
          </div>

    </div>
    <AboutDetails />
    </>
  );
}
