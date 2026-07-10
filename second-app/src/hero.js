import React from "react"
import grid from "./images/Group 77.png"


export default function Hero(){
    return (
    <div className="hero">
        <img className="grid" src={grid} alt="not found data"/>
        <h1 className="header">Online Enterprises</h1>
        <p className="para">Join unique interactive activities led by one-of-a-kind hosts-all withoutleaving home.</p>
    </div>
    )
}