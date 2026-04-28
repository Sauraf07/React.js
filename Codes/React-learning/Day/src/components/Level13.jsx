import { useEffect, useState } from "react";

function Level13(){
    const [loading,setLoading] = useState(true)
    const [data,setdata]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
            setLoading(false)
        })
    })
}
export default Level13;