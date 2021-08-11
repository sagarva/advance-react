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
    const [people, setPeople] =useState([]);


    const handleSubmit = (e) =>{
        e.preventDefault();  //this is used to prevent default behaviour of our browser
        if(firstName && email){
            console.log("Submit the Value");
            const person = {firstName:firstName, email:email}; //{firstname, email}
            console.log(person);

        }
        else{
            console.log('Empty Value');
        }
        
        //console.log(firstName, email);
    };
    return (
        <>

        <article>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="firstName">Name :</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label htmlFor="email">Email :</label>
                <input type="text" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>

            </div>
            <button type="submit" >SUBMIT</button>    {/* onClick does the same job*/ }
            </form>
        </article>
        </>
    )
}

export default Forms
