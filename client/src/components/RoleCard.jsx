import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/roleCard.css'
import Actor from './Actors';

function RoleCard({roles, currentMovie}) {
    let empty = roles.esteRoleMoviesId.length === 0
    const [select, setSelect ] = useState(0)
    let roleSelected = roles.esteRoleMoviesId[select]

    return (
        <div className= "RoleCard">
            <div className='cardsLeft'>
                {roles.esteRoleMoviesId.map((role, i) => {
                    return (
                            <div className= {select === i ? "cardOuter": "cardOuterUnselected"}>
                                <div className='card's onClick={()=>{setSelect(i)}}>
                                    <h4>{ role.name} - { role.age} -{ role.ethnicity}</h4>
                                    <p>{ role.description}</p>
                                    <p>{ role.category}</p>
                                </div>
                            </div>
                    )
                })}
            </div>
            <div className="cardsRight">
                <Actor movie={currentMovie} role={roleSelected}/>
            </div>
        </div>
    );
    }
    
    export default RoleCard;