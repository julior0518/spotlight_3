import { useState } from 'react';
import '../style/movieCreate.css'
import axios from 'axios';
import { BASE_URL } from '../globals'

function RoleCreate({movie}) {
    const [form, setForm]=useState({
        movie: movie._id,
        name: '',
        description:'',
        age:0,
        ethnicity: '',
        category: ''
    })

    function handleChange(e){
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    async function handleSubmit(e){
        // e.preventDefault()        
        
            axios.post(`${BASE_URL}/roles`,form);
        }
    
   

    return (
        <div className="MovieCreate">
            <form className="MovieForm">
                {movie.name}
                <input 
                    onChange={handleChange}  
                    placeholder="Title" 
                    id="name" 
                    type="text" 
                    className='inputForm'
                ></input>
                <input 
                    onChange={handleChange}  
                    placeholder="Description" 
                    id="description" 
                    type="text" 
                    className='inputForm'
                ></input>
                <input 
                    onChange={handleChange}  
                    placeholder="Budget" 
                    id="budget" 
                    type="text" 
                    className='inputForm'
                ></input>
            
                <button className='buttonForm' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
    }
    
    export default RoleCreate;