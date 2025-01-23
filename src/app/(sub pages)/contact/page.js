import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/app/components/contact/Form";
import { Toaster } from "sonner";


export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background" className="h-full w-full fixed -z-50 top-0 left-0 object-cover object-center opacity-25" />
    

    <article className="relative w-full flex flex-col items-center justify-center space-y-8 py-8 sm:py-40">
      <div className="flex flex-col items-center justify-center space-y-6  w-full sm:w-3/4">
          <h1 className="text-4xl font-semibold text-accent text-center capitalize ">
            Summon the wizard
            </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Step into the circle of enchantment and weave your words into the fabric of the cosmos. Whether you seek to conjure collaborations, unlock mysteries, or simply share tales of adventure, your messages are treasured scrolls within this realm. Use the form below to send your missives through the ethereal network, and await the whisper of magic in response.
          </p>

      </div>
            <Form />

    </article>

    </>
  );
}
