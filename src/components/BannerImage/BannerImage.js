import React, { useEffect, useState } from 'react'
import './BannerImage.css'
import axios from 'axios'
import { API_KEY,ImageUrl } from '../Constants/Constants'



function BannerImage() {
  const [movie, setMovie] = useState()
  const [URLId,setUrlId] = useState('')

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      setMovie(
        responce.data.results[
          Math.floor(Math.random() * responce.data.results.length - 1)
        ]
        )
    })

      
  
}, [])


  


  return (
    <div style={{backgroundImage:`URL(${movie ? ImageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.title : ""}</h1>
            <div className="banner_buttons">
                <button className='Button1'> ▶ Play</button>
                <button className='Button2'>+ My List</button>
            </div>
            <h1 className="desccription">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default BannerImage