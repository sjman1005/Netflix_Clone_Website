import React,{useState,useEffect,useRef} from 'react'
import './RowPost.css'
import axios from 'axios'
import {API_KEY, ImageUrl } from '../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movie, setMovie] = useState([])
  const [URLId,setUrlId] = useState('')
  const ref = useRef(null);
  useEffect(() => {
    axios.get(props.url).then(responce=>{
      console.log(responce.data);
      setMovie(responce.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  }, [])
  const opts = {
    height: '350',
    width: '95%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      modestbranding:1
    }}

    const HandleMovie=(id)=>{
      console.log(id);
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce=>{
        if(responce.data.results.length!==0){
          setUrlId(responce.data.results[0])
        }else{
          console.log("Trailer not available")
        }
      })
    }

    

     
  return (
    <div className='row'>
        <h2 className="title">{props.title}</h2>
        <div className="posters">
            
          {movie.map((obj)=>
            <img onClick={() => { HandleMovie(obj.id) } } className={props.isSmall ? 'smallposter' : 'poster'} src={`${ImageUrl + obj.backdrop_path}`} alt="MOVIE" />
          
          )}
          
            
            
            
        </div>
    { URLId &&   <YouTube opts={opts} videoId={URLId.key} />  }
    </div>
  )
}

export default RowPost