import MoviesCard from "./MovieCard";
import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/movies.css'
import MovieCreate from "./MovieCreate";
import addButton from "../assets/addButton.png"

function Movies(props) {
    const [movies, setMovies] =useState()
    const [movieCreate, setMovieCreate] = useState()
    const [animate, setAnimate] =useState()
    
    useEffect(()=> {
    async function allMovies() {
        const res = await axios.get(`${BASE_URL}/movies`);
        setMovies(res.data);
    }
    allMovies()
    },[])

    function handleClick(){
        setAnimate(true)
        setMovieCreate(true)

    }
    
    return (
        <div className="Movies">
            <div onClick={handleClick} className='addMovie'  id={animate ? "wow" : null}>
            {movieCreate ? <MovieCreate animate={animate} setAnimate={setAnimate}/> : <h4 className="addButton"> + </h4>}
            
            
            </div>
            {movies ? <MoviesCard movies={movies}/> : null}
        </div>
    );
    }
    
    export default Movies;