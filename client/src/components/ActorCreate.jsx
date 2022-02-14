import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64'
import '../style/actorCreate.css'


function ActorCreate({movieID, roleID, setShow}) {
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
                <h1 className='formElement1'>role application station</h1>
                <input 
                        onChange={handleChange}  
                        placeholder="your name" 
                        id="name" 
                        type="text" 
                        className='inputForm'
                    ></input>
                    <FileBase64 multiple={false} onDone={({base64}) => setForm({...form, image: base64 })}/>

                <button className="buttonForm" onClick={handleSubmit}>Submit</button>
                <div className="buttonFormTransparent" onClick={()=>{setShow(false)}}>Cancel</div>

            </form>
        </div>
    );
    }
    
    export default ActorCreate;