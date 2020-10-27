import React, { useState, useEffect } from 'react'

export default function Title() {

    const [age, setage] = useState(10)

    const changeAge = () => setage(prevState => prevState + 1)

    useEffect(() => {
        document.querySelector("title").innerHTML = `Age: ${age}`
    })

    return (
        <div>
            <h1>Look at the title for side effect</h1>
            <button onClick={changeAge}>Click For Side Effect</button>
        </div>
    )
}


