import React from 'react'

function UseStateErrorEx() {
    let title ="Random Title";    // Initial value
    const handleClick = (b) =>{
        
        let c=b;
        console.log(c);

    }
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick(8000)}>
                Change Title
            </button>
        </React.Fragment>
    )
}

export default UseStateErrorEx
