import { useEffect, useState } from 'react';
import '../style/movieCard.css'



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

    return (
        <div className="MoviesCard">
            <img className="MoviesCardImage" src={movies.todosLosMovies[current].image}/>
            <div className='gradient'></div>
            <div className="previous" onClick={previous}></div>
            <div className={show ? "MoviesCardInfoOpen" : "MoviesCardInfo"} >
                <h1 className='MoviesCardTitle'>{movies.todosLosMovies[current].name}</h1>
                <p>{movies.todosLosMovies[current].description}</p>
            </div>
            <div className="next" onClick={next}></div>

            <h3 className='showRoles' onClick={showRoles}> {show ? "show less" : "show roles"} </h3>

        </div>
    );
    }
    
    export default MoviesCard;