import React, {useState, useEffect} from 'react'

function UseEffectBasics() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('Call UseEffect');
        document.title = `New Messages(${value})` ;

    });
    console.log('Render Component');

    return (
        <>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value+1)}>
            Click Me
        </button>
        
        </>
    )
}

export default UseEffectBasics
