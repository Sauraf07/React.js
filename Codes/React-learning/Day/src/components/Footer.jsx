import { useState } from "react"

function Footer(){
    const [count,setCount]= useState(0)
    return <>
    <p>NEgative Count is : {count}</p>
    <button onClick={()=> setCount(count-1)}>Decrement</button>
    <h3>©️2026 React Laerning</h3>
    </>
}
export default Footer