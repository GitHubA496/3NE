"use client"
import { HomeBtn } from "../components/HomeBtn";

export default function RootLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col py-20 px-16 items-center justify-between">
        <HomeBtn />
        {children}
    </main>
  );
}

