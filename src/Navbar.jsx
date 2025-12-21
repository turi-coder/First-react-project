import React from 'react'

function Navbar(props) {
    console.log(props);
    
  return (
    <>
    <div>Navbar </div>
    <h1>name:{props.name}/roll:{props.roll}/sec:{props.sec}</h1>
    </>
  )
}

export default Navbar