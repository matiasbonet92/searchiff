import React from "react";
import { Link } from "wouter";
import './Category.css'

export default function Category({name , options = []}){

    return (
        <div className="Category">
            <h4 className="Category-title">{name}</h4>
            <ul className="Category-list">
                {
                    options.map(singleOption => {
                        const {title,id} = singleOption
                        return <li key={id}>
                            <Link 
                                className="Category-link"
                                to={`/search/${title}`} 
                            >{title}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}