import { useState } from "react";

function Form(){
    const [ name, setName] = useState("")
    return<>
    <h2>Form </h2>
    <input onChange={(e)=> setName(e.target.value)} />
    <h1>{name}</h1>
    </>
}
export default Form;