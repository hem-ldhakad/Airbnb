import React from "react"
import star from "./images/Star 1.png"

export default function Card(props){
    let bagdetext 
    if (props.data.openspots===0)
        bagdetext="SOLD OUT"
    else if(props.data.country==="online")
        bagdetext="ONLINE"

    return (
    <div className="card">
        {bagdetext && <div className="bagde">{bagdetext}</div>}
        <img className="photo" src={props.data.img} height="235px" alt="Not found"/>
        <div className="stars">
            <img className="image--star" src={star} alt=""/>
            <span>{props.data.rating}</span>
            <span className="gray">({props.data.reviewcount}) •</span>
            <span className="gray">{props.data.country}</span>
        </div>
        <p className=".card--title">{props.data.title}</p>
        <p><b>From ${props.data.price}</b> / person</p>
    </div>
    )
}