import { API_KEY , API_URI } from "./settings"

export default function getTrendingGifs(){
  const apiURL = `${API_URI}/trending?api_key=${API_KEY}&limit=25&rating=g`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if(Array.isArray(data)){
        const trendingGifs = data.map(image => {
          const {images,title,id} = image
          const {url} = images.downsized_medium
          return {title,id,url}
        })
        return trendingGifs
      }
  })
}