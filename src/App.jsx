import About from "./About"
import Block from "./Block"
import C from "./company"
import Home from "./pages/Home"
import './App.css'
import CountWithOutState from "./CountWithOutState"
import CountWithState from "./CountWithState"
import MultiState from "./MultiState"
import StateWithObject from "./StateWithObject"
import { useState } from "react"
import Navbar from "./Navbar"
import Event from "./Event"
import Onchange from "./Onchange"
import FormHandeling from "./FormHandeling"
import IfElse from "./IfElse"
import Loading from "./Loading"
import StateConditional from "./StateConditional"


function App() {

  const [name, setName] = useState("amit")



  return (
    <div>
      {/* *******************Component & jsx******************** */}

      {/* <Home/>
   <C/>
    <About/>
    <Block/> */}
      {/* *******************Component & jsx******************** */}

      {/* *******************state******************** */}

      {/* <CountWithOutState/> */}
      {/* <CountWithState /> */}
      {/* <MultiState/> */}
      {/* <StateWithObject/> */}

      {/* *******************state******************** */}


      {/* *******************props******************** */}


      {/* <Navbar name={name} roll={1} sec={"a"}/> */}
      {/* *******************props******************** */}

      {/* *******************Events******************** */}
      {/* <Event /> */}
      {/* <Onchange /> */}
      {/* <FormHandeling /> */}

      {/* *******************Conditional rendering******************** */}
      {/* <IfElse login={"fg"}/> */}
      {/* <Loading /> */}
      <StateConditional/>

    </div>
  )
}

export default App
