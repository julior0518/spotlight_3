import { useEffect, useState } from 'react';
import '../style/movieCard.css'

import Role from "./Role"

function MoviesCard({movies}) {
    const [current, setCurrent] = useState(0)
    const [show, setShow] = useState(false)

    let arr = movies.todosLosMovies

    function next(){
        (current < arr.length - 1  ? setCurrent(current + 1) : setCurrent(0))
    }
    function previous(){
        (current === 0 ?  setCurrent(arr.length - 1) : setCurrent(current - 1) )
    }

    function showRoles(){
        setShow(!show)
    }
    let movie = movies.todosLosMovies[current]
    return (
        <div className="MoviesCard">
            <img className="MoviesCardImage" src={movie.image}/>
            <div className='gradient'></div>
            <div className="previous" onClick={previous}></div>
            {show ? null :<div className= "MoviesCardInfo" >
                <h1 id="indent" className='MoviesCardTitle'>{movie.name}</h1>
                <p id="indent">{movie.description}</p>
            </div>
            }
            <div className="next" onClick={next}></div>
            {show ? <Role movie={movie} current={current} /> : null}

            <h3 className='showRoles' onClick={showRoles}> {show ? "show less" : "show roles"} </h3>
            
        </div>
    );
    }
    
    export default MoviesCard;