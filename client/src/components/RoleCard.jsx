import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/roleCard.css'

function RoleCard({roles}) {
    console.log(roles.esteRoleMoviesId[0].name)
    return (
        <div className= "RoleCard">
                <div className='card'>
                    <p>{ roles.esteRoleMoviesId[0].name}</p>
                    hello
                </div>
        </div>
    );
    }
    
    export default RoleCard;