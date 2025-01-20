"use client"
import {
  Home,
  Info,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  X,
  FileText,
  User,
} from "lucide-react";


import Link from "next/link"
import { useState } from "react";

const getIcon =(icon) =>{
    switch (icon) {
        case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Briefcase className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Mail className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <X className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <FileText className="w-full h-auto" strokeWidth={1.5} />;
        default:
            return <Info className="w-full h-auto" strokeWidth={1.5} />
    }
}


export const NavButton=({x,y,label,link,icon,newTab})=>{
  const [isHovered, setIsHovered] = useState(false);
    return( 
        <div className="absolute cursor pointer z-50" style={{transform:` translate(${x},${y})`}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <Link href={link} target={newTab ? "_blank" : "_self"} 
        className="text-foreground rounded-full flex items-center justify-center
        bg-background/20 border border-solid border-accent/30 backdrop-blur-[6px]
        shadow-glass-inset hover:shadow-glass-sm smtg
        " 
        aria-label = {label}
        name={label}
        >

            <span className= "relative w-14 h-14 p-4 animate-spin-rslow group-hover:pause" >{getIcon(icon)}
            {isHovered && (
            <span className="absolute px-2 py-1 text-sm left-full mx-2 top-1/2 -translate-y-1/2 
                bg-background rounded-md text-foreground shadow-lg whitespace-nowrap">
              {label}
            </span>
          )}
            </span>
            </Link>
        </div>       
    )
}