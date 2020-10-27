import React, { useState } from 'react'

export default function SingleState() {

    // const [age, setAge] = useState(24)

    // const [siblings, setsiblings] = useState(10)

    const [state, setState] = useState({ age: 24, siblings: 10 })

    const updateAge = () => {
        // setAge(prevState => prevState + 1)

        setState(prevState => { return { ...prevState, age: prevState.age + 1 } })
    }

    const updateSiblings = () => {
        // setsiblings(prevState => prevState + 1)
        setState(prevState => { return { ...prevState, siblings: prevState.siblings + 1 } })
    }


    return (
        <div>
            <h1>Today I am {state.age} years old</h1>
            <h2>I have {state.siblings} siblings</h2>
            <button onClick={updateAge}>Get Older!</button>
            <button onClick={updateSiblings}>More Siblings!</button>

        </div>
    )
}