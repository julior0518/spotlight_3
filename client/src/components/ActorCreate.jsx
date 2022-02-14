import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64'


function ActorCreate({movieID, roleID}) {
    const [form, setForm]=useState({
        movie: movieID,
        role: roleID._id,

        name:'',
        image:''
    })
    console.log(movieID)
    console.log(roleID)
    function handleChange(e){
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    async function handleSubmit(e){
        // e.preventDefault()        
        
            axios.post(`${BASE_URL}/actors`,form);
        }
    
    
    return (
        <div className= "ActorCreate">
            <form className="ActorForm">
                <h1 className='formElement'>role application station</h1>
                    <FileBase64 multiple={false} onDone={({base64}) => setForm({...form, image: base64 })}/>
                    <input 
                        onChange={handleChange}  
                        placeholder="ypur name" 
                        id="name" 
                        type="text" 
                        className='inputForm'
                    ></input>
                <button className='buttonForm' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
    }
    
    export default ActorCreate;