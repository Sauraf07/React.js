import { useState } from "react";

function Level5(){
    const [count,setCount]= useState(0)
    return<>
    <h1>Welcome to Level 5</h1>
    <p>Count is : {count}</p>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    </>
}
export default Level5;