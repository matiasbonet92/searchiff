import React from "react";

export default function Gif({title,url}){
    return(
        <div className="gifList">
            <img src={url} alt={title}/>
        </div>
    )
}