"use client"
import {  Volume2, VolumeX } from "lucide-react";
import {motion} from "framer-motion";
import { useRef, useState } from "react";
export const Sound = () => {
    const [isplaying,setPlaying] = useState(true);
    const audioRef = useRef(null);

    const toggle = ()=>{
        setPlaying(!isplaying)
        !isplaying?audioRef.current.play():audioRef.current.pause();
    }
    return( <>
        <div className="fixed top-4 right-2.5 xs:right-4 ">
            <audio ref={audioRef} autoPlay loop >
                <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>
            
            <motion.button
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{delay:1}}
            onClick={toggle}

        className="text-foreground rounded-full flex items-center justify-center
        bg-background/20 border border-solid border-accent/30 backdrop-blur-[6px]
        shadow-glass-inset hover:shadow-glass-sm smtg cursor-pointer
        " 
        >

            <span className= "relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 " >{isplaying?<Volume2 className="w-full h-full text-foreground hover:text-accent" />:<VolumeX className="w-full h-full text-foreground hover:text-accent" />}
            {/* <span className="hidden hover:block absolute px-2 py-1 text-sm left-full mx-2 top-1/2 -translate-y-1/2 
                bg-background rounded-md text-foreground shadow-lg whitespace-nowrap">
              {"Music"}
            </span> */}
            </span>
            </motion.button>
        </div>
    </>)
};