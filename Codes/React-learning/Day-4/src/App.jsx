import { useState } from "react"
import Todo from "./components/Todoapp"

function App(){
const [task,setTask]=useState("")
    const [list,setlist]= useState([])

    const addTask = ()=>{
        setlist([...list,task])
        setTask("")
    }
    
    return <>
    <div>
        <input value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        />
        <button onClick={addTask}>Add</button>

        <ul>
            {list.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
    
    </>
}
export default App