"use client"
import { Toaster } from "sonner";
import { HomeBtn } from "../components/HomeBtn";

export default function RootLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col py-20 px-8 xs:px-12 md:px-16 items-center justify-between">
        <HomeBtn />
        <Toaster position="bottom-right" richColors />
        {children}
    </main>
  );
}

