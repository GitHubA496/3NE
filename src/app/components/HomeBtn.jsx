"use client"
import { Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
const {label, link, newTab} = { label: "Home", link: "/", newTab: false }
export const HomeBtn = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="fixed top-4 left-2.5 xs:left-4">
        <Link href={link} target={newTab ? "_blank" : "_self"} 
     onMouseEnter={() => setIsHovered(true)} // Set hover to true when mouse enters
     onMouseLeave={() => setIsHovered(false)}
        className="text-foreground rounded-full flex items-center justify-center
        custom-bg shadow-glass-inset hover:shadow-glass-sm
         border border-solid border-accent/30
        backdrop-blur-[6px]
        " 
        aria-label = {label}
        name={label}
        >

            <span className= "relative w-14 h-14 p-4 hover:text-accent" >
                {<Home />}
                {
                    isHovered && (
                    <span className="absolute px-2 py-1 text-sm left-full mx-2 top-1/2 -translate-y-1/2 
                        bg-background rounded-md text-foreground shadow-lg whitespace-nowrap">
                      {label}
                    </span>
                  )
                }
            </span>
            </Link>
    </div>)

}