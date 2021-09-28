import React , {useEffect,useState} from 'react';
import Category from '../Category'
import getTrendingGifs from '../../services/getTrendingGifs'

export default function TrendingSearch(){
    const [trendings,setTrendings] = useState([])

    useEffect(function(){
        getTrendingGifs().then(setTrendings)
    },[])

    return <Category name='Trendings' options={trendings}/>
}