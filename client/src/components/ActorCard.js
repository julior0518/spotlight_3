
import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/actorCard.css'

function ActorCard({actors}) {
    const [current, setCurrent] = useState(0)

    function next(){
        (current < actors.este.length - 1  ? setCurrent(current + 1) : setCurrent(0))
    }
    function previous(){
        (current === 0 ?  setCurrent(actors.este.length - 1) : setCurrent(current - 1) )
    }

    console.log(actors.este)
    return (
        <div className= "ActorCard">
            {actors.este.length > 0  ?
            <div className="catCard">
                <img className="actorImage" src={actors.este[current].image}></img>
                <div>
                    <h1>{actors.este[current].name}</h1>
                    <p>{actors.este[current].description}</p>
                    <div className='formRow'>
                        <h3 className="addActorB" >vote</h3>
                        <h3 className="addActorB" onClick={previous}>previous</h3>
                        <h3 className="addActorB"onClick={next} >next</h3>
                    </div>
                </div>
            </div>: null}
        </div>
    );
    }
    
    export default ActorCard;