import React, { useState } from 'react'

export default function State2() {

    const [count, setCount] = useState(0)

    const reset = () => setCount(0)

    const add = () => setCount(prevState => prevState + 1)

    const subtract = () => setCount(prevState => prevState - 1)

    return (
        <div>
            <h1>Count Value is: {count}</h1>
            <button onClick={reset}>Reset</button>
            <button onClick={add}>Plus(+)</button>
            <button onClick={subtract}>Minus(+)</button>
        </div>
    )
}
