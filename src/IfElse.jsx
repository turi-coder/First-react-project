import React, { useState } from 'react'

const IfElse = ({ login }) => {
    let message


    // if (login) {
    //     message="you are login"
    // } else {
    //     message="please login first"
    // }
    return (
        <div>
            <h1>using IfElse</h1>
            <h2>{login ? "you are login" : "please login first"}</h2>
        </div>
    )
}

export default IfElse