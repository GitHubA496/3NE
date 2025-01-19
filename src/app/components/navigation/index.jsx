"use client"
import {BtnList} from  "../../data"
import { NavButton } from "./NavButton"

export const Navigation=()=>{
    const angleIncrement = 360 /BtnList.length
    return(
        <div className="w-full fixed h-screen flex items-center justify-center ">
        <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group">
            {
                BtnList.map((item,index)=> {
                const angleRad = (index * angleIncrement * Math.PI)/180
                const radius = 'calc(20vw - 1rem)'
                const x = `calc(${radius}*${Math.cos(angleRad)})`
                const y = `calc(${radius}*${Math.sin(angleRad)})`
                return <NavButton key ={index} x= {x} y={y} className="absolute" label={item.label} link={item.link} icon={item.icon} newTab={item.newTab} />
                // return  <button className="absolute" style={{transform:` translate(${x},${y})`}} key={index}>{item.label}</button>
              })
            }
            </div>       
        </div>
    )
}