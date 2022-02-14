import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/actor.css'
import ActorCard from './ActorCard';
import ActorCreate from './ActorCreate';

function Actor({movie,role}) {
    // useEffect(()=> {
    //     async function allActors() {
    //         const res = await axios.get(`${BASE_URL}/actors`);
    //         setMovies(res.data);
    //     }
    //     allMovies()
    //     },[])

    return (
        <div className= "Actor">
            <div className='addActor'>
                
            </div>
            <div className='actorCard'>

            </div>
        </div>
    );
    }
    
    export default Actor;