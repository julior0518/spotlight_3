import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/roleCard.css'

function RoleCard({roles, current}) {
    let empty = roles.esteRoleMoviesId.length === 0
    const [select, setSelect ] = useState(0)
    console.log(select === 0)
    return (
        <div className= "RoleCard">
            <div className='cardsLeft'>
                {roles.esteRoleMoviesId.map((role, i) => {
                    return (
                            <div className= {select === i ? "cardOuter": null}>
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
                asdf
            </div>
        </div>
    );
    }
    
    export default RoleCard;