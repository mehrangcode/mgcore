import { useState } from "react"

function Button() {
    const [counter, setCounter] = useState(0)
    return (
        <button onClick={() => setCounter(current => current + 1)}>Click {counter ? counter + " Times" : "ME"}</button>
    )
}

export default Button