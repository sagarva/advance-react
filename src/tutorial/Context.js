import React, { useState, useContext } from 'react';
import { data } from './data';
//it will fix our issue that we found with prop drilling that is we have to pass the component through the component treee to acccess it into another component we there a number of components between them.
// context API, REDUX now redux is used for bigger applications for smaller ones we can use useContext hooks

const PerosmContext = React.createContext();
//this will return us two components
// First it will givw us a provider and then a consumer

function ContextAPI() {
    const [people, newPeople] = useState(data);
    const removePerson =(id) => {
        newPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <>
        <section>
            <h3>Context API</h3>
            <List people ={people} removePerson={removePerson} />
        </section>
        </>
    )
}

const List = ({people, removePerson}) =>{
    return <>
    {
        people.map((person) => {
            return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>
        })
    }
    </>
}

const SinglePerson =({id, name, removePerson}) => {
    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)} >Remove</button>
    </div>
}


export default ContextAPI
