import { useState } from "react";

function Level9(){
    const [count,setcount]= useState(0)
    return <>
    <p>Like Count : {count}</p>
    <button onClick={()=>setcount(count+1)}>Like </button>
    <button onClick={()=>setcount(count-1)}>Dislike </button>
    <p>{count > 0 ? "People like this" :" People dont like this"}</p>
    </>
}
export default Level9;