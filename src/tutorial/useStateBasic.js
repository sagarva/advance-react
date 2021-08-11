import React, { useState } from 'react'
// useState is named import so we must must havethe curly braces

// some basic rules of all hooks basically any import / function that starts with use
// components name must be in upper case
// must be in teh function/ component body
// cannot call conditionally

function UseStateBasic() {
    const [day, setDay] = useState("Today is a rainy day :(");
    const handleClick = () => {
        if (day == "Today is a rainy day :(") {
            setDay("Today is a bright and beautiful day!!")
        }
        else {
            setDay("Today is a rainy day :(")
        }

    }
    //console.log(useState("Hola World"));
    return (
        <div>
            <>
                <h1>{day}</h1>
                <button type="button" className="btn" onClick={handleClick}>
                    Change My Day
                </button>
            </>


        </div>
    )
}

export default UseStateBasic
