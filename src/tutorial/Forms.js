import React, {useState} from 'react'
// Want to have two input fields
// Want to have a button
//First Input username
//Second Input email
//we want to accept the data and store it somewhere in a variable
//initial state will be empty

function Forms() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();  //this is used to prevent default behaviour of our browser
        console.log("Hello");
    };
    return (
        <>

        <article>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="firstName">Name :</label>
                <input type="text" id="firstName" name="firstName"></input>

            </div>
            <div className="form-control">
                <label htmlFor="email">Email :</label>
                <input type="text" id="email" name="email"></input>

            </div>
            <button type="submit" >SUBMIT</button>    {/* onClick does the same job*/ }
            </form>
        </article>
        </>
    )
}

export default Forms
