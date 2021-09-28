import React from "react";
import Gif from "./Gif";
import './ListOfGifs.css'

export default function ListOfGifs({gifs}){
    
    return (
        <div className="gifList-content">
            {
                gifs.map(({id,title,url}) => 
                    <Gif 
                        key={id}
                        title={title} 
                        url={url}
                    />
                )
            }
        </div>
    )
}



