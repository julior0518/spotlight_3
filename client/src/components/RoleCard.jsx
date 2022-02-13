import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/roleCard.css'

function RoleCard({roles, current}) {
    let empty = roles.esteRoleMoviesId.length === 0


    return (
        <div className= "RoleCard">
                {roles.esteRoleMoviesId.map((role, i) => {
                    return (
                        <ul>
                            <div className='card'>
                                <p>{ roles.esteRoleMoviesId[i].name}</p>
                            </div>
                        </ul>
                    )
                })}
        </div>
    );
    }
    
    export default RoleCard;