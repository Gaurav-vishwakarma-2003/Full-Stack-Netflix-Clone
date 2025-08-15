import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {  //api
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDNkNzk1YzMyZGFkYjMxNmMzYjBlN2Q3NDE2OTQ3YyIsIm5iZiI6MTc1NDk4OTkxNy4wMDMsInN1YiI6IjY4OWIwNTVjN2U0MzUxNDEwZmI3MDc4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nVMiz80NG0TvDtn9oFOQz1IsVowRB_xrmdRG8DWHf4g'
  }   //api
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options) //api
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err)); //api
},[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        
        <p>{`Date: ${apiData.published_at.slice(0,10)}`}</p>
        <p>{`Name: ${apiData.name}`}</p>
        <p>{`Type: ${apiData.type}`}</p>
        
      </div>
    </div>
  )
}

export default Player
