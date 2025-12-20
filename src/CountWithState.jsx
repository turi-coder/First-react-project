import { useState } from "react"

function CountWithState() {

    const [count, setCount] = useState(0)

    // setCount(2)

    function inc() {
        setCount(count + 1)

    }
    function dec() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Count app</h1>
            <div className="countApp">
                <h2>{count}</h2>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </>
    )
}

export default CountWithState
