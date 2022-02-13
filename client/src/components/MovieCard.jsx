import { useEffect, useState } from 'react';
import '../style/movieCard.css'



function MoviesCard({movies}) {


    console.log(movies.todosLosMovies)
    return (
        <div className="MoviesCard">
            <p>MoviesCard</p>
            <img className="MoviesCard" src={movies.todosLosMovies[0].image}/>
            
        </div>
    );
    }
    
    export default MoviesCard;