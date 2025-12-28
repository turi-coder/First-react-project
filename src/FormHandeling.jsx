import React, { useState } from 'react'

const FormHandeling = () => {
    const [name, setName] = useState("")
    const [roll, setRoll] = useState(0)

    // const test = (e) => {
    //     setName(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        // alert("form submitted.....")
        console.log("name:", name);
        console.log("roll:", roll);

    }

    return (
        <><h1 style={{ textAlign: "center" }}>FormHandeling</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <input type="text" onChange={(e) => setRoll(e.target.value)} />
                <button>submit</button>
            </form>
        </>
    )
}

export default FormHandeling