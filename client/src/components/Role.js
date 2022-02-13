import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/roles.css'
import RoleCreate from './RoleCreate';

function Roles({movie}) {
    const [show, setShow] = useState(false)
    
    console.log(movie._id)
    // useEffect(()=> {
    // async function allMovies() {
    //     const res = await axios.get(`${BASE_URL}/movies`);
    //     setMovies(res.data);
    // }
    // allMovies()
    // },[])

  
    return (
        <div className= "Roles">
            <h2 onClick={()=>{setShow(!show)}} id="addRole"  className={show ? "animateAddRole" : null}>+ add a role
                {show ? <RoleCreate movie={movie} /> : null}
            </h2>

   
        </div>
    );
    }
    
    export default Roles;