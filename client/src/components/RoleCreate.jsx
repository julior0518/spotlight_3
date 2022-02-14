import { useState } from 'react';
import '../style/roleCreate.css'
import axios from 'axios';
import { BASE_URL } from '../globals'

function RoleCreate({movie , show, setShow}) {
    const [form, setForm]=useState({
        movie: movie._id,
        name: '',
        description:'',
        age:0,
        ethnicity: '',
        category: ''
    })
console.log(movie)
    function handleChange(e){
        e.preventDefault()        
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    async function handleSubmit(e){

            axios.post(`${BASE_URL}/roles`, form);
        }
    
        
console.log(form)
    return (
        <div className="rolesForm">
            
            <form className="RoleForms">
                <h2 id="first">Role for {movie.name}</h2>
                <input 
                        onChange={handleChange}  
                        placeholder="Characte Name" 
                        id="name" 
                        type="text" 
                        className='inputFormR'
                        
                    ></input>
                <input 
                    onChange={handleChange}  
                    placeholder="Description" 
                    id="description" 
                    type="text" 
                    className='inputFormR'
                ></input>
                <div className="formRow">
                    <input 
                        onChange={handleChange}  
                        placeholder="age" 
                        id="age" 
                        type="text" 
                        className='inputFormR'
                    ></input>
                    <input 
                    onChange={handleChange}  
                    placeholder="Ethnicity" 
                    id="ethnicity" 
                    type="text" 
                    className='inputFormR'
                ></input>
                </div>
                
                <input 
                    onChange={handleChange}  
                    placeholder="Lead, Secondary, Extra" 
                    id="category" 
                    type="text" 
                    className='inputFormR'
                ></input>
                <div className='formRow'>
                    <button className='buttonFormR' onClick={handleSubmit}>Submit</button>
                    <button className='buttonFormR' onClick={() => {setShow(!show)}}>Cancel</button>
                </div>

            </form>
        </div>
    );
    }
    
    export default RoleCreate;