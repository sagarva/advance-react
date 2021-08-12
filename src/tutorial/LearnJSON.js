import React from 'react';
import axios from 'axios';

function LearnJSON() {
    const handleClick = (b) =>{
        const promise = axios.post("http://localhost:4040/users",{
            name:"Batman"},{
                headers:{
                    ['content-type']: 'application/json'
                }
        })
    
    promise.then(response => {
        console.log(response)
    })
    promise.catch(error => {
        console.error(error);
    })
}
    return (
        <>
        <h2>Random Title</h2>
        <button type="button" className="btn" onClick={handleClick}>
            Post User
        </button>
        {/*<button type='button' className='btn' onClick={getUsers}>
            Get Users
    </button>    */}
        </>
    )
}

export default LearnJSON
