import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/roles.css'
import RoleCreate from './RoleCreate';
import RoleCard from './RoleCard'

function Roles({movie}) {
    const [show, setShow] = useState(false)
    const [roles, setRoles] = useState(true)
    console.log(roles)
    useEffect(()=> {
    async function getMoviesRoles() {
        const res = await axios.get(`${BASE_URL}/roles/${movie._id}`);
        setRoles(res.data);
    }
    getMoviesRoles()
    },[movie])

  
    return (
        <div className= "Roles">
            

            {show ? null : <h2 onClick={()=>{setShow(!show)}} id="addRole" >{show ? "// show roles" : "+ add a role"}
            </h2>}
            {show ? <RoleCreate  movie={movie}/> : null}
            {!show ? <RoleCard roles={roles}/>  : null}
        </div>
    );
    }
    
    export default Roles;