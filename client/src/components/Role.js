import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/roles.css'

function Roles() {
    
    
    // useEffect(()=> {
    // async function allMovies() {
    //     const res = await axios.get(`${BASE_URL}/movies`);
    //     setMovies(res.data);
    // }
    // allMovies()
    // },[])


    return (
        <div className="Roles">
        <h2>Available Roles</h2>
        </div>
    );
    }
    
    export default Roles;