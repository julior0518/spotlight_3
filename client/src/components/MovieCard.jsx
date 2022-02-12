import { useEffect, useState } from 'react';
import '../style/movieCard.css'



function MoviesCard({movies}) {



    return (
        <div className="MoviesCard">
            <p>MoviesCard</p>
            <h1>{movies[0].name}</h1>
            
        </div>
    );
    }
    
    export default MoviesCard;