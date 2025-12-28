import React, { useState } from 'react'

const Onchange = () => {
    const[name,setName]=useState("")

    const test =(e)=>{
        setName(e.target.value)
    }

    return (
        <>
        <h1 style={{textAlign:"center"}}>Onchange</h1>
        <input type="text" onChange={test}/>
        <h2>hello,{name}</h2>
        </>
    )
}

export default Onchange