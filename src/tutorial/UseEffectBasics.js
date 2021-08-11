import React, {useState, useEffect} from 'react'

function UseEffectBasics() {
    const [value, setValue] = useState(0);
    useEffect(() => {    //we can use condition inside the hook but not outside
        console.log('Call UseEffect');
        if(value>0){
        
        document.title = `New Messages(${value})` ;
        }

    },[value]);
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
