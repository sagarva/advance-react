import React, { useState, useEffect } from 'react';
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';

function Person() {
    console.log(useParams());    //useParams() is raect-router-dom hook
    const [name,setName] = useState("Default");
    const {id} = useParams();
    useEffect(() => {
        const newPerson =data.find((person) => person.id === parseInt(id));
        setName(newPerson.name)
    }, [])
    return (
        <>
        <div>
            <h1>{name}</h1>
            <Link to="/people" className='btn'>
                Back to People
            </Link>
        </div>
        </>
        
    )
}

export default Person
