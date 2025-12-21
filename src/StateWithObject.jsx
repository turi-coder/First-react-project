import React, { useState } from 'react'
import Contact from './pages/Contact';

function StateWithObject() {
    const [data, setData] = useState({
        name: "",
        roll: "",
        sec: "",
        grade: "",
        contact: ""
    })

    function handleText(e) {
        setData({
            ...data,//(...)sprade operator
            [e.target.name]: e.target.value
        })
    }
    // console.log(data);

    return (
        <>
            <h1>StateWithObject</h1>
            <label htmlFor="">Name</label><input type="text" name='name' onChange={handleText} /><br />
            <label htmlFor="">Roll</label><input type="text" name='roll' onChange={handleText} /><br />
            <label htmlFor="">Section</label> <input type="text" name='sec' onChange={handleText} /><br />
            <label htmlFor="">Contact</label><input type="text" name='contact' onChange={handleText} /><br />
            <label htmlFor="">Grade</label><input type="text" name='grade' onChange={handleText} /><br />
            {/* <h1>name:{data.name}</h1>
            <h1>Roll:{data.roll}</h1>
            <h1>Section:{data.sec}</h1>
            <h1>Grade:{data.grade}</h1>
            <h1>Contact:{data.contact}</h1> */}
            <Contact tata={data} />
        </>
    )
}

export default StateWithObject