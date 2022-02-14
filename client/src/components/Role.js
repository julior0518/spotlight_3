import { useEffect, useState } from 'react';
import '../style/roles.css'
import RoleCreate from './RoleCreate';
import RoleCard from './RoleCard'
import axios from 'axios';
import { BASE_URL } from '../globals'

function Roles({movie,current,shown,setShown}) {
    const [show, setShow] = useState(false)
    const [roles, setRoles] = useState(false)
    useEffect(()=> {
    async function getMoviesRoles() {
        const res = await axios.get(`${BASE_URL}/roles/${movie._id}`);
        setRoles(res.data);
    }
    getMoviesRoles()
    },[movie])
    return (
        <div className= "Roles">
            
            
            <div className="rolesNav">
                {show ? null : <h1 id="addRoleText">{movie.name}</h1>}
                {show ? null : <h3 onClick={()=>{setShow(!show)}}  id="addRole" >{show ? "// show roles" : "+ add a role"}
                
                </h3>}

            </div>
            {show ? <RoleCreate show={show} setShow={setShow} movie={movie}/> : null}
            {show 
                ? null
                : roles 
                    ? <RoleCard roles={roles} currentMovie={current}/>  : null
            }
            <h3 id='backRole' onClick={()=>{setShown(!shown)}}>show less</h3>

                    
        </div>
    );
    }
    
    export default Roles;