import React ,{cardsRef, useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom';


const TitleCards=({title, category}) =>  {

    const [apiData, setApiData] = useState([])

  const cardsRef = useRef();

//  TMDB API Starting
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDNkNzk1YzMyZGFkYjMxNmMzYjBlN2Q3NDE2OTQ3YyIsIm5iZiI6MTc1NDk4OTkxNy4wMDMsInN1YiI6IjY4OWIwNTVjN2U0MzUxNDEwZmI3MDc4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nVMiz80NG0TvDtn9oFOQz1IsVowRB_xrmdRG8DWHf4g'
  }
};


const handleWheel = (event) => {
  event.preventDefault;
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));  //end

  cardsRef.current.addEventListener('wheel', handleWheel)
},[])

  return (
    <>

    {/* <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div> */}

    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
    </>
  )
}

export default TitleCards
