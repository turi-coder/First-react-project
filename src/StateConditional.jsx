import React, { useState } from 'react'

const StateConditional = () => {
    const [Login, setLogin] = useState(false)

    return (
        <div>
            {Login ?
                (<h2>Wlcome user</h2>)
                :
                (<h2>Please login</h2>)
            }
            <button onClick={()=>setLogin(!Login)}>
                {Login ? "Logout" : "Login"}
            </button>
        </div>
    )
}

export default StateConditional