import React, {useState} from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name:"Star Lord",
        age:55,
        message:"I am a god",
    });
    const [name,setName] = useState(
        "Tony Stark"
    )
    const [age,setAge] = useState(45)
    const [message,setMessage] = useState("I'm Ironman")
    const changeMessage =() => {
        setPerson({...person,message:"Not Anymore"})
        setMessage("Hello World")
    }


    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className="btn" onClick={changeMessage}>Change My Message</button>
            
        </div>
    )
}

export default UseStateObject
