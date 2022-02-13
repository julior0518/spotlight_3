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
            {show ? null : <h2 onClick={()=>{setShow(!show)}} id="addRole" >{show ? "// show roles" : "+ add a role"}
            </h2>}

            {show ? <RoleCreate movie={movie} /> : null}
        </div>
    );
    }
    
    export default Roles;