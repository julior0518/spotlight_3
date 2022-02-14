import { useState } from 'react';
import '../style/movieCreate.css'
import axios from 'axios';
import { BASE_URL } from '../globals'
import FileBase64 from 'react-file-base64'

function MovieCreate({setAnimate, animate}) {
    const [form, setForm]=useState({
        name: '',
        image: '',
        description:'',
        budget:''
    })

    function handleChange(e){
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    async function handleSubmit(e){
        // e.preventDefault()        
        
            axios.post(`${BASE_URL}/movies`,form);
        }
    
    function clickme (){
        document.location.reload()
        return false
    }

    return (
        <div className="MovieCreate">
            <form className="MovieForm">
                <div className='formElement' id='back' onClick={clickme}>// back to movies</div>
                <h1 className='formElement'>add movie</h1>
                <div className='formRow'>            
                    <input 
                        onChange={handleChange}  
                        placeholder="Title" 
                        id="name" 
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
                </div>    
                <input 
                    onChange={handleChange}  
                    placeholder="Description" 
                    id="description" 
                    type="text" 
                    className='inputForm'
                ></input>
                
                    {/* <input 
                    onChange={handleChange}  
                    placeholder="Image" 
                    id="image" 
                    type="image" 
                    className='inputForm'
                ></input> */}
	            {/* <input type="file" id="image" accept="image/*"></input> */}
                <FileBase64 multiple={false} onDone={({base64}) => setForm({...form, image: base64 })}/>
                <button className='buttonForm' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
    }
    
    export default MovieCreate;