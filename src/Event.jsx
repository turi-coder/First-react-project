import React, { useState } from 'react'

const Event = () => {
const [count,setCount]=useState(0)

    const handleButton =()=>{
        setCount(count + 1)
    }
    const handleButton1 =()=>{
        if(count>0){
        setCount(count - 1)}
    }
    const handleButton2 =()=>{
        if(count>0){
        setCount(0)}
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Event</h1>
            <h2>{count}</h2>
            <button onClick={handleButton}>+</button>
            <button onClick={handleButton1}>-</button>
            <button onClick={handleButton2}>Reset</button>
        </>
    )
}

export default Event