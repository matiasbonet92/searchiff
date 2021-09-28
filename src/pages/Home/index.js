import React, {useState} from "react";
import { useLocation } from "wouter";
import {useGifs} from '../../hooks/useGifs'
import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearch from "../../components/TrendingSearch/TrendingSearch";

export default function Home(){

    const [keyword,setKeyword] = useState('')
    const [path , pushPath] = useLocation()
    const {gifs} = useGifs()

    const handleSubmit = event =>{
        event.preventDefault()
        pushPath(`/search/${keyword}`)
    }

    const handleChange = event =>{
        setKeyword(event.target.value)
    }

    return(
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <input type="text" class="form-control position-relative start-50 translate-middle-x w-25 text-center mb-4 mt-0" name="" id="search" aria-describedby="helpId" placeholder="search here..." value={keyword} />                
                </div>
            </form>
            <div className="body">
                <div className="last-search">
                    <h4>Last Searched:</h4>
                    <ListOfGifs gifs={gifs}/>
                </div>
                <div className="trendings">
                    <TrendingSearch />
                </div>
            </div>
        </div>
    )
}