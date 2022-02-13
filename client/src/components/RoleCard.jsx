import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/roleCard.css'

function RoleCard({roles, current}) {
    let empty = roles.esteRoleMoviesId.length === 0
    return (
        <div className= "RoleCard">
                <div className='card'>
                    {/* {empty ?  <p>{ roles.esteRoleMoviesId[0].name}</p> : null} */}
                    {empty ?  null : <p>{ roles.esteRoleMoviesId[0].name}</p>}
                    hello
                </div>
        </div>
    );
    }
    
    export default RoleCard;