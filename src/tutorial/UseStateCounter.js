import React, {useState} from 'react'

function UseStateCounter() {
    const [value, setValue] = useState(0);
    const complexIncrease = () =>{
        setTimeout(()=>{
            setValue((prevState) =>{
                return prevState +1;  //passing a function through setValue of use state
            }
                )

            //setValue(value+500); //passing hard value through the set value of use state
        }, 5000)
    }
    return (
        <>
        <section style={{margin: '4rem 0'}}>
            <h2>
                A Regular Counter
            </h2>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value-1)}>Decrease</button>
            <button className='btn' onClick={() => setValue(value+1)}>Increase</button>
            <button className='btn' onClick={() => setValue(0)}>Reset</button>
        </section>
        <section style={{margin: '4rem 0'}}>
            <h2>
                A More Complex Counter
            </h2>
            <h1>{value}</h1>
            <button className='btn' onClick={complexIncrease}>Increase Later</button>
            
        </section>
        </>
    )
}

export default UseStateCounter
