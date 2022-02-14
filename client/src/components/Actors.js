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
    useEffect(()=> {
        async function allActors() {
            const res = await axios.get(`${BASE_URL}/actors/${role._id}`);
            setActors(res.data);
        }
        allActors()
        },[role])
    return (
        <div className= "Actor">
            <div id={show ? "addActorForm" : null} className='addActor' onClick={()=>{setShow(true)}} >
                {show ? <ActorCreate movieID={movie} roleID={role} show={show} setShow={setShow}/> : <h3 className="addActorB" src={addButton}>apply</h3>}
            </div>
            <div className='actorCard'>
                
                {show ? null : actors ? <ActorCard actors={actors}/> : null}
            </div>

            
        </div>
    );
    }
    
    export default Actor