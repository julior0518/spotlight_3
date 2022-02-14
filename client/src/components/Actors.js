import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/actor.css'
import ActorCard from './ActorCard';
import ActorCreate from './ActorCreate';
import addButton from '../assets/addButton.png'

function Actor({movie,role}) {
    const [show, setShow] = useState(false)
    const [actors, setActors] = useState(false)
    console.log(actors)
    useEffect(()=> {
        async function allActors() {
            const res = await axios.get(`${BASE_URL}/actors`);
            setActors(res.data);
        }
        allActors()
        },[])

    return (
        <div className= "Actor">
            <div id={show ? "addActorForm" : null} className='addActor' onClick={()=>{setShow(true)}} >
                {show ? <ActorCreate movieID={movie} roleID={role}/> : <img className="addActorB" src={addButton}></img>}
            </div>
            <div className='actorCard'>

            </div>
        </div>
    );
    }
    
    export default Actor