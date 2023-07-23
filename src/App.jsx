import { useState } from 'react' 
import './App.css'

const app = () => {

    const[count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return(
        // pass the count state variable, handleIncrement and handleDecrement functions as props to the counter
        <div>
            <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} count ={ count }/>
        </div>
    )
}

//New counter component, takes in props as parameter

const Counter = (props) => {
    return(
        <div>
            <h1>CounterApp</h1>
            <h2>{props.count}</h2>
            
            {props.count >= 5 ?<div className='barrier1'></div> : <div className='barrier2'></div>}

            <button className='btn1' onClick={props.handleIncrement}>+</button>
            <button className='btn2' onClick={props.handleDecrement}>-</button>
        </div>
    )
}

export default app