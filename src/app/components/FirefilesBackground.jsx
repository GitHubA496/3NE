"use client";

import React,{ useEffect, useState } from "react";

const createFirefiles=()=>({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 10 + 5}s`,
})
export const FirefilesBackground = () => {
    const [firefile,setFirefile] = useState([])

    useEffect(()=>{
        const addMoreFirefiles = ()=>{
            const newFirefly = createFirefiles();
            setFirefile(prev => [...prev.slice(-30),newFirefly])
        }

        const interval = setInterval(addMoreFirefiles,1000)

        return ()=> clearInterval(interval)
    },[])

    return (
        <div className="fixed w-full h-full top-0 left-0 -z-10 overflow-hidden">
            {
                firefile.map(firefly=>{
                    return (<div key={firefly.id} 
                    style={{
                        top:firefly.top,
                        left: firefly.left,
                        animation: `move ${firefly.animationDuration} infinite alternate`
                    }} 
                    className="absolute bg-firefly-gradient shadow-glass-inset rounded-full w-[20px] h-[20px]"></div>)
                }
            )
            }
        </div>
    );
};
