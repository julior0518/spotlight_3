
import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/actorCard.css'

function ActorCard({actors}) {

    console.log(actors.este)
    return (
        <div className= "ActorCard">
            {actors.este.length > 0  ?
            <div>
                <img className="actorImage" src={actors.este[0].image}></img>
                <h1>{actors.este[0].name}</h1>
            </div>: null}
        </div>
    );
    }
    
    export default ActorCard;