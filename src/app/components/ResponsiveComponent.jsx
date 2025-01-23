"use client"

import useScreenSize from "./hooks/useScreenSize";

export default function ResponsiveComponent({children}) {
    const size = useScreenSize();
    return(
        <>
        {children({size})}
        </>
    )
}