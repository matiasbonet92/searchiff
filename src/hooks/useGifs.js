import {useEffect,useState} from "react"
import getGifs from "../services/getGifs"


export function useGifs({keyword} = {keyword: null}){
    const [loading,setLoading] = useState(false)
    const [gifs,setGifs] = useState([])
    
    // recupero la ultima keyword 
    const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')

    useEffect(function(){
        setLoading(true)
        getGifs({keyword: keywordToUse})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // guardo ultima keyward buscada
            localStorage.setItem('lastKeyword', keyword)
        })
    },[keyword])

    return {loading,gifs}
}