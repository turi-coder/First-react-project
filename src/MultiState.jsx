import React, { useState } from 'react'

function MultiState() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [id, setId] = useState(0)

    function handleNameChange(event) {
        console.log(event.target.value);
        setName(event.target.value)

    }
      function handleAgeChange(event) {
        console.log(event.target.value);
        setAge(event.target.value)

    }
      function handleIdChange(event) {
        console.log(event.target.value);
        setId(event.target.value)

    }
    return (
        <>
            <div className="content">
                <label htmlFor="">Name</label><input type="text" onChange={handleNameChange} />
                <label htmlFor="">Age</label><input type="number" onChange={handleAgeChange}/>
                <label htmlFor="">Id</label><input type="number" onChange={handleIdChange}/>
                <button>submit</button>
                <div className="card">
                    <h1>name:{name}</h1>
                    <h2>Age:{age}</h2>
                    <h2>Id:{id}</h2>
                </div>
            </div>
        </>
    )
}

export default MultiState