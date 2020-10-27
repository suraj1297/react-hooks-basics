import React, { useContext } from 'react'
import { ThemeContext, ThemeNameContext } from './ContextParent'

export default function ContextChild(props) {

    const style = useContext(ThemeContext)
    const theme = useContext(ThemeNameContext)
    return (
        <div style={style}>
            <h1>The theme here is {theme}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eveniet.</p>

        </div>
    )
}
