import { use, useState } from "react"

function todo1(){
    const[task,setTask]= useState("")
    const [list, setList]= useState([])

    const addTask = ()=>{
        if (task.trim()==="")return;
        setList([...list,task])
        setTask("")
    }
return <>
    <div className="container mt-5 text-center">
        <h1 className="text-primary">To DO app</h1>

        <div className="d-flex justify-content mt-4">
            <input type="text" className="form-control w-50" placeholder="Enter task" 
            value={task}
            onChange={(e)=>{setTask(e.target.value)}}
            />
            <button className="btn btn-success ms-2" onClick={addTask}>Add</button>
        </div>
        <ul className="list-group mt-4 w-50 mx-auto">
            {list.map((item,index)=>(<li key={index} className="list-group-item">
                {item}
            </li>))}
        </ul>
    </div>

</>
}
export default todo1