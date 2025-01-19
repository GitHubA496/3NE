import Image from "next/image";
import bg from "../../public/background/home-background.png";
import { RenderModels } from "./components/RenderModels";
import Wizard from "./components/models/Wizard";
import { Navigation } from "./components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background" fill className="h-full w-full -z-50 object-cover object-center opacity-25" />

    <div className="w-full h-screen">
      <Navigation />
      <RenderModels>
        <Wizard />
      </RenderModels>
    </div>
    </main>
  );
}
