import React,{useState, useReducer} from 'react';
import Modal from './model';
import {data} from "../data"

function Index() {
    const [name, setName] = useState("")
    const [people, setPeople] = useState(data)
    const [showModal, setShowModel] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        {showModal && <Modal /> }
        <form onSubmit={handleSubmit} className="form">
            <div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>

            </div>
            <button type='submit'>Add Users</button>
        </form>
        </>
    )
}

export default Index
