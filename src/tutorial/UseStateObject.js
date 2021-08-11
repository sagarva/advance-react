import React, {useState} from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name:"Star Lord",
        age:55,
        message:"I am a god",
    });
    const changeMessage =() => {
        setPerson({...person,message:"Not Anymore"})
    }


    return (
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>Change My Message</button>
            
        </div>
    )
}

export default UseStateObject
